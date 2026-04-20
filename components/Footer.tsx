import React from "react";
import Link from "next/link";
import { site } from "@/lib/data";

export function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="mt-24 pb-10 pt-6">
      <div className="container-shell">
        <div className="glass-card flex flex-col items-center justify-between gap-5 px-6 py-6 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-lg font-black text-cocoa">{site.name}</p>
            <p className="text-sm text-cocoa/80">{site.tagline} {date} - Site by Catherine. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-cocoa/85">
            <Link href="/upcoming-shows">Shows</Link>
            <Link href="/artists">Artists</Link>
            <Link href="/submit">Submission</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
