"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-20 pt-44 md:pt-40"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
         backgroundImage: "url('/images/hero.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 mx-auto w-full max-w-6xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-yellow-400 sm:text-base"
        >
          Welcome To
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-5xl text-5xl font-black leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Royal Spice
          <span className="block text-yellow-400">Restaurant</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mx-auto mt-8 max-w-3xl text-base leading-8 text-gray-200 sm:text-lg md:text-xl"
        >
          Experience authentic Indian cuisine crafted with fresh ingredients,
          rich flavours, and unforgettable hospitality in a luxurious dining
          atmosphere.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#reservation"
            className="flex items-center gap-2 rounded-full bg-yellow-400 px-8 py-4 text-lg font-bold text-black transition hover:scale-105 hover:bg-yellow-300"
          >
            <CalendarDays size={22} />
            Reserve a Table
          </a>

          <a
            href="#menu"
            className="flex items-center gap-2 rounded-full border-2 border-yellow-400 px-8 py-4 text-lg font-bold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
          >
            Explore Menu
            <ArrowRight size={22} />
          </a>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-5 sm:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-md">
            <h2 className="text-4xl font-black text-yellow-400">15+</h2>
            <p className="mt-2 text-gray-300">Years of Experience</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-md">
            <h2 className="text-4xl font-black text-yellow-400">50+</h2>
            <p className="mt-2 text-gray-300">Signature Dishes</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-md">
            <h2 className="text-4xl font-black text-yellow-400">10K+</h2>
            <p className="mt-2 text-gray-300">Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
}