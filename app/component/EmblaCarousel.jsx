"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import React, { useEffect } from "react";
import { offerImages } from "@/assets";
import Image from "next/image";
// import globals.css

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [
    Autoplay({ delay: 2000 }),
  ]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container w-full h-[350px] md:h-[500px]">
        {offerImages.map((item, index) => (
          <div key={index} className="embla__slide min-w-0 flex-[0_0_100%]">
            <Image
              src={item.image}
              alt="offer"
              width={1000}
              height={1000}
              className="w-full h-full object-cover flex-[0_0_80%]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
