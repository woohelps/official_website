import React, { useEffect, useRef } from "react";
import ServiceCard from "./ServiceCard";
import { m, useInView } from "framer-motion";
import Image from "next/image";

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

const OurService = () => {
  const websiteDesignDemoVideoRef = useRef<HTMLVideoElement>(null);
  const websiteDesignDemoIsInView = useInView(websiteDesignDemoVideoRef, {
    amount: 0.8,
  });

  useEffect(() => {
    if (websiteDesignDemoIsInView) {
      websiteDesignDemoVideoRef.current?.play();
    } else {
      websiteDesignDemoVideoRef.current?.pause();
    }
  }, [websiteDesignDemoIsInView]);

  return (
    <section className="container mx-auto mb-[160px]" id="our-service">
      <m.h3
        className="font-bold text-[34px] text-center mb-[30px]"
        {...fadeUpAnimation}
      >
        Our Service
      </m.h3>

      <m.p
        className="text-[#6F6F6F] text-center mb-[64px]"
        {...fadeUpAnimation}
      >
        boosting efficiency and shortening project timelines
        This not only ensures delivery
      </m.p>
      <div className="grid grid-cols-2 gap-[50px]">
        <div className="grid gap-[50px]">
          <ServiceCard
            title={
              <h4>
                <span className="text-[#1F9D55]">Website</span> Design
              </h4>
            }
            description="boosting efficiency and shortening project timelines This  not only ensures delivery "
            className="bg-[#F0F4ED]"
          >
            <video
              loop
              muted
              playsInline
              ref={websiteDesignDemoVideoRef}
              src="/videos/website-design-demo.mp4"
              className="rounded-lg mt-[34px] shadow-[0px_16px_46px_rgba(28,63,57,0.30)]"
            />
          </ServiceCard>
          <ServiceCard
            title={
              <h4 className="text-white">
                Custom Software <span className="text-[#90D249]">&</span> CRM
              </h4>
            }
            description="boosting efficiency and shortening project timelines This  not only ensures delivery "
            className="bg-[#373C39]"
          >
            <Image
              src="/images/home/custom-software.png"
              alt=""
              width={420}
              height={199}
              className="mt-[34px] w-full"
            />
          </ServiceCard>
        </div>
        <div className="grid gap-[50px]">
          <ServiceCard
            title={
              <h4>
                <span className="text-[#1F9D55]">SEO</span> & Social Media
                Marketing
              </h4>
            }
            description="boosting efficiency and shortening project timelines This  not only ensures delivery "
            className="bg-[#F2F2F2]"
          >
            <div className="pt-[40px] gap-[31px] grid grid-cols-4">
              <Image
                src="/images/home/facebook.png"
                width={82}
                height={82}
                alt=""
              />
              <Image
                src="/images/home/youtube.png"
                width={82}
                height={82}
                alt=""
              />
              <Image
                src="/images/home/linkedin.png"
                width={82}
                height={82}
                alt=""
              />
              <Image
                src="/images/home/ticktock.png"
                width={82}
                height={82}
                alt=""
              />
            </div>
          </ServiceCard>
          <ServiceCard
            title={
              <h4>
                Mobile <span className="text-[#1F9D55]">Apps</span>
              </h4>
            }
            description="boosting efficiency and shortening project timelines This  not only ensures delivery "
            className="bg-[#E4F4D3] pb-0 flex flex-col justify-between"
          >
            <div className="mt-[32px] flex overflow-hidden">
              <m.div
                {...fadeUpAnimation}
                viewport={{ amount: "some", once: true }}
                whileInView={{
                  ...fadeUpVariants.onscreen,
                  transition: { duration: 0.8, delay: 0.3 },
                }}
                className="w-full mr-6"
              >
                <Image
                  src="/images/home/app-1.png"
                  width={200}
                  height={390}
                  alt=""
                  className="w-full shadow-[0px_27px_46px_rgba(61,68,36,0.15)]"
                />
              </m.div>
              <m.div
                {...fadeUpAnimation}
                viewport={{ amount: "some", once: true }}
                whileInView={{
                  ...fadeUpVariants.onscreen,
                  transition: { duration: 0.8, delay: 0.3 },
                }}
                className="w-full flex items-end"
              >
                <Image
                  src="/images/home/app-2.png"
                  width={200}
                  height={371}
                  alt=""
                  className="w-full shadow-[0px_27px_46px_rgba(61,68,36,0.15)]"
                />
              </m.div>
            </div>
          </ServiceCard>
        </div>
      </div>
    </section>
  );
};

export default OurService;
