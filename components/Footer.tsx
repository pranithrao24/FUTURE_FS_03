export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-black text-yellow-400">
              Royal Spice
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              Authentic Indian cuisine with premium hospitality, delicious
              flavors, and an unforgettable dining experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-300">
              <a href="#about" className="hover:text-yellow-400">
                About
              </a>

              <a href="#menu" className="hover:text-yellow-400">
                Menu
              </a>

              <a href="#gallery" className="hover:text-yellow-400">
                Gallery
              </a>

              <a href="#reservation" className="hover:text-yellow-400">
                Reservation
              </a>

              <a href="#contact" className="hover:text-yellow-400">
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">
              Contact
            </h3>

            <div className="space-y-3 text-sm text-gray-300">
              <p>📍 Hanamkonda, Warangal, Telangana</p>

              <p>📞 +91 7330935912</p>

              <p>📧 pusukuripraneethrao02@gmail.com</p>

              <p>🕒 11:00 AM – 11:00 PM</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          © 2026 Royal Spice. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}