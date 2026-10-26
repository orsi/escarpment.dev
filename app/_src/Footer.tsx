"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FACEBOOK_ESCARPMENTDEVELOPMENTS_URL,
  INSTAGRAM_ESCARPMENTDEVELOPMENTS_URL,
} from "./globals";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import FacebookLogo from "./FacebookLogo";

export default function Footer() {
  return (
    <footer className="bg-primary-dark px-6 py-9 text-white sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="mb-3 text-sm tracking-widest uppercase">
            <span className="font-black">Escarpment</span>{" "}
            <span className="font-then">Developments</span>
          </h3>
          <p className="text-footer-text/80 text-sm leading-7">
            Trusted craftsmanship for homes, properties, and complete remodeling
            projects.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-base font-semibold">Site Map</h4>
          <ul className="text-footer-text/80 space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-accent-dark">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about/" className="hover:text-accent-dark">
                About
              </Link>
            </li>
            <li>
              <Link href="/services/" className="hover:text-accent-dark">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact/" className="hover:text-accent-dark">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-base font-semibold">Contact</h4>
          <ul className="text-footer-text/80 space-y-2 text-sm">
            <li>1076 Mud St E</li>
            <li>Stoney Creek, ON L8J 3C2</li>
            <li>
              <a href="mailto:hello@escarpment.dev">hello@escarpment.dev</a>
            </li>
            <li>
              <a href="tel:+19055706205">(905) 570-6205</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-base font-semibold">Follow</h4>
          <ul className="text-footer-text/80 flex items-start space-x-2 text-sm">
            <li>
              <a
                href={INSTAGRAM_ESCARPMENTDEVELOPMENTS_URL}
                target="_blank"
                rel="noreferrer"
                className="block w-8"
                aria-label="Follow Escarpment on Instagram"
              >
                <Image
                  src="/instagram.webp"
                  alt="Instagram logo"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
              </a>
            </li>
            <li>
              <a
                href={FACEBOOK_ESCARPMENTDEVELOPMENTS_URL}
                target="_blank"
                rel="noreferrer"
                className="block w-8"
                aria-label="Follow Escarpment on Facebook"
              >
                <FacebookLogo />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-footer-text/15 text-footer-text/70 mx-auto mt-6 flex max-w-7xl flex-wrap items-center justify-between gap-3 border-t pt-4 text-sm">
        <span>
          {new Date().toLocaleString("en-CA", { year: "numeric" })} Escarpment
          Developments ©
        </span>
        <Image
          className="w-8"
          src="/under-construction.webp"
          title="UNDER CONSTRUCTION SINCE 1999"
          alt="UNDER CONSTRUCTION SINCE 1999"
          width={32}
          height={32}
        />
        <div className="flex flex-wrap gap-4">
          <Link href="/privacy/" className="hover:text-accent-dark">
            Privacy Policy
          </Link>
          <Link href="/terms/" className="hover:text-accent-dark">
            Terms of Use
          </Link>
          <Link href="/accessibility/" className="hover:text-accent-dark">
            Accessibility
          </Link>
        </div>
      </div>
    </footer>
  );
}
