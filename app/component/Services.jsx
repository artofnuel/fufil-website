"use client";
import { images, servicesData } from "@/assets";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <main className="w-full h-auto py-10">
      {servicesData.map((item, index) => (
        <div className="w-full h-auto md:h-[600px] p-5 md:p-0 odd:bg-primary even:bg-white odd:tex-white even:text-primary flex flex-col md:odd:flex-row md:even:flex-row-reverse justify-center items-center gap-10">
          <div className="w-full md:w-1/2 h-full overflow-hidden">
            <Image
              src={item.image}
              alt="services"
              width={1000}
              height={1000}
              className="w-full h-[250px] md:h-full object-cover shadow-lg rounded-lg md:rounded-none hover:first-letter:first-line:marker:*:file:placeholder:backdrop:before:after:first:last:only:odd:even:first-of-type:"
            />
          </div>
          <div className="w-full md:w-2/3 md:p-10 h-full flex flex-col gap-3 justify-center items-start">
            <h2 className="font-bold text-lg md:text-2xl">{item.title}</h2>
            <p className="text-base tracking-wide font-light">
              {item.subtitle}
            </p>
            <div className="w-full">
              <p className="font-semibold font-lg md:text-lg">
                {item.listTitle}
              </p>
              <ul className="w-full grid grid-cols-2 gap-1 list-disc list-inside">
                {item.list.map((list, index) => (
                  <li className="py-2">{list}</li>
                ))}
              </ul>
              <button className="bg-white my-4 p-2 px-10 rounded-full text-primary font-semibold border-2 border-primary">
                Explore
              </button>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Services;
