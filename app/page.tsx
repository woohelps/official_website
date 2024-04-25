"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import Hero from "./Hero";
import OurService from "./OurService";
import ProcessPart from "./ProcessPart";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <LazyMotion features={domAnimation}>
        <OurService />
        <ProcessPart />
      </LazyMotion>
      <div className="h-80">
        footer
      </div>
    </main>
  );
}
