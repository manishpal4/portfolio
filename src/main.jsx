import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App"; // Correctly import your App
import "./index.css"; // Import your main CSS file

import ReactDOM from "react-dom/client"; // Updated import


// Create a root with createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <BrowserRouter>
    <App />
    </BrowserRouter>

);

