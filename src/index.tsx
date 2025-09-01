import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MintellectLanding } from "./screens/MintellectLanding/MintellectLanding";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <MintellectLanding />
  </StrictMode>,
);
