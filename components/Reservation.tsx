"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, CheckCircle2, Clock3, Users, X } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

type ReservationForm = {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  requests: string;
};

const initialForm: ReservationForm = {
  name: "",
  phone: "",
  date: "",
  time: "",
  guests: "2",
  requests: "",
};

const timeSlots = [
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
  "10:00 PM",
];

export default function Reservation() {
  const [form, setForm] = useState<ReservationForm>(initialForm);
  const [loading, setLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [submittedReservation, setSubmittedReservation] =
    useState<ReservationForm | null>(null);
  const [error, setError] = useState("");

  const minimumDate = useMemo(() => {
    return new Date().toISOString().split("T")[0];
  }, []);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    const cleanedPhone = form.phone.replace(/\D/g, "");

    if (cleanedPhone.length < 10) {
      setError("Please enter a valid phone number.");
      return;
    }

    if (!form.date || form.date < minimumDate) {
      setError("Please select a valid reservation date.");
      return;
    }

    if (!form.time) {
      setError("Please select a preferred time slot.");
      return;
    }

    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 700));

    const completedReservation = {
      ...form,
      phone: cleanedPhone,
    };

    setSubmittedReservation(completedReservation);
    setShowConfirmation(true);
    setForm(initialForm);
    setLoading(false);
  };

  return (
    <>
      <section id="reservation" className="bg-[#24170f] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-bold uppercase tracking-[0.3em] text-yellow-400">
              Reservation
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Reserve Your Table
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#d7c8ba]">
              Plan your next family dinner, celebration, or business meeting at
              Royal Spice. Submit your details and our team will confirm your
              reservation.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl border border-yellow-400/20 bg-white/5 p-6">
                <Clock3 className="text-yellow-400" size={28} />
                <p className="mt-4 font-bold text-yellow-400">
                  Opening Hours
                </p>
                <p className="mt-2 text-[#d7c8ba]">
                  Monday – Sunday
                </p>
                <p className="text-[#d7c8ba]">
                  11:00 AM – 11:00 PM
                </p>
              </div>

              <div className="rounded-3xl border border-yellow-400/20 bg-white/5 p-6">
                <CalendarDays className="text-yellow-400" size={28} />
                <p className="mt-4 font-bold text-yellow-400">
                  Advance Booking
                </p>
                <p className="mt-2 text-[#d7c8ba]">
                  Reserve early for weekends and special occasions.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="grid gap-5 rounded-[2rem] bg-[#f7f0df] p-6 text-[#20170f] shadow-2xl sm:grid-cols-2 sm:p-8"
          >
            <div>
              <label className="mb-2 block text-sm font-bold text-[#6b4f2b]">
                Full Name
              </label>

              <input
                required
                type="text"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#d8c9aa] bg-white px-4 py-4 outline-none transition focus:border-[#a67c00] focus:ring-4 focus:ring-yellow-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[#6b4f2b]">
                Phone Number
              </label>

              <input
                required
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#d8c9aa] bg-white px-4 py-4 outline-none transition focus:border-[#a67c00] focus:ring-4 focus:ring-yellow-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[#6b4f2b]">
                Reservation Date
              </label>

              <input
                required
                type="date"
                name="date"
                min={minimumDate}
                value={form.date}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#d8c9aa] bg-white px-4 py-4 outline-none transition focus:border-[#a67c00] focus:ring-4 focus:ring-yellow-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[#6b4f2b]">
                Preferred Time
              </label>

              <select
                required
                name="time"
                value={form.time}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#d8c9aa] bg-white px-4 py-4 outline-none transition focus:border-[#a67c00] focus:ring-4 focus:ring-yellow-100"
              >
                <option value="">Select time</option>

                {timeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-bold text-[#6b4f2b]">
                Number of Guests
              </label>

              <div className="relative">
                <Users
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#a67c00]"
                />

                <select
                  name="guests"
                  value={form.guests}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#d8c9aa] bg-white py-4 pl-12 pr-4 outline-none transition focus:border-[#a67c00] focus:ring-4 focus:ring-yellow-100"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6+">6+ Guests</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-bold text-[#6b4f2b]">
                Special Requests
              </label>

              <textarea
                rows={4}
                name="requests"
                placeholder="Birthday setup, food preferences, seating requests, etc."
                value={form.requests}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#d8c9aa] bg-white px-4 py-4 outline-none transition focus:border-[#a67c00] focus:ring-4 focus:ring-yellow-100"
              />
            </div>

            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-600 sm:col-span-2">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-[#20170f] px-6 py-4 font-black text-yellow-400 transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
            >
              {loading ? "Submitting Reservation..." : "Submit Reservation"}
            </button>
          </motion.form>
        </div>
      </section>

      <AnimatePresence>
        {showConfirmation && submittedReservation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowConfirmation(false)}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/80 px-5 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-lg rounded-[2rem] bg-[#f7f0df] p-8 text-center text-[#20170f] shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setShowConfirmation(false)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#20170f] text-white transition hover:bg-yellow-400 hover:text-black"
              >
                <X size={20} />
              </button>

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
                <CheckCircle2 size={42} />
              </div>

              <h3 className="mt-6 text-3xl font-black">
                Reservation Received
              </h3>

              <p className="mt-3 leading-7 text-[#6b5a48]">
                Thank you, {submittedReservation.name}. Your reservation request
                has been received.
              </p>

              <div className="mt-6 space-y-3 rounded-2xl bg-white p-5 text-left">
                <div className="flex justify-between gap-4">
                  <span className="text-[#6b5a48]">Date</span>
                  <span className="font-bold">
                    {new Date(
                      `${submittedReservation.date}T00:00:00`
                    ).toLocaleDateString("en-IN")}
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-[#6b5a48]">Time</span>
                  <span className="font-bold">
                    {submittedReservation.time}
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-[#6b5a48]">Guests</span>
                  <span className="font-bold">
                    {submittedReservation.guests}
                  </span>
                </div>
              </div>

              <p className="mt-5 text-sm text-[#6b5a48]">
                Our team will contact you shortly to confirm availability.
              </p>

              <button
                type="button"
                onClick={() => setShowConfirmation(false)}
                className="mt-7 w-full rounded-xl bg-[#20170f] px-6 py-4 font-black text-yellow-400 transition hover:bg-black"
              >
                Done
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}