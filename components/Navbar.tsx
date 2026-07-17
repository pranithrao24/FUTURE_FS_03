"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Menu", href: "#menu", id: "menu" },
  { name: "Gallery", href: "#gallery", id: "gallery" },
  { name: "Reservation", href: "#reservation", id: "reservation" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = links
        .map((link) => document.getElementById(link.id))
        .filter(Boolean) as HTMLElement[];

      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 140;

        if (window.scrollY >= sectionTop) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/95 shadow-xl backdrop-blur-xl"
          : "bg-black/55 backdrop-blur-md"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all ${
          scrolled ? "py-4" : "py-5"
        }`}
      >
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="text-2xl font-black tracking-wide text-yellow-400 sm:text-3xl"
        >
          Royal Spice
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => {
            const active = activeSection === link.id;

            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative py-2 text-sm font-bold transition ${
                  active
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                {link.name}

                {active && (
                  <motion.span
                    layoutId="active-navbar-link"
                    className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-yellow-400"
                  />
                )}
              </a>
            );
          })}

          <a
            href="#reservation"
            className="rounded-full bg-yellow-400 px-6 py-3 font-black text-black transition hover:-translate-y-0.5 hover:bg-yellow-300"
          >
            Book Table
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((previous) => !previous)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-[#111111] lg:hidden"
          >
            <div className="space-y-2 px-6 py-6">
              {links.map((link) => {
                const active = activeSection === link.id;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-base font-bold transition ${
                      active
                        ? "bg-yellow-400 text-black"
                        : "text-white hover:bg-white/10 hover:text-yellow-400"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}

              <a
                href="#reservation"
                onClick={() => setOpen(false)}
                className="mt-4 block rounded-xl bg-yellow-400 py-4 text-center font-black text-black"
              >
                Book Table
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}