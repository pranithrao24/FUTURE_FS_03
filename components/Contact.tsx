import { Clock, Mail, MapPin, Phone } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "Address",
    value: "Hanamkonda, Warangal, Telangana",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 98765 43210",
  },
  {
    icon: Mail,
    title: "Email",
    value: "royalspice@example.com",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    value: "11:00 AM – 11:00 PM",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-[#f7f0df] px-6 py-24 text-[#20170f]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-bold uppercase tracking-[0.3em] text-[#a67c00]">
            Contact Us
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Visit Royal Spice
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#6b5a48]">
            Visit us for authentic Indian cuisine, warm hospitality, and an
            unforgettable dining experience.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactDetails.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-3xl border border-[#d8c9aa] bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#20170f] text-yellow-400">
                  <Icon size={26} />
                </div>

                <h3 className="mt-5 text-lg font-black">{item.title}</h3>

                <p className="mt-2 leading-7 text-[#6b5a48]">{item.value}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-[#d8c9aa] bg-white p-2 shadow-xl">
          <iframe
            src="https://www.google.com/maps?q=Hanamkonda,Warangal,Telangana&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Royal Spice Restaurant Location"
            className="rounded-[1.6rem] border-0"
          />
        </div>
      </div>
    </section>
  );
}