export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <h2 className="text-2xl font-black text-yellow-400">Royal Spice</h2>
          <p className="mt-2 text-sm text-gray-400">
            Authentic Indian cuisine and premium hospitality.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-gray-300">
          <a href="#about" className="hover:text-yellow-400">
            About
          </a>
          <a href="#menu" className="hover:text-yellow-400">
            Menu
          </a>
          <a href="#reservation" className="hover:text-yellow-400">
            Reservation
          </a>
          <a href="#contact" className="hover:text-yellow-400">
            Contact
          </a>
        </div>

        <p className="text-sm text-gray-500">
          © 2026 Royal Spice. All rights reserved.
        </p>
      </div>
    </footer>
  );
}