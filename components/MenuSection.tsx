"use client";

import { motion } from "framer-motion";

const dishes = [
  {
    name: "Royal Chicken Biryani",
    price: "₹349",
    description: "Aromatic basmati rice with tender chicken and royal spices.",
   image: "/images/biryani.jpg",
  },
  {
    name: "Butter Chicken",
    price: "₹329",
    description: "Creamy tomato gravy with tender tandoori chicken.",
    image: "/images/butter-chicken.jpg",
  },
  {
    name: "Paneer Tikka",
    price: "₹279",
    description: "Char-grilled cottage cheese with herbs and spices.",
    image: "/images/paneer.jpg",
  },
  {
    name: "Mutton Rogan Josh",
    price: "₹399",
    description: "Slow-cooked mutton in a rich Kashmiri-style gravy.",
    image: "/images/mutton.jpg",
  },
  {
    name: "Masala Dosa",
    price: "₹189",
    description: "Crispy dosa served with potato masala and chutneys.",
    image: "/images/dosa.jpg",
  },
  {
    name: "French mousse cake",
    price: "₹149",
    description: "Soft milk dumplings served in fragrant sugar syrup.",
    image: "/images/dessert.jpg",
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="bg-[#111111] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-bold uppercase tracking-[0.3em] text-yellow-400">
            Our Menu
          </p>
          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Signature dishes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Explore carefully prepared dishes inspired by traditional Indian
            cuisine.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish, index) => (
            <motion.article
              key={dish.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#1b1b1b]"
            >
              <div
                className="h-60 bg-cover bg-center transition duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${dish.image}')` }}
              />

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-black">{dish.name}</h3>
                  <span className="font-black text-yellow-400">
                    {dish.price}
                  </span>
                </div>

                <p className="mt-3 leading-7 text-gray-400">
                  {dish.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}