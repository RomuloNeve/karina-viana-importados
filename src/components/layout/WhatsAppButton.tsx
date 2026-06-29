"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/utils";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
    >
      <MessageCircle size={26} className="group-hover:scale-110 transition-transform" />

      {/* Tooltip */}
      <span className="absolute right-full mr-3 bg-white text-brown-dark text-sm font-medium px-3 py-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Fale conosco
      </span>

      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
    </a>
  );
}
