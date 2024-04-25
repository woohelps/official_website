import React from "react";
import animationData from "@/public/lottie/hero-chat/animation.json";
import Image from "next/image";
import LottieDelayPlay from "./LottieDelayPlay";

const size = { width: 367, height: 256 };

const HeroChat = () => {
  return (
    <div
      style={size}
      className="mr-[35px] animate-fade-up-100 animate-ease-in-out animate-duration-[800ms] animate-delay-[1400ms] animate-fill-forwards opacity-0"
    >
      <LottieDelayPlay
        loop
        animationData={animationData}
        delayMs={1400}
        loading={<Image {...size} src="/lottie/hero-chat/poster.png" alt="" />}
      />
    </div>
  );
};

export default HeroChat;
