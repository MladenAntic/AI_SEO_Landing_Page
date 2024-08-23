"use client";

import Button from "../components/Button";
import starsBg from "../assets/stars.png";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  return (
    <motion.section
      ref={sectionRef}
      className="h-[492px] grid place-items-center overflow-hidden relative mask-hero-gradient md:h-[800px]"
      style={{
        backgroundImage: `url(${starsBg.src})`,
        backgroundPositionY,
      }}
      animate={{
        backgroundPositionX: starsBg.width,
      }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 120,
      }}
    >
      <div className="absolute inset-0 bg-purple-radial"></div>
      <div className="absolute-center size-64 bg-purple-500 rounded-full border border-white/20 bg-shining-radial shadow-planet-glow md:size-96"></div>
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
        className="absolute-center size-[344px] border border-white opacity-20 rounded-full md:size-[580px]"
      >
        <div className="absolute size-2 bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute size-2 bg-white rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute size-5 border border-white inline-flex items-center justify-center rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2">
          <div className="size-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "-1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
        className="absolute-center size-[444px] rounded-full border border-white/20 border-dashed md:size-[780px]"
      ></motion.div>
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 100,
          ease: "linear",
        }}
        className="absolute-center size-[544px] rounded-full border border-white opacity-20 md:size-[980px]"
      >
        <div className="absolute size-2 bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute size-2 bg-white rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2"></div>
      </motion.div>
      <div className="container relative mt-16">
        <h1 className="text-8xl font-semibold tracking-tighter bg-white bg-text-radial text-transparent bg-clip-text text-center md:text-[168px] md:leading-none">
          AI SEO
        </h1>
        <p className="text-lg text-white/70 mt-5 text-center md:text-xl max-w-xl mx-auto">
          Elevate your site&apos;s visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>
        <div className="flex justify-center mt-5">
          <Button>Join waitlist</Button>
        </div>
      </div>
    </motion.section>
  );
};
