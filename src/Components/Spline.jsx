import React from "react";
import Spline from "@splinetool/react-spline";

export default function App() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      {/* Spline component */}
      <Spline scene="https://prod.spline.design/e6E9vGTn1iavPd1p/scene.splinecode" />
    </div>
  );
}

