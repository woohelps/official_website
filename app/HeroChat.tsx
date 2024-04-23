"use client";

import React from "react";
import animationData from "@/public/lottie/hero-chat/animation.json";
import dynamic from "next/dynamic";
import Image from "next/image";

const size = { width: 367 * 1.16, height: 256 * 1.16 };

const Lottie = dynamic(() => import("react-lottie"), {
  loading: () => (
    <div className="ml-[30px]">
      <Image
        width={367}
        height={256}
        src="/lottie/hero-chat/poster.png"
        alt=""
      />
    </div>
  ),
  ssr: false,
});

export const HeroChat = () => {
  return (
    <div style={size}>
      <Lottie
        {...size}
        options={{
          loop: true,
          autoplay: true,
          animationData: animationData,
        }}
        eventListeners={[]}
      />
    </div>
  );
};
