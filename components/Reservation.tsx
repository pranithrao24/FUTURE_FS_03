"use client";

import { FormEvent, useState } from "react";

export default function Reservation() {
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("Reservation request submitted successfully!");
    event.currentTarget.reset();
  };

  return (
    <section id="reservation" className="bg-[#24170f] px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
        <div>
          <p className="font-bold uppercase tracking-[0.3em] text-yellow-400">
            Reservation
          </p>
          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Reserve your table
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#d7c8ba]">
            Plan your next family dinner, celebration, or business meeting at
            Royal Spice. Submit your details and our team will confirm your
            reservation.
          </p>

          <div className="mt-10 rounded-3xl border border-yellow-400/20 bg-white/5 p-7">
            <p className="font-bold text-yellow-400">Opening Hours</p>
            <p className="mt-3 text-[#d7c8ba]">
              Monday – Sunday: 11:00 AM – 11:00 PM
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-5 rounded-[2rem] bg-[#f7f0df] p-8 text-[#20170f] sm:grid-cols-2"
        >
          <input
            required
            placeholder="Full Name"
            className="rounded-xl border border-[#d8c9aa] bg-white px-4 py-4 outline-none focus:border-[#a67c00]"
          />

          <input
            required
            type="tel"
            placeholder="Phone Number"
            className="rounded-xl border border-[#d8c9aa] bg-white px-4 py-4 outline-none focus:border-[#a67c00]"
          />

          <input
            required
            type="date"
            className="rounded-xl border border-[#d8c9aa] bg-white px-4 py-4 outline-none focus:border-[#a67c00]"
          />

          <input
            required
            type="time"
            className="rounded-xl border border-[#d8c9aa] bg-white px-4 py-4 outline-none focus:border-[#a67c00]"
          />

          <select className="rounded-xl border border-[#d8c9aa] bg-white px-4 py-4 outline-none sm:col-span-2">
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4 Guests</option>
            <option>5 Guests</option>
            <option>6+ Guests</option>
          </select>

          <textarea
            rows={4}
            placeholder="Special requests"
            className="rounded-xl border border-[#d8c9aa] bg-white px-4 py-4 outline-none focus:border-[#a67c00] sm:col-span-2"
          />

          <button className="rounded-xl bg-[#20170f] px-6 py-4 font-black text-yellow-400 transition hover:bg-black sm:col-span-2">
            Submit Reservation
          </button>

          {message && (
            <p className="font-bold text-green-700 sm:col-span-2">{message}</p>
          )}
        </form>
      </div>
    </section>
  );
}