import "dotenv/config";
import { readFile } from "node:fs/promises";

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const LEADS_FILE = "lead_lists/priority_weak_or_no_site_prospects.csv";
const SUPPRESSION_FILE = "lead_lists/suppression_list.csv";

const args = new Set(process.argv.slice(2));
const getArgValue = (name, fallback) => {
  const arg = process.argv.find((item) => item.startsWith(`${name}=`));
  return arg ? arg.slice(name.length + 1) : fallback;
};

const isSendMode = args.has("--send");
const testRecipient = getArgValue("--test", "");
const limit = Number(getArgValue("--limit", testRecipient ? "1" : "10"));
const offset = Number(getArgValue("--offset", "0"));
const batchDelayMs = Number(getArgValue("--delay", "1200"));
const leadsFile = getArgValue("--file", LEADS_FILE);

const fromEmail = process.env.RESEND_FROM || "dev@bcodes.co.za";
const replyTo = process.env.RESEND_REPLY_TO || fromEmail;
const portfolioUrl = process.env.PORTFOLIO_URL || "https://github.com/blessed-263/dev_portfolio";
const resendApiKey = process.env.RESEND_API_KEY;

function parseCsvLine(line) {
  const values = [];
  let value = "";
  let inQuotes = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const nextChar = line[index + 1];

    if (char === "\"" && nextChar === "\"") {
      value += "\"";
      index += 1;
    } else if (char === "\"") {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      values.push(value);
      value = "";
    } else {
      value += char;
    }
  }

  values.push(value);
  return values;
}

function parseCsv(content) {
  const lines = content.split(/\r?\n/).filter(Boolean);
  const headers = parseCsvLine(lines[0]);

  return lines.slice(1).map((line) => {
    const values = parseCsvLine(line);
    return Object.fromEntries(headers.map((header, index) => [header, values[index] || ""]));
  });
}

async function readSuppressionList() {
  try {
    const content = await readFile(SUPPRESSION_FILE, "utf8");
    return new Set(
      content
        .split(/\r?\n/)
        .map((line) => line.trim().toLowerCase())
        .filter(Boolean)
        .filter((line) => !line.startsWith("#")),
    );
  } catch {
    return new Set();
  }
}

function splitEmails(emailField) {
  return emailField
    .split(";")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean)
    .filter((email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
}

function buildEmail(lead, to) {
  const subject = `A website idea for ${lead.name}`;

  // Convert internal "Offer X" angle into a natural pitch sentence
  const rawAngle = lead.outreach_angle || "";
  const pitch = rawAngle.startsWith("Offer ")
    ? rawAngle.slice(6).charAt(0).toUpperCase() + rawAngle.slice(7)
    : rawAngle || "A clean, professional website to help more customers find and contact you.";

  const websiteStatus = lead.website_status || "";
  const hasNoSite =
    websiteStatus.toLowerCase().includes("no website") ||
    websiteStatus.toLowerCase().includes("directory") ||
    websiteStatus.toLowerCase().includes("platform") ||
    websiteStatus.toLowerCase().includes("gumtree") ||
    websiteStatus.toLowerCase().includes("instagram") ||
    websiteStatus.toLowerCase().includes("linktree") ||
    websiteStatus.toLowerCase().includes("wix") ||
    websiteStatus.toLowerCase().includes("setmore");

  const contextLine = hasNoSite
    ? `I noticed ${lead.name} doesn't have a dedicated website yet — just a listing or booking page.`
    : `I came across ${lead.name} online and spotted an opportunity.`;

  const text = `Hi ${lead.name},

${contextLine}

A lot of great businesses lose customers simply because people can't find them properly online. Here's what I had in mind for you:

${pitch}

I'm Blessed — a software engineering student and full-stack developer based in Zimbabwe. I build fast, mobile-ready websites for small businesses, salons, caterers, creatives, and tradespeople.

If that sounds useful, I can put together a quick concept for ${lead.name} — no cost, no obligation.

Portfolio: ${portfolioUrl}
WhatsApp / call: +263 77 118 2657

If this isn't relevant, just reply "not interested" and I won't follow up.

Best,
Blessed Nyathi
dev@bcodes.co.za`;

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.65;color:#111;max-width:600px;margin:0 auto;">
      <p>Hi <strong>${escapeHtml(lead.name)}</strong>,</p>
      <p>${escapeHtml(contextLine)}</p>
      <p>A lot of great businesses lose customers simply because people can't find them properly online. Here's what I had in mind for you:</p>
      <blockquote style="border-left:3px solid #111;margin:16px 0;padding:10px 16px;background:#f9f9f9;font-style:italic;">
        ${escapeHtml(pitch)}
      </blockquote>
      <p>I'm Blessed — a software engineering student and full-stack developer based in Zimbabwe. I build fast, mobile-ready websites for small businesses, salons, caterers, creatives, and tradespeople.</p>
      <p>If that sounds useful, I can put together a quick concept for <strong>${escapeHtml(lead.name)}</strong> — no cost, no obligation.</p>
      <p>
        Portfolio: <a href="${escapeHtml(portfolioUrl)}">${escapeHtml(portfolioUrl)}</a><br/>
        WhatsApp / call: <strong>+263 77 118 2657</strong>
      </p>
      <p style="color:#888;font-size:12px;margin-top:24px;">If this isn't relevant, reply "not interested" and I won't follow up.</p>
      <p style="margin-top:8px;">Best,<br/><strong>Blessed Nyathi</strong><br/><a href="mailto:dev@bcodes.co.za">dev@bcodes.co.za</a></p>
    </div>
  `;

  return {
    from: `Blessed Nyathi <${fromEmail}>`,
    to,
    reply_to: replyTo,
    subject,
    text,
    html,
  };
}

function escapeHtml(value = "") {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;");
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function sendEmail(payload) {
  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const body = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(body.message || body.error || `Resend error ${response.status}`);
  }

  return body;
}

async function main() {
  const leads = parseCsv(await readFile(leadsFile, "utf8"));
  const suppressed = await readSuppressionList();

  const queue = leads
    .slice(offset)
    .flatMap((lead) => splitEmails(lead.email).map((email) => ({ lead, email })))
    .filter(({ email }) => !suppressed.has(email))
    .slice(0, limit);

  if (queue.length === 0) {
    console.log("No emails queued. Check the CSV, offset, limit, or suppression list.");
    return;
  }

  if (isSendMode && !resendApiKey) {
    throw new Error("RESEND_API_KEY is required for --send mode.");
  }

  console.log(`${isSendMode ? "SEND" : "DRY RUN"} mode`);
  console.log(`Queued emails: ${queue.length}`);
  console.log(`From: ${fromEmail}`);
  console.log(`Reply-To: ${replyTo}`);
  console.log("");

  for (const [index, item] of queue.entries()) {
    const payload = buildEmail(item.lead, testRecipient || item.email);

    if (!isSendMode) {
      console.log(`[${index + 1}/${queue.length}] ${payload.to} | ${payload.subject}`);
      console.log(payload.text.split("\n").slice(0, 9).join("\n"));
      console.log("---");
      continue;
    }

    const result = await sendEmail(payload);
    console.log(`[${index + 1}/${queue.length}] sent ${payload.to} -> ${result.id || "ok"}`);
    await wait(batchDelayMs);
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
