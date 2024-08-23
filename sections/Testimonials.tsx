"use client";

import Image from "next/image";
import { testimonials } from "../constants";
import { motion } from "framer-motion";

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl text-center tracking-tighter font-medium md:text-6xl">
          Beyond Expectations
        </h2>
        <p className="text-white/70 text-lg text-center mt-5 tracking-tight max-w-sm mx-auto md:text-xl">
          Our revolutionary AI SEO tools have transformed our client&apos;s
          strategies.
        </p>
        <div className="flex overflow-hidden mt-10 mask-logos-gradient">
          <motion.div
            initial={{
              translateX: "-50%",
            }}
            animate={{ translateX: "0%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30,
            }}
            className="flex gap-5 pr-5 flex-none"
          >
            {[...testimonials, ...testimonials].map((testimonial) => (
              <div
                key={testimonial.name}
                className="border border-white/15 p-6 rounded-xl bg-testimonial-gradient max-w-xs flex-none md:p-10 md:max-w-md"
              >
                <div className="text-lg tracking-tight md:text-2xl">
                  {testimonial.text}
                </div>
                <div className="flex items-center gap-3 mt-5">
                  <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-[rgb(140,69,244)] after:mix-blend-soft-light before:content-[''] before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg">
                    <Image
                      src={testimonial.avatarImg}
                      alt={`Avatar for ${testimonial.name}`}
                      width={44}
                      height={44}
                      className="size-11 rounded-lg grayscale border border-white/30"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div>{testimonial.name}</div>
                    <div className="text-white/50 text-sm">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
