import React from "react";
import Spline from "@splinetool/react-spline";

const Home = () => {
  return (
    <>
      <div className="flex flex-col landscape:flex-row">
        {/* Left side: Text content */}
        <div className="flex flex-col justify-center items-center w-full pt-40 my-10 landscape:w-1/2 landscape:h-screen">
          <h1 className="text-white font-black text-5xl text-center">
            Designer | Developer
          </h1>
          <p className="text-white/30 text-center p-5 max-w-lg">
            A designer-developer is skilled in both design and coding. They
            create attractive, easy-to-use websites or apps and make sure they
            work properly. This combination helps them build digital
            experiences that look good and function well.
          </p>
        </div>

        {/* Right side: Spline scene */}
        <div className="w-full h-screen landscape:w-1/2 landscape:h-full flex justify-center items-center bg-black">
          <Spline scene="https://prod.spline.design/e6E9vGTn1iavPd1p/scene.splinecode" />
        </div>
      </div>
    </>
  );
};

export default Home;
