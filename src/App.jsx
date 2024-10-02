import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import Home from "./Components/Home"; // Import the Home component
import Timepass from "./Components/Timepass";
import { Works } from "./Components/Works";
import Bg from "./assets/Bg.png"
import { My_Stack } from "./Components/My_Stack";
import Spline from "@splinetool/react-spline";

function App() {
  return (
    <div className="h-screen w-full  bg-black">
      <div className="absolute w-full h-full my-1/2">
      {/* Spline component */}
      <Spline scene="https://prod.spline.design/e6E9vGTn1iavPd1p/scene.splinecode" />
      </div>
      <img className="absolute " src={Bg} alt="" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home Route */}
        <Route path="/Timepass" element={<Timepass />} />
        <Route path="/Works" element={<Works />} />
        <Route path="/My_Stack" element={<My_Stack />} />
      </Routes>
      
    </div>
  );
}

export default App;
