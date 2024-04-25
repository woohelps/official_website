"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import Hero from "./Hero";
import OurService from "./OurService";
import ProcessPart from "./ProcessPart";
import AiEfficiencyPart from "./AiEfficiencyPart";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <LazyMotion features={domAnimation}>
        <OurService />
        <ProcessPart />
        <AiEfficiencyPart />
      </LazyMotion>
      <div className="h-80">
        footer
      </div>
    </main>
  );
}
