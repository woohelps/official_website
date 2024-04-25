import clsx from "clsx";
import React from "react";
import { m } from "framer-motion";

type ServiceCardProps = {
  title: React.ReactNode;
  description: string;
  children: React.ReactNode;
  className: string;
};

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

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  children,
  className,
}) => {
  return (
    <m.div
      className={clsx("rounded-[10px] p-[40px]", className)}
      {...fadeUpAnimation}
    >
      <div>
        <div className="text-2xl font-semibold mb-3">{title}</div>
        <p className="text-[#6F6F6F]">{description}</p>
      </div>
      {children}
    </m.div>
  );
};

export default ServiceCard;
