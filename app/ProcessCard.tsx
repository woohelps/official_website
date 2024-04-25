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
} as const;

type ProcessCardProps = {
  imgName: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  delay?: number;
};

const ProcessCard: React.FC<ProcessCardProps> = ({
  title,
  description,
  imgName,
  children,
  delay = 0,
}) => {
  return (
    <m.div
      className="p-[20px] relative"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          delay,
          duration: 0.8,
        },
      }}
      viewport={{ once: true }}
    >
      <div className="flex items-center mb-[22px]">
        <Image
          src={`/images/home/${imgName}`}
          alt=""
          width={90}
          height={90}
          className="mr-[18px]"
        />
        <h4 className="font-semibold text-xl">{title}</h4>
      </div>
      <p className="text-[#6F6F6F]">{description}</p>
      {children}
    </m.div>
  );
};

export default ProcessCard;
