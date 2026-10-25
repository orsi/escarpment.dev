import "./global.css";
import { type ReactNode } from "react";
import Navigation from "./_src/Navigation";
import Footer from "./_src/Footer";
import Intro from "./_src/Intro";
import FaviconIcon from "./favicon.png";

export const metadata = {
  metadataBase: new URL("https://escarpment.dev"),
  title: {
    default:
      "Escarpment Developments | Home Renovations in Stoney Creek, Hamilton, and the GTA",
    template: "%s | Escarpment Developments",
  },
  description:
    "Escarpment Developments provides home renovations, flooring, tile, drywall, painting, and property improvement services across Stoney Creek, Hamilton, and the GTA.",
  keywords: [
    "home renovations Stoney Creek",
    "renovation contractor Hamilton",
    "flooring and tile GTA",
    "bathroom renovations Stoney Creek",
    "drywall and finishing GTA",
    "painting and trim Hamilton",
    "property improvements GTA",
    "home renovation services Stoney Creek",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://escarpment.dev",
    siteName: "Escarpment Developments",
    title:
      "Escarpment Developments | Home Renovations in Stoney Creek, Hamilton, and the GTA",
    description:
      "Full-service renovation, flooring, and property improvement solutions for homeowners across Stoney Creek, Hamilton, and the Greater Toronto Area.",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Escarpment Developments | Home Renovations in Stoney Creek, Hamilton, and the GTA",
    description:
      "Home renovation, flooring, painting, and property improvement services for Stoney Creek, Hamilton, and the Greater Toronto Area.",
    images: ["/logo.png"],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" type="image/png" href={FaviconIcon.src}></link>
      </head>
      <body className="font-roboto bg-primary-dark">
        <Intro />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
