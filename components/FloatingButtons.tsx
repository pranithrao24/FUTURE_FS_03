"use client";

import { ArrowUp, Phone } from "lucide-react";

export default function FloatingButtons() {
  return (
    <>
      {/* WhatsApp */}
      <a
        href="https://wa.me/917330935912?text=Hello%20Royal%20Spice!%20I%20would%20like%20to%20book%20a%20table."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>

      {/* Call */}
      <a
        href="tel:+917330935912"
        className="fixed bottom-28 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 text-black shadow-2xl transition hover:scale-110"
        aria-label="Call Royal Spice"
      >
        <Phone size={28} />
      </a>

      {/* Back to Top */}
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed bottom-50 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-black text-white shadow-xl transition hover:scale-110"
        aria-label="Back to top"
      >
        <ArrowUp size={22} />
      </button>
    </>
  );
}