import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import YoMama from "./YoMama";
import Wut from "./Wut";
import Ruth from "./Ruth";

const content = getContent(window.location.pathname);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>{content}</React.StrictMode>);

function getContent(pathname) {
  if (pathname === "/") {
    console.log("BLAM! Ruth");
    return <Ruth />;
  } else if (pathname === "/yomama") {
    console.log("BLAM! YoMama");
    return <YoMama />;
  } else {
    console.log("BLAM! Wut");
    return <Wut />;
  }
}
