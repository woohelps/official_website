"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import Hero from "./Hero";
import OurService from "./OurService";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <LazyMotion features={domAnimation}>
        <OurService />
      </LazyMotion>
    </main>
  );
}
