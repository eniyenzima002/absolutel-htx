import React from "react";
import Link from "next/link";
import { site } from "@/lib/data";
import Image from "next/image";

export function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="pb-10 pt-6 bg-gradient-to-r from-black/95 via-black to-black/95">
      <div className="container-shell">
        <div className="flex flex-col items-center justify-between gap-5 px-6 py-6 text-center sm:flex-row sm:text-left">
          <div className="">
            <Image src="/logo.png" alt={site.name} width={250} height={50} className="mx-auto mb-2" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-lg font-semibold uppercase bg-gradient-to-r from-lime-300 via-purple-400 to-amber-300 bg-clip-text text-transparent">
            <Link href="/upcoming-shows">Shows</Link>
            <Link href="/artists">Artists</Link>
            <Link href="/submit">Submission</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="h-0.5 w-full text-sm uppercase bg-gradient-to-r from-lime-400/30 via-pink-300/30 to-teal-200/70 text-transparent"/>
        <div className="py-12 text-center">
          {/* <p className="text-lg font-black text-cocoa">{site.name}</p> */}
            <p className="text-sm uppercase bg-gradient-to-r from-lime-300 via-purple-400 to-amber-300 bg-clip-text text-transparent">{site.tagline} {date} - Site by Catherine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
