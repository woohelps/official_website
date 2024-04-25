import React, { useEffect, useRef } from "react";
import { m, useInView } from "framer-motion";
import ProcessCard from "./ProcessCard";
import dynamic from "next/dynamic";
import Arrow1 from "@/public/lottie/process-arrow-1/animation.json";
import Arrow2 from "@/public/lottie/process-arrow-2/animation.json";
import { LottieRefCurrentProps } from "lottie-react";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

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
  viewport: { amount: "all", once: true },
} as const;

const ProcessPart = () => {
  const firstAreaRef = useRef<HTMLDivElement>(null);
  const lastAreaRef = useRef<HTMLDivElement>(null);

  const firstAreaInView = useInView(firstAreaRef, { amount: "all", once: true });
  const lastAreaInView = useInView(lastAreaRef, { amount: "all", once: true });

  const firstArrowRef = useRef<LottieRefCurrentProps>(null);
  const lastArrowRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (firstAreaInView) {
      const timer = setTimeout(() => {
        firstArrowRef.current?.play();
      }, 300);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [firstAreaInView]);

  useEffect(() => {
    if (lastAreaInView) {
      const timer = setTimeout(() => {
        lastArrowRef.current?.play();
      }, 600);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [lastAreaInView]);

  return (
    <section className="container mx-auto mb-[133px]" id="our-service">
      <m.h3
        className="font-bold text-[34px] text-center mb-[60px]"
        {...fadeUpAnimation}
      >
        Unique Collaboration Process
      </m.h3>
      <div
        className="grid grid-cols-3 gap-x-[30px] mb-[50px]"
        ref={firstAreaRef}
      >
        <ProcessCard
          title="Requirements Analysis"
          description="by understanding your needs to ensure our solution aligns perfectly with your business goals."
          imgName="process-1.png"
        >
          <div className="absolute -bottom-[10px] -right-10">
            <Lottie
              lottieRef={firstArrowRef}
              animationData={Arrow1}
              loop={false}
              autoplay={false}
              style={{ width: 75 }}
            />
          </div>
        </ProcessCard>
        <ProcessCard
          title="Design Prototyping"
          description="Our team designs a user-friendly interface and develops a prototype that lets you see and feel the initial product concept."
          imgName="process-2.png"
          delay={0.3}
        />
        <ProcessCard
          title="Develop"
          description="Using cutting-edge technologies, our developers build a robust and scalable application tailored to your requirements."
          imgName="process-3.png"
          delay={0.6}
        />
      </div>
      <div className="grid grid-cols-3 gap-x-[30px]" ref={lastAreaRef}>
        <ProcessCard
          title="Testing"
          description="omprehensive testing is performed to ensure the software is reliable, secure, and performs excellently across all scenarios."
          imgName="process-4.png"
        />
        <ProcessCard
          title="Deploymen Maintenance"
          description="We deploy your software smoothly and ensure it runs seamlessly, providing ongoing support to keep it at peak performance."
          imgName="process-5.png"
          delay={0.3}
        >
          <div className="absolute top-0 -right-10">
            <Lottie
              lottieRef={lastArrowRef}
              animationData={Arrow2}
              loop={false}
              autoplay={false}
              style={{ width: 60 }}
            />
          </div>
        </ProcessCard>
        <ProcessCard
          title="Feedback Iteration"
          description="Post-launch, we gather feedback to continuously refine the software, enhancing user satisfaction and performance."
          imgName="process-6.png"
          delay={0.6}
        />
      </div>
    </section>
  );
};

export default ProcessPart;
