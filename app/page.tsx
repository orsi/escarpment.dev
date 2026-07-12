"use client";

import Logo from "./components/Logo";
import "./page.css";

export default function Page() {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        height: "100dvh",
        justifyContent: "center",
        margin: "0 auto",
        maxWidth: 600,
        overflow: "hidden",
      }}
    >
      <Logo />
    </div>
  );
}
