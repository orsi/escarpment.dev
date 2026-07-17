import './global.css'
import { type ReactNode } from "react";
import Navigation from "./_src/Navigation";
import Footer from "./_src/Footer";
import Intro from "./_src/Intro";
import FaviconIcon from "./favicon.png";

export const metadata = {
  title: "Escarpment Developments",
  description:
    "Full-service renovation and construction company for homes, remodels, and property projects.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Escarpment Developments</title>
        <link rel="icon" type="image/png" href={FaviconIcon.src}></link>
      </head>
      <body>
        <Intro />
        <div className="flex min-h-screen flex-col bg-primary-dark">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
