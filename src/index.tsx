import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.scss";

// import { LandingPage } from "./pages/LandingPage/LandingPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<React.StrictMode>{/* <LandingPage /> */}</React.StrictMode>);
