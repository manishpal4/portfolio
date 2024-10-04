import React from "react";
import Spline from "@splinetool/react-spline";

const Home = () => {
  return (
    <>
      <div className="flex flex-col landscape:flex-row">
        {/* Left side: Text content */}
        <div className=" flex-col justify-center items-center w-full pt-32 my-10 landscape:w-1/2 landscape:h-screen">
          <div className="landscape:w-5/6 md:w-1/2 landscape:mt-10 landscape:ml-8">
            <h1 className="  text-white font-black text-5xl text-center">
              Designer | Developer
            </h1>
            <p className=" text-white/30 text-center  p-5 landscape:text-white ">
              A designer-developer is skilled in both design and coding. They
              create attractive, easy-to-use websites or apps and make sure they
              work properly. This combination helps them build digital
              experiences that look good and function well.
            </p>
          </div>
        </div>

        {/* Right side: Spline scene */}
        <div className="md:w-1/2 md:sticky md:h-screen w-full h-screen landscape:w-1/2  ">
          <Spline scene="https://prod.spline.design/e6E9vGTn1iavPd1p/scene.splinecode" />
        </div>
      </div>
    </>
  );
};

export default Home;
