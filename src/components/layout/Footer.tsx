import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
import { WHATSAPP_LINK } from "@/lib/utils";

const footerLinks = {
  loja: [
    { name: "Perfumes", href: "/loja?categoria=perfumes" },
    { name: "Maquiagem", href: "/loja?categoria=maquiagem" },
    { name: "Skincare", href: "/loja?categoria=skincare" },
    { name: "Cabelos", href: "/loja?categoria=cabelos" },
    { name: "Corpo & Banho", href: "/loja?categoria=corpo-banho" },
  ],
  institucional: [
    { name: "Sobre Nós", href: "/sobre" },
    { name: "Blog", href: "/blog" },
    { name: "Contato", href: "/contato" },
    { name: "Política de Privacidade", href: "#" },
    { name: "Trocas e Devoluções", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-brown-dark text-cream/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.jpeg"
                alt="Karina Viana Importados"
                width={45}
                height={45}
                className="rounded-full border-2 border-gold/40"
              />
              <div>
                <h3 className="font-[var(--font-heading)] text-lg font-semibold text-cream">
                  Karina Viana
                </h3>
                <p className="text-xs text-gold-light tracking-widest uppercase">
                  Importados
                </p>
              </div>
            </Link>
            <p className="text-cream/70 text-sm leading-relaxed mt-4">
              Produtos de beleza importados com qualidade premium. Cuidamos da
              sua beleza com o que há de melhor no mundo.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
                aria-label="WhatsApp"
              >
                <Phone size={18} />
              </a>
              <a
                href="mailto:contato@karianaviana.com"
                className="w-11 h-11 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Links - Loja */}
          <div>
            <h4 className="font-[var(--font-heading)] text-sm font-semibold text-gold-light uppercase tracking-wider mb-4">
              Categorias
            </h4>
            <ul className="space-y-1">
              {footerLinks.loja.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-cream/70 hover:text-gold-light transition-colors text-sm py-1.5 inline-block min-h-[36px] flex items-center"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Institucional */}
          <div>
            <h4 className="font-[var(--font-heading)] text-sm font-semibold text-gold-light uppercase tracking-wider mb-4">
              Institucional
            </h4>
            <ul className="space-y-1">
              {footerLinks.institucional.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-cream/70 hover:text-gold-light transition-colors text-sm py-1.5 inline-block min-h-[36px] flex items-center"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-[var(--font-heading)] text-sm font-semibold text-gold-light uppercase tracking-wider mb-4">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-cream/70">
                <Phone size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>(14) 99746-3756</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-cream/70">
                <Mail size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>contato@karianaviana.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-cream/70">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>São Paulo, Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-cream/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/50 text-xs">
            © {new Date().getFullYear()} Karina Viana Importados. Todos os
            direitos reservados.
          </p>
          <p className="text-cream/50 text-xs">
            Pagamento seguro via Pix
          </p>
        </div>
      </div>
    </footer>
  );
}
