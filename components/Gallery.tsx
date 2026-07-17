"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const showPrevious = () => {
    setSelectedIndex((current) => {
      if (current === null) return 0;
      return current === 0 ? images.length - 1 : current - 1;
    });
  };

  const showNext = () => {
    setSelectedIndex((current) => {
      if (current === null) return 0;
      return current === images.length - 1 ? 0 : current + 1;
    });
  };

  return (
    <>
      <section
        id="gallery"
        className="bg-[#f7f0df] px-6 py-24 text-[#20170f]"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.3em] text-[#a67c00]">
              Gallery
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              A Glimpse of Royal Spice
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[#6b5a48]">
              Explore our dishes, ambience, and memorable dining experiences.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {images.map((image, index) => (
              <motion.button
                key={image}
                type="button"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                onClick={() => setSelectedIndex(index)}
                className={`group relative overflow-hidden rounded-3xl text-left ${
                  index === 0 ? "sm:col-span-2 lg:col-span-2" : ""
                } ${
                  index === 3 ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div className="relative h-72">
                  <Image
                    src={image}
                    alt={`Royal Spice gallery image ${index + 1}`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/30" />

                  <div className="absolute bottom-4 left-4 translate-y-4 rounded-full bg-black/70 px-4 py-2 text-sm font-bold text-yellow-400 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                    View Image
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4 py-8 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-6xl"
            >
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="absolute right-4 top-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-yellow-400 hover:text-black"
                aria-label="Close gallery"
              >
                <X size={24} />
              </button>

              <button
                type="button"
                onClick={showPrevious}
                className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-yellow-400 hover:text-black"
                aria-label="Previous image"
              >
                <ChevronLeft size={26} />
              </button>

              <button
                type="button"
                onClick={showNext}
                className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-yellow-400 hover:text-black"
                aria-label="Next image"
              >
                <ChevronRight size={26} />
              </button>

              <div className="relative h-[70vh] overflow-hidden rounded-[2rem] border border-yellow-400/20 bg-black">
                <Image
                  src={images[selectedIndex]}
                  alt={`Royal Spice gallery image ${selectedIndex + 1}`}
                  fill
                  className="object-contain"
                />
              </div>

              <p className="mt-4 text-center text-sm font-bold text-gray-300">
                Image {selectedIndex + 1} of {images.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}