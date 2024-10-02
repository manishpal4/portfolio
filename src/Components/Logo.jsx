import React from "react";
import { Link } from "react-router-dom"; // Importing Link from react-router-dom
import Logo1 from "../assets/Logo1.png"; // Import the logo image (change path if needed)

const Logo = () => {
  return (
    <Link to="/" className="w-16">
      <img src={Logo1} alt="Logo" className="w-full h-auto" />
    </Link>
  );
};

export default Logo;
