import React from "react";
import Image from "next/image";
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

const AiEfficiencyPart = () => {
  return (
    <section className="container mx-auto flex space-x-[133px] items-center mb-[179px]">
      <div className="w-[484px] relative shrink-0">
        <m.div {...fadeUpAnimation}>
          <Image
            src="/images/home/ai-efficiency-1.png"
            width={432}
            height={314}
            alt=""
          />
        </m.div>
        <m.div
          {...fadeUpAnimation}
          className="absolute top-[99px] left-[144px]"
        >
          <Image
            src="/images/home/ai-efficiency-2.png"
            width={340}
            height={254}
            alt=""
          />
        </m.div>
        <m.div
          {...fadeUpAnimation}
          className="absolute top-[239px] -left-[31px]"
        >
          <Image
            src="/images/home/ai-efficiency-3.png"
            width={287}
            height={46}
            alt=""
          />
        </m.div>
      </div>
      <div>
        <m.h3 className="text-[34px] font-semibold mb-[40px]" {...fadeUpAnimation}>
          Enhancing Development  Efficiency with GPT-4 AI
        </m.h3>
        <m.p className="text-[#6F6F6F]" {...fadeUpAnimation}>
          "We integrate GPT-4 AI technology into our development process, 
          significantly boosting efficiency and shortening project timelines. 
          This not only ensures delivery quality but also enables us to offer 
          competitive pricing, creating greater value for our clients."
        </m.p>
      </div>
    </section>
  );
};

export default AiEfficiencyPart;
