
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./app/App.tsx";
import { DocsPage } from "./app/components/DocsPage.tsx";
import { TermsOfService } from "./app/components/TermsOfService.tsx";
import { PrivacyPolicy } from "./app/components/PrivacyPolicy.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/docs" element={<DocsPage />} />
      <Route path="/termsofservice" element={<TermsOfService />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  </HashRouter>
);
