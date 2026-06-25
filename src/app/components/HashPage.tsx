import { useState, useEffect } from "react";
import App from "../App";
import { TermsOfService } from "./TermsOfService";
import { PrivacyPolicy } from "./PrivacyPolicy";

export function HashPage() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  switch (hash) {
    case "#termsofservice":
      return <TermsOfService />;
    case "#privacy-policy":
      return <PrivacyPolicy />;
    default:
      return <App />;
  }
}
