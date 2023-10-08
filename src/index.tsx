import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.scss";

import { Header } from "./Components/Header/header";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<React.StrictMode>{<Header />}</React.StrictMode>);
