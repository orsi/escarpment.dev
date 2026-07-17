"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Intro() {
  const [showIntro, setShowIntro] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowIntro(false);
    }, 2500);
  }, []);
  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full overflow-hidden z-1000 bg-primary-dark"
          exit={{ opacity: 0, transition: { ease: "easeIn", duration: 1.5 } }}
        >
          <div className="flex flex-col items-center justify-center h-full">
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
            <h1 className="ml-3 mt-2 text-white/95">
              <motion.div
                className="relative text-4xl font-extrabold tracking-wide"
                initial={{
                  opacity: 0,
                  transform: "translateX(-120px)",
                }}
                animate={{
                  opacity: 1,
                  transform: "translateX(0)",
                }}
                transition={{
                  delay: 1.2,
                  ease: "easeOut",
                }}
              >
                ESCARPMENT
              </motion.div>
              <motion.div
                className="ml-0.5 relative font-light tracking-[11.5px]"
                initial={{
                  opacity: 0,
                  transform: "translateX(120px)",
                }}
                animate={{
                  opacity: 1,
                  transform: "translateX(0)",
                }}
                transition={{
                  delay: 1.5,
                  ease: "easeOut",
                }}
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
