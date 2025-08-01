"use client";

import { motion } from "motion/react";
import { Navbar } from "./navbar";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="flex m-auto max-w-7xl pt-24 flex-col items-center justify-center">
      <Navbar />
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {" Build Smarter Arguments. Think More Clearly."
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          Written for students/workers, this clear‑style logic guide includes
          exercises and real examples to sharpen your thinking toolbox.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#features">
            <button className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 cursor-pointer dark:bg-white dark:text-black dark:hover:bg-gray-200">
              Explore Now
            </button>
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=1LQ2l9d2jD1wcUKmUjEMN-hGGlSRTyhcQ"
            target="_blank"
          >
            <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-secondary/80 cursor-pointer">
              Download
            </button>
          </a>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
          className="relative z-10 mt-20 md:w-[55%] m-auto rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
        >
          <div className="relative w-full md:h-[600px] h-[400px] overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
            <Image src="/assets/images/book.webp" alt="Book" fill />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
