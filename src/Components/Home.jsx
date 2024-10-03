import React from "react";
import Spline from "@splinetool/react-spline";


const Home = () => {
  return (
    <>  
    <div className="flex justify-center items-center"> 
    
     <div className=" w-1/2 h-screen p-8 flex-col justify-center ">
      <h1 className="text-white font-black text-5xl py-10 flex-col justify-center mx-auto" >Designer | Developer</h1>
       <p className=" text-white/30 flex-col justify-center">
        A designer-developer is skilled in both design and coding. They create
        attractive, easy-to-use websites or apps and make sure they work
        properly. This combination helps them build digital experiences that
        look good and function well.
      </p>
     </div>
     <div className="w-1/2 h-screen ">
       <Spline scene="https://prod.spline.design/e6E9vGTn1iavPd1p/scene.splinecode" />
      </div>
     </div>
    </>

  );
};

export default Home;
