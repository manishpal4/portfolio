import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import Home from "./Components/Home"; // Import the Home component
import Timepass from "./Components/Timepass";
import { Works } from "./Components/Works";
import { My_Stack } from "./Components/My_Stack";

function App() {
  return (
    <div className=" w-full  bg-black">
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
