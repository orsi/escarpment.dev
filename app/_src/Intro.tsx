"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";

export default function Intro() {
  const pathname = usePathname();
  const [showIntro, setShowIntro] = useState(pathname === "/");

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="bg-primary-dark fixed top-0 left-0 z-1000 h-full w-full overflow-hidden"
          exit={{
            opacity: 0,
            transition: { delay: 0.5, duration: 0.8, ease: "easeIn" },
          }}
        >
          <div className="flex h-full flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 520 200"
              width="520"
              className="text-secondary-main w-60"
            >
              <defs>
                <mask id="cap">
                  <rect x="0" y="0" height="195" width="520" fill="white" />
                </mask>
              </defs>
              <motion.path
                initial={{
                  strokeDashoffset: 2000,
                }}
                animate={{
                  strokeDashoffset: 0,
                }}
                transition={{
                  delay: 0.2,
                  duration: 1,
                  ease: "easeInOut",
                }}
                mask="url(#cap)"
                stroke="currentColor"
                strokeWidth="10"
                strokeDasharray={2000}
                fill="none"
                d="m20 200
                l 190 -190
                l 180 180
                l 50 0 
                l -180 -180 
                l -180 180 
                l 50 0 
                l 180 -180 
                l 190 190"
              />
            </svg>
            <h1 className="mt-2 ml-3 text-white/95">
              <motion.div
                className="relative text-4xl font-extrabold tracking-wide"
                initial={{
                  opacity: 0,
                  transform: "translateX(-24px)",
                }}
                animate={{
                  opacity: 1,
                  transform: "translateX(0)",
                }}
                transition={{
                  delay: 0.9,
                  duration: 0.7,
                  ease: "easeOut",
                }}
              >
                ESCARPMENT
              </motion.div>
              <motion.div
                className="relative ml-0.5 font-light tracking-[11.5px]"
                initial={{
                  opacity: 0,
                  transform: "translateX(24px)",
                }}
                animate={{
                  opacity: 1,
                  transform: "translateX(0)",
                }}
                transition={{
                  delay: 1,
                  duration: 0.7,
                  ease: "easeOut",
                }}
                onAnimationComplete={() => setShowIntro(false)}
              >
                DEVELOPMENTS
              </motion.div>
            </h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
