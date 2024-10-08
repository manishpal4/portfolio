import React from "react";
import A from "../assets/A.mp4";
import B from "../assets/B.mp4";
import C from "../assets/C.mp4";
import D from "../assets/D.mp4";

export const Works = () => {
  return (
    <div className="pt-32 flex justify-center">
      <div className="mx-4 overflow-hidden p-5 bg-white/5 lg:flex flex-col items-center sm:justify-center rounded-lg">
        <h1 className="text-white text-3xl text-center">Blender Render</h1>
        <p className="text-white/30 m-4 flex justify-center">Click on video to watch full version.</p>

        {/* Videos Container */}
        <div className="flex flex-wrap justify-center lg:flex-nowrap lg:gap-5">
          {/* First Video */}
          <div className="border-4 border-white/30 rounded-lg overflow-hidden w-full sm:w-1/2 lg:w-1/4 mb-5 lg:mb-0">
            <a
              href="https://www.instagram.com/mann_eei/reel/DAdwP8_S9Re/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
                src={A}
              ></video>
            </a>
          </div>

          {/* Second Video */}
          <div className="border-4 border-white/30 rounded-lg overflow-hidden w-full sm:w-1/2 lg:w-1/4 mb-5 lg:mb-0">
            <a
              href="https://www.instagram.com/mann_eei/reel/Cm16oqohpge/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
                src={B}
              ></video>
            </a>
          </div>

          {/* Third Video */}
          <div className="border-4 border-white/30 rounded-lg overflow-hidden w-full sm:w-1/2 lg:w-1/4 mb-5 lg:mb-0">
            <a
              href="https://www.instagram.com/mann_eei/reel/Chyr_w8ALs4/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
                src={C}
              ></video>
            </a>
          </div>

          {/* Fourth Video */}
          <div className="border-4 border-white/30 rounded-lg overflow-hidden w-full sm:w-1/2 lg:w-1/4 mb-5 lg:mb-0">
            <a
              href="https://www.instagram.com/mann_eei/reel/Ci_8IkrJZQ8/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
                src={D}
              ></video>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
