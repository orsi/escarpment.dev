"use client";

import Link from "next/link";
import {
  FACEBOOK_ESCARPMENTDEVELOPMENTS_URL,
  INSTAGRAM_ESCARPMENTDEVELOPMENTS_URL,
} from "./globals";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import FacebookLogo from "./FacebookLogo";

export default function Footer() {
  const [stripeWidth, setStripeWidth] = useState(16);
  const [stripeGap, setStripeGap] = useState(32);

  useEffect(() => {
    const pickNewStripe = () => {
      const newSpace = Math.max(16, Math.ceil(Math.random() * 32));
      const newWidth = Math.max(1, Math.ceil(Math.random() * newSpace - 2));
      setStripeWidth(newWidth);
      setStripeGap(newSpace);

      timeout = setTimeout(pickNewStripe, 2000 + Math.random() * 2000);
    };
    let timeout = setTimeout(pickNewStripe, 2000 + Math.random() * 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <footer className="mt-auto text-white px-6 py-9 text-footer-text bg-primary-dark sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="mb-3 text-muted text-sm uppercase tracking-[0.35em]">
            <span className="font-black">Escarpment</span>{" "}
            <span className="font-then">Developments</span>
          </h3>
          <p className="text-sm leading-7 text-footer-text/80">
            Trusted craftsmanship for homes, properties, and complete remodeling
            projects.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-base font-semibold">Site Map</h4>
          <ul className="space-y-2 text-sm text-footer-text/80">
            <li>
              <Link href="/" className="hover:text-accent-dark">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-accent-dark">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-accent-dark">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-accent-dark">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-base font-semibold">Contact</h4>
          <ul className="space-y-2 text-sm text-footer-text/80">
            <li>1076 Mud St E</li>
            <li>Stoney Creek, ON L8J 3C2</li>
            <li>billdambrosio@hotmail.com</li>
            <li>(905) 570-6205</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-base font-semibold">Follow</h4>
          <ul className="flex space-x-2 items-start text-sm text-footer-text/80">
            <li>
              <a
                href={INSTAGRAM_ESCARPMENTDEVELOPMENTS_URL}
                target="_blank"
                rel="noreferrer"
                className="block w-8"
              >
                <img src={"/instagram.png"} />
              </a>
            </li>
            <li>
              <a
                href={FACEBOOK_ESCARPMENTDEVELOPMENTS_URL}
                target="_blank"
                rel="noreferrer"
                className="block w-8"
              >
                <FacebookLogo />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <motion.div
        className="h-16 mt-6"
        animate={{
          background: `
          repeating-linear-gradient(
            45deg,
            var(--color-secondary-light),
            var(--color-secondary-light) ${stripeWidth}px,
            var(--color-primary-dark) ${stripeWidth}px,
            var(--color-primary-dark) ${stripeGap}px
          )`,
        }}
        transition={{
          duration: 1
        }}
        style={{
          background: `
          repeating-linear-gradient(
            45deg,
            var(--color-secondary-light),
            var(--color-secondary-light) 0px,
            var(--color-primary-dark) 0px,
            var(--color-primary-dark) 30px
          )`,
        }}
      />

      <div className="mx-auto mt-6 flex max-w-7xl flex-wrap items-center justify-between gap-3 border-t border-footer-text/15 pt-4 text-sm text-footer-text/70">
        <span>
          © {new Date().toLocaleString("en-CA", { year: "numeric" })} Escarpment
          Developments
        </span>
        <div className="flex flex-wrap gap-4">
          <Link href="/privacy" className="hover:text-accent-dark">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-accent-dark">
            Terms of Use
          </Link>
          <Link href="/accessibility" className="hover:text-accent-dark">
            Accessibility
          </Link>
        </div>
      </div>
    </footer>
  );
}
