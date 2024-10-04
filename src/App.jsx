import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import Home from "./Components/Home"; // Import the Home component
import Timepass from "./Components/Timepass";
import { Works } from "./Components/Works";
import { My_Stack } from "./Components/My_Stack";
import Bg from "./assets/Bg.png"
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="relative w-full bg-black">
      <img className="absolute w-full z-0" src={Bg} alt="" /> {/* Set z-index to 0 */}
      <div className="relative "> {/* Higher z-index to ensure content is on top */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} /> {/* Home Route */}
          <Route path="/Timepass" element={<Timepass />} />
          <Route path="/Works" element={<Works />} />
          <Route path="/My_Stack" element={<My_Stack />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
