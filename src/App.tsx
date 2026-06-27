import { BrowserRouter, Route, Routes } from "react-router-dom";
import DevResumePage from "./pages/DevResumePage";
import PortfolioPage from "./pages/PortfolioPage";

/** Hidden GitHub-style resume — not linked from the public portfolio. */
export const HIDDEN_RESUME_PATH = "/u/blessed-official";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HIDDEN_RESUME_PATH} element={<DevResumePage />} />
        <Route path="/*" element={<PortfolioPage />} />
      </Routes>
    </BrowserRouter>
  );
}
