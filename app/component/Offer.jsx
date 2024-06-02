"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import EmblaCarousel from "./EmblaCarousel";

const Offer = () => {
  return (
    <main className="text-copy w-full flex flex-col justify-start items-center">
      <div className="w-full flex flex-col justify-start items-center p-5">
        <h3 className="font-normal text-lg md:text-2xl pb-2">WHY CHOOSE US</h3>
        <div className="w-full h-20 flex justify-center items-center overflow-hidden">
          <TypeAnimation
            sequence={[
              "Reliability", // Types 'One'
              ,
              1000, // Waits 1s
              "Real time logistics tracking", // Deletes 'One' and types 'Two'
              ,
              1000, // Waits 2s
              "Competitive Pricing", // Types 'Three' without deleting 'Two'
              ,
              1000, // Waits 2s
              "Safety and Insurance", // Types 'Three' without deleting 'Two'
              ,
              () => {
                console.log("Sequence completed");
              },
            ]}
            wrapper="span"
            cursor={false}
            repeat={Infinity}
            className="w-full h-16 mx-auto text-center text-xl md:text-4xl font-bold p-3"
          />
        </div>
      </div>
      <EmblaCarousel />
    </main>
  );
};

export default Offer;
