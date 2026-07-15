const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#f7f0df] px-6 py-24 text-[#20170f]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-bold uppercase tracking-[0.3em] text-[#a67c00]">
            Gallery
          </p>
          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            A glimpse of Royal Spice
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={image}
              className={`overflow-hidden rounded-3xl ${
                index === 0 || index === 5 ? "lg:row-span-2" : ""
              }`}
            >
              <div
                className="h-72 bg-cover bg-center transition duration-500 hover:scale-105 lg:h-full lg:min-h-72"
                style={{ backgroundImage: `url('${image}')` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}