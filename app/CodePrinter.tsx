"use client";

import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx"; // TSX 的支持，确保 JSX 已被引入
import Image from "next/image";
import "./custom-prism.css";
import animationData from "@/public/lottie/hero-arrow/animation.json";
import dynamic from "next/dynamic";
import LottieDelayPlay from "./LottieDelayPlay";
import clsx from "clsx";

const code = `<figure class= 
<img class="w-24 h-24 rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width=
"384" height="512">
<div class="pt-6 text-center space-y-4">
<blockquote>
<p class="text-lg font-medium">`;

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

const CodePrinter: React.FC = () => {
  const [displayedCode, setDisplayedCode] = useState<string>("");
  const [charIndex, setCharIndex] = useState<number>(0);

  useEffect(() => {
    Prism.languages.tsx = Prism.languages.extend(
      "typescript",
      Prism.languages.tsx
    );

    if (charIndex < code.length) {
      const timer = setTimeout(() => {
        setDisplayedCode((prev) => prev + code[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 20); // 每20毫秒显示一个字符

      return () => clearTimeout(timer);
    }
  }, [charIndex]);

  const [arrowFinish, setArrowFinish] = useState(false);

  return (
    <div className="w-[500px] h-[240px] text-xs relative z-10 custom-prism rounded-[22px] bg-white border border-[#E2E4EB] animate-fade-up-100 animate-ease-in-out animate-duration-[800ms] animate-delay-[1400ms] animate-fill-forwards opacity-0">
      <div className="space-x-2.5 py-4 px-6 border-b border-[#E2E4EB]">
        <span className="bg-[#E7E7E7] w-[7px] h-[7px] rounded-full inline-block"></span>
        <span className="bg-[#E7E7E7] w-[7px] h-[7px] rounded-full inline-block"></span>
        <span className="bg-[#E7E7E7] w-[7px] h-[7px] rounded-full inline-block"></span>
      </div>
      <div className="mt-[9px] mx-5">
        <div className="h-[108px]">
          <pre>
            <code
              className="language-tsx"
              dangerouslySetInnerHTML={{
                __html: Prism.highlight(
                  displayedCode,
                  Prism.languages.tsx,
                  "tsx"
                ),
              }}
            ></code>
          </pre>
        </div>
        <button className="py-2 bg-[#373C39] text-white text-center rounded-full w-full mt-5">
          Reset
        </button>
      </div>
      <div className="absolute -top-[18px] right-3">
        <LottieDelayPlay
          delayMs={1400}
          loop={false}
          style={{ width: 218, height: 70 }}
          animationData={animationData}
          onComplete={() => setArrowFinish(true)}
        />
      </div>
      <div className="absolute -right-[140px] -top-[80px]">
        <Image
          src="/images/home/hero-code-slogan.png"
          width={271}
          height={39}
          alt=""
          className={clsx("transition-all duration-300", {
            "opacity-0": !arrowFinish,
          })}
        />
      </div>
    </div>
  );
};

export default CodePrinter;
