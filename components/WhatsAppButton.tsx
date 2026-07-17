import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
    
  href="https://api.whatsapp.com/send?phone=917330935912&text=Hello%20Royal%20Spice!%20I%20would%20like%20to%20book%20a%20table."
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110"
  aria-label="Chat on WhatsApp"
>
  💬
</a>

  );
}