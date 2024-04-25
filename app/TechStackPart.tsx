import Image from "next/image";
import React from "react";
import { m } from "framer-motion";

const fadeUpVariants = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const fadeUpAnimation = {
  initial: fadeUpVariants.offscreen,
  whileInView: fadeUpVariants.onscreen,
  viewport: { once: true },
} as const;

const TechStackPart = () => {
  return (
    <section className="bg-[#313131] py-[150px]">
      <m.h3
        className="text-[34px] text-white mb-[34px] text-center"
        {...fadeUpAnimation}
      >
        Our <span className="text-[#90D249]">Tech Stack</span>
      </m.h3>
      <m.p
        className="text-[#A1A1A1] mb-[80px] text-center w-[732px] mx-auto"
        {...fadeUpAnimation}
      >
        "We integrate GPT-4 AI technology into our development process,
        significantly boosting efficiency and shortening project timelines
        This not only ensures delivery"
      </m.p>
      <div className="space-y-[40px] overflow-hidden h-[230px]">
        <div className="flex space-x-[36px] -ml-[86px] infinite-scroll-images-1">
          {Array.from({ length: 8 * 2 }).map((_, index) => (
            <Image
              src={`/images/home/tech-stack-${(index % 8) + 10}.png`}
              width={230}
              height={90}
              key={index}
              alt=""
            />
          ))}
        </div>
        <div className="flex space-x-[36px] -ml-[220px] infinite-scroll-images-2">
          {Array.from({ length: 9 * 2 }).map((_, index) => (
            <Image
              src={`/images/home/tech-stack-${(index % 9) + 1}.png`}
              width={230}
              height={90}
              key={index}
              alt=""
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackPart;
