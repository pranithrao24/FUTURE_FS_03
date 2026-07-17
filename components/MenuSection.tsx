"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

type Dish = {
  name: string;
  price: string;
  description: string;
  image: string;
  category: "Biryani" | "Main Course" | "Starters" | "South Indian" | "Desserts";
  spiceLevel: string;
};

const dishes: Dish[] = [
  {
    name: "Royal Chicken Biryani",
    price: "₹349",
    description:
      "Aromatic basmati rice cooked with tender chicken, saffron, fried onions, and royal spices.",
    image: "/images/biryani.jpg",
    category: "Biryani",
    spiceLevel: "Medium",
  },
  {
    name: "Butter Chicken",
    price: "₹329",
    description:
      "Tender tandoori chicken served in a rich, creamy tomato and butter gravy.",
    image: "/images/butter-chicken.jpg",
    category: "Main Course",
    spiceLevel: "Mild",
  },
  {
    name: "Paneer Tikka",
    price: "₹279",
    description:
      "Char-grilled cottage cheese marinated with yoghurt, herbs, and traditional spices.",
    image: "/images/paneer.jpg",
    category: "Starters",
    spiceLevel: "Medium",
  },
  {
    name: "Mutton Rogan Josh",
    price: "₹399",
    description:
      "Slow-cooked mutton in a rich Kashmiri-style gravy with aromatic spices.",
    image: "/images/mutton.jpg",
    category: "Main Course",
    spiceLevel: "Hot",
  },
  {
    name: "Masala Dosa",
    price: "₹189",
    description:
      "Crispy dosa filled with spiced potato masala and served with chutneys and sambar.",
    image: "/images/dosa.jpg",
    category: "South Indian",
    spiceLevel: "Mild",
  },
  {
    name: "French Mousse Cake",
    price: "₹149",
    description:
      "Rich and creamy chocolate mousse cake finished with a smooth chocolate glaze.",
    image: "/images/dessert.jpg",
    category: "Desserts",
    spiceLevel: "Sweet",
  },
];

const categories = [
  "All",
  "Biryani",
  "Main Course",
  "Starters",
  "South Indian",
  "Desserts",
];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  const filteredDishes = useMemo(() => {
    return dishes.filter((dish) => {
      const matchesCategory =
        activeCategory === "All" || dish.category === activeCategory;

      const searchText =
        `${dish.name} ${dish.description} ${dish.category}`.toLowerCase();

      const matchesSearch = searchText.includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <>
      <section id="menu" className="bg-[#111111] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.3em] text-yellow-400">
              Our Menu
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Signature Dishes
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Explore carefully prepared dishes inspired by authentic Indian
              flavours and premium ingredients.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#1b1b1b] px-5 py-4">
              <Search size={20} className="text-yellow-400" />

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search dishes..."
                className="w-full bg-transparent text-white outline-none placeholder:text-gray-500"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                  activeCategory === category
                    ? "bg-yellow-400 text-black"
                    : "border border-white/10 bg-[#1b1b1b] text-gray-300 hover:border-yellow-400 hover:text-yellow-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredDishes.map((dish, index) => (
              <motion.article
                key={dish.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-[#1b1b1b] shadow-xl transition hover:-translate-y-2 hover:border-yellow-400/40"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-black/75 px-4 py-2 text-sm font-bold text-yellow-400 backdrop-blur">
                    {dish.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-black">{dish.name}</h3>

                    <span className="shrink-0 text-lg font-black text-yellow-400">
                      {dish.price}
                    </span>
                  </div>

                  <p className="mt-3 line-clamp-2 leading-7 text-gray-400">
                    {dish.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="rounded-full bg-white/5 px-3 py-1.5 text-sm font-semibold text-gray-300">
                      {dish.spiceLevel}
                    </span>

                    <button
                      type="button"
                      onClick={() => setSelectedDish(dish)}
                      className="rounded-xl bg-yellow-400 px-5 py-2.5 font-black text-black transition hover:bg-yellow-300"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredDishes.length === 0 && (
            <div className="mt-14 rounded-3xl border-2 border-dashed border-white/10 bg-[#1b1b1b] p-12 text-center">
              <h3 className="text-2xl font-black text-yellow-400">
                No dishes found
              </h3>

              <p className="mt-3 text-gray-400">
                Try a different category or search term.
              </p>
            </div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selectedDish && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedDish(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-5 py-10 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-yellow-400/30 bg-[#171717]"
            >
              <button
                type="button"
                onClick={() => setSelectedDish(null)}
                className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-yellow-400 hover:text-black"
              >
                <X size={22} />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="relative min-h-[320px]">
                  <Image
                    src={selectedDish.image}
                    alt={selectedDish.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-8">
                  <span className="rounded-full bg-yellow-400/10 px-4 py-2 text-sm font-bold text-yellow-400">
                    {selectedDish.category}
                  </span>

                  <h3 className="mt-6 text-3xl font-black text-white">
                    {selectedDish.name}
                  </h3>

                  <p className="mt-4 text-2xl font-black text-yellow-400">
                    {selectedDish.price}
                  </p>

                  <p className="mt-5 leading-8 text-gray-300">
                    {selectedDish.description}
                  </p>

                  <div className="mt-6 rounded-2xl bg-white/5 p-5">
                    <p className="text-sm text-gray-400">Flavour Profile</p>

                    <p className="mt-2 font-bold text-white">
                      {selectedDish.spiceLevel}
                    </p>
                  </div>

                  <a
                    href="#reservation"
                    onClick={() => setSelectedDish(null)}
                    className="mt-7 block rounded-xl bg-yellow-400 px-6 py-4 text-center font-black text-black transition hover:bg-yellow-300"
                  >
                    Reserve a Table
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}