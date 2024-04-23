"use client";

import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx"; // TSX 的支持，确保 JSX 已被引入
import Image from "next/image";
import "./custom-prism.css";

const code = `<figure class= 
<img class="w-24 h-24 rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width=
"384" height="512">
<div class="pt-6 text-center space-y-4">
<blockquote>
<p class="text-lg font-medium">`;

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

  return (
    <div className="w-[500px] h-[240px] text-xs relative z-10 custom-prism">
      <Image
        src="/images/home/window.png"
        width={500}
        height={240}
        alt=""
        className="absolute inset-0 -z-10"
      />
      <div className="mt-[58px] mx-5">
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
      <div className="absolute rotate-[7deg] -right-[140px] -top-[71px] text-base whitespace-pre text-center text-[#373C39]">
        Our team uses artificial intelligence to {"\n"} make work more
        efficient!
      </div>
    </div>
  );
};

export default CodePrinter;
