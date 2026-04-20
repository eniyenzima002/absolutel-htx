"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";

const links = [
  ["Upcoming Shows", "/upcoming-shows"],
  ["Artists", "/artists"],
  ["Submission", "/submit"],
  ["Contact", "/contact"],
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-40">
        <div className="">
          <div className="flex items-center justify-between sm:px-6">
            <Link href="/" aria-label="Absolutely HTX home">
              <Logo className="scale-90 origin-left sm:scale-100 hover:bg-amber-700/10 rounded-full" />
            </Link>
            <button
              className="md:hidden text-white/90 hover:text-amber-300 px-7"
              onClick={() => setOpen(!open)}
            >
              <Menu size={45} />
            </button>
            <nav className="hidden items-center gap-6 md:flex">
              {links.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-lg font-normal transition p-1 rounded-lg border-b ${
                    pathname === href
                      ? "text-amber-300 border-amber-300"
                      : "text-white/90 hover:text-amber-300 hover:border-amber-300"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-black/90  md:hidden">
          <button
            className="absolute top-6 right-7 text-white/90 hover:text-amber-300 text-4xl"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X size={45} className="text-red-600"/>
          </button>

          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`text-2xl font-normal transition ${
                pathname === href
                  ? "text-amber-300"
                  : "text-white/90 hover:text-amber-300"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}