import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/index.css";
import { EncryptionProvider } from "#libs/contexts/encryption-context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <EncryptionProvider>
      <App />
    </EncryptionProvider>
  </React.StrictMode>,
);
