"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reservation", href: "#reservation" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a
          href="#home"
          className="text-3xl font-black tracking-wide text-yellow-400"
        >
          Royal Spice
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-semibold text-white transition hover:text-yellow-400"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#reservation"
            className="rounded-full bg-yellow-400 px-6 py-3 font-bold text-black transition hover:bg-yellow-300"
          >
            Book Table
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {open && (
        <div className="space-y-5 bg-[#111111] px-6 py-6 md:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-lg text-white hover:text-yellow-400"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#reservation"
            className="block rounded-xl bg-yellow-400 py-3 text-center font-bold text-black"
          >
            Book Table
          </a>
        </div>
      )}
    </header>
  );
}