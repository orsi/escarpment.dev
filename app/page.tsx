"use client";
import { useLayoutEffect, useRef } from "react";
import "./page.css";

export default function Page() {
  const escarpmentRef = useRef<HTMLDivElement>(null);
  const developmentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!escarpmentRef.current || !developmentRef.current) {
      return;
    }

    const text1 = escarpmentRef.current.textContent;
    const text2 = developmentRef.current.textContent;

    escarpmentRef.current.textContent = "";
    developmentRef.current.textContent = "";
    escarpmentRef.current.style.visibility = "visible";
    developmentRef.current.style.visibility = "visible";

    let raf = 0;
    let acc = 0;
    let lastUpdate = 0;

    const update = (time: number) => {
      acc += time;
      const delta = time - lastUpdate;

      if (time > 1500 && delta > 66) {
        const textRef1 = escarpmentRef.current.textContent;
        const textRef2 = developmentRef.current.textContent;

        if (textRef1.length < text1.length) {
          escarpmentRef.current.textContent = text1.substring(
            0,
            textRef1.length + 1,
          );
        } else if (textRef2.length < text2.length) {
          developmentRef.current.textContent = text2.substring(
            0,
            textRef2.length + 1,
          );
        }
        lastUpdate = time;
      }
      raf = requestAnimationFrame(update);
    };

    raf = requestAnimationFrame(update);
    return () => {
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: 160,
        margin: "0 auto",
        maxWidth: 600,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 520 200"
        style={{
          color: "var(--color-foreground)",
          width: 200,
        }}
      >
        <defs>
          <mask id="cap">
            <rect x="0" y="0" height="195" width="520" fill="white" />
          </mask>
        </defs>
        <path
          mask="url(#cap)"
          strokeWidth={10}
          strokeDasharray={2000}
          strokeDashoffset={2000}
          stroke="currentColor"
          style={{
            animation: "draw 1800ms ease-out forwards",
          }}
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
      <h1
        style={{
          fontFamily: "sans-serif",
          marginTop: 8,
          textAlign: "center",
        }}
      >
        <div
          ref={escarpmentRef}
          style={{
            fontWeight: 600,
            fontSize: "2rem",
            visibility: "hidden",
          }}
        >
          ESCARPMENT
        </div>
        <div
          ref={developmentRef}
          style={{
            fontWeight: 300,
            fontSize: "1rem",
            letterSpacing: "8px",
            visibility: "hidden",
          }}
        >
          DEVELOPMENTS
        </div>
      </h1>
    </div>
  );
}
