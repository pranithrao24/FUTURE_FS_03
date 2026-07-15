import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ravi Kumar",
    review:
      "The biryani was excellent, and the ambience was perfect for a family dinner.",
  },
  {
    name: "Sneha Reddy",
    review:
      "Beautiful interiors, friendly staff, and authentic flavours. Highly recommended.",
  },
  {
    name: "Arjun Varma",
    review:
      "Royal Spice offers a premium dining experience with excellent service.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#111111] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-bold uppercase tracking-[0.3em] text-yellow-400">
            Testimonials
          </p>
          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            What our guests say
          </h2>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="rounded-3xl border border-white/10 bg-[#1b1b1b] p-8"
            >
              <div className="flex gap-1 text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="mt-6 leading-8 text-gray-300">
                “{review.review}”
              </p>

              <h3 className="mt-6 font-black text-yellow-400">
                {review.name}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}