import React from "react";
import A from "../assets/A.mp4";
import B from "../assets/B.mp4";
import C from "../assets/C.mp4";
import D from "../assets/D.mp4";
import Mb from "../assets/Mb.mp4";
import Ma from "../assets/Ma.mp4";
import Mc from "../assets/Mc.mp4";
import Ab from "../assets/Ab.mp4";
import Ac from "../assets/Ac.mp4";

export const Works = () => {
  return (
    <>
      <div className="pt-32 flex justify-center">
        <div className="mx-7 overflow-hidden p-5 bg-white/5 lg:flex flex-col items-center sm:justify-center rounded-lg">
          <h1 className="text-white text-3xl text-center">Blender Render</h1>
          <p className="text-white/30 m-4 flex justify-center">
            Click on video to watch full version.
          </p>

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
      <div className="mx-7 mt-20 overflow-hidden p-5 bg-white/5 lg:flex flex-col items-center sm:justify-center rounded-lg">
        <div>
          <div>
            <h1 className="text-white text-3xl text-center">Projects</h1>
            <p className="text-white/30 m-4 flex justify-center">
              Click on projects to see repositories.
            </p>
            <div className=" flex-cols bg-black/30 rounded-lg px-8 py-5 ">
              <a
                href="https://github.com/manishpal4/Ai_chatbot"
                target="_blank"
              >
                <div className=" h-full">
                  <h1 className="text-5xl text-white pb-1">01</h1>
                  <hr />
                </div>
                <div>
                  <h1 className="text-white text-3xl py-4">AI AwnserBot.</h1>
                  <p className="text-white/30">
                    An openai api integrated awnser bot which give awnser with
                    high correctively like chat GPT.
                  </p>
                </div>
              </a>
            </div>

            <div className=" flex-cols bg-black/30 rounded-lg px-8 py-5 mt-5 ">
              <a
                href="https://github.com/manishpal4/imageEditing"
                target="_blank"
              >
                <div className=" h-full">
                  <h1 className="text-5xl text-white pb-1">02</h1>
                  <hr />
                </div>
                <div>
                  <h1 className="text-white text-3xl py-4">
                    Simple Photo Manipulation app.
                  </h1>
                  <p className="text-white/30">
                    A simple photo manipulation app which allow us to manipulate
                    photo with aspect like border radius, hue and saturation
                    border color and radius etc.
                  </p>
                </div>
              </a>
            </div>

            <div className=" flex-cols bg-black/30 rounded-lg px-8 py-5 mt-5 ">
              <a
                href="https://github.com/manishpal4/Bubble-Game"
                target="_blank"
              >
                <div className=" h-full">
                  <h1 className="text-5xl text-white pb-1">03</h1>
                  <hr />
                </div>
                <div>
                  <h1 className="text-white text-3xl py-4">Bubble Game.</h1>
                  <p className="text-white/30">
                    A bubble game in which a number shows and you have to click
                    on bellow numbers to score point. In this project pure
                    javaScript is used for interaction in react framework.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-7 mt-20 overflow-hidden p-5 bg-white/5 lg:flex flex-col items-center sm:justify-center rounded-lg">
        <h1 className="text-white text-3xl text-center">Figma</h1>
        <p className="text-white/30 m-4 flex justify-center">
          Some Designs in Figma.
        </p>

        <p className="text-white pb-3">
          Some experiments with Figma and Jitter
        </p>

        <video className="lg:h-96" autoPlay loop muted src={Mb}></video>

        <div className="lg:flex gap-24 mt-16">
          <div className="flex justify-center gap-5 mt-9">
            <video className="h-80" autoPlay loop muted src={Ma}></video>
            <video className="h-80" autoPlay loop muted src={Mc}></video>
          </div>

          <div className="flex justify-center gap-5 mt-9">
            <video className="h-80" autoPlay loop muted src={Ab}></video>
            <video className="h-80" autoPlay loop muted src={Ac}></video>
          </div>
        </div>
      </div>
    </>
  );
};
