import React from "react";
import HeroChat from "./HeroChat";
import CodePrinter from "./CodePrinter";
import ArrowRightIcon from "@/public/icons/ontactus_gengduo.svg";

const Hero = () => {
  return (
    <section className="relative mb-[110px] flex flex-col items-center pb-32 pt-[178px]">
      <div className="absolute inset-0">
        <video
          src="/videos/hero_bg.mp4"
          playsInline
          muted
          autoPlay
          className="w-full"
        />
      </div>
      <div className="w-[742px] flex flex-col items-center z-10 mb-[70px]">
        <h1 className="text-[58px] font-semibold mb-[40px] leading-[67px] space-x-5">
          <span className="animate-fade-right-150 animate-ease-in-out animate-duration-[800ms] inline-block animate-fill-forwards opacity-0">
            Your Dream
          </span>
          <span className="animate-fade-left-150 animate-ease-in-out animate-duration-[800ms] inline-block animate-fill-forwards opacity-0">
            Our Mission
          </span>
          <span className="animate-fade-right-150 animate-delay-300 animate-ease-in-out animate-duration-[800ms] inline-block animate-fill-forwards opacity-0">
            Our Work
          </span>
          <span className="text-[#1F9D55] animate-delay-300 animate-fade-left-150 animate-ease-in-out animate-duration-[800ms] inline-block animate-fill-forwards opacity-0">
            AI-Enhanced
          </span>
        </h1>
        <div className="text-[#888A89] mb-[60px] text-center text-xl leading-[38px] whitespace-pre">
          <p className="animate-fade-up-100 animate-ease-in-out animate-duration-[800ms] animate-delay-300 animate-fill-forwards opacity-0">
            Transforming your ideas into reality—from concept to launch,
          </p>
          <p className="animate-fade-up-100 animate-ease-in-out animate-duration-[800ms] animate-delay-[800ms] animate-fill-forwards opacity-0">
            we leverage cutting-edge AI technology to ensure precision at every
            step
          </p>
        </div>
        <button className="bg-[#1F9D55] py-[20px] px-[67px] rounded-[10px] text-white font-semibold flex items-center animate-fade-up-100 animate-ease-in-out animate-duration-[800ms] animate-delay-[1100ms] opacity-0 animate-fill-forwards hover:bg-[#373C39]">
          Contact Us
          <ArrowRightIcon className="ml-1.5" />
        </button>
      </div>
      <div className="flex z-10">
        <HeroChat />
        <CodePrinter />
      </div>
    </section>
  );
};

export default Hero;
