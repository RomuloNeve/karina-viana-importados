import { Metadata } from "next";
import Image from "next/image";
import { Heart, Sparkles, Shield, Truck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça a história da Karina Viana Importados e nossa paixão por beleza premium.",
};

export default function SobrePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="max-w-3xl mx-auto">
          <Image
            src="/images/logo.jpeg"
            alt="Karina Viana Importados"
            width={100}
            height={100}
            className="mx-auto rounded-full border-4 border-gold/30 mb-6"
          />
          <h1 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-brown-dark mb-4">
            Nossa História
          </h1>
          <p className="text-brown text-lg leading-relaxed">
            A Karina Viana Importados nasceu da paixão por beleza e do desejo de
            trazer o que há de melhor no mundo dos cosméticos para mulheres que
            merecem se sentir extraordinárias todos os dias.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="font-[var(--font-heading)] text-2xl font-bold text-brown-dark mb-4">
            Beleza Premium ao Seu Alcance
          </h2>
          <div className="space-y-4 text-brown leading-relaxed">
            <p>
              Selecionamos pessoalmente cada produto de nossa coleção, garantindo
              autenticidade, qualidade e procedência. Trabalhamos diretamente com
              fornecedores internacionais para trazer as melhores marcas do mundo
              com preços justos.
            </p>
            <p>
              Cada cliente é única e merece um atendimento personalizado. Por isso,
              estamos sempre disponíveis pelo WhatsApp para ajudá-la a encontrar
              os produtos perfeitos para sua rotina de beleza.
            </p>
            <p>
              Nossa missão é democratizar o acesso a cosméticos importados de alta
              qualidade, com a confiança e o carinho que você merece.
            </p>
          </div>
        </div>
        <div className="aspect-square bg-gradient-to-br from-cream to-gold-light/20 rounded-2xl flex items-center justify-center">
          <div className="text-center">
            <p className="font-[var(--font-heading)] text-5xl font-bold text-gold-dark/60 mb-2">
              KV
            </p>
            <p className="text-sm text-brown tracking-widest uppercase">
              Importados
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mb-20">
        <h2 className="font-[var(--font-heading)] text-2xl font-bold text-brown-dark text-center mb-10">
          Nossos Valores
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Shield,
              title: "100% Original",
              desc: "Todos os produtos são autênticos e com procedência verificada",
            },
            {
              icon: Heart,
              title: "Atendimento Pessoal",
              desc: "Cuidamos de cada cliente com atenção e carinho pelo WhatsApp",
            },
            {
              icon: Sparkles,
              title: "Curadoria Premium",
              desc: "Selecionamos apenas as melhores marcas e produtos do mercado",
            },
            {
              icon: Truck,
              title: "Envio Nacional",
              desc: "Entregamos para todo o Brasil com segurança e agilidade",
            },
          ].map((value) => (
            <div
              key={value.title}
              className="bg-white rounded-2xl border border-gold-light/20 p-6 text-center hover:shadow-lg hover:shadow-gold/5 transition-all duration-300"
            >
              <value.icon
                size={28}
                className="mx-auto text-gold-dark mb-3"
              />
              <h3 className="font-[var(--font-heading)] text-sm font-semibold text-brown-dark mb-2">
                {value.title}
              </h3>
              <p className="text-xs text-brown leading-relaxed">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-gradient-to-br from-cream to-gold-light/10 rounded-2xl p-12">
        <h2 className="font-[var(--font-heading)] text-2xl font-bold text-brown-dark mb-3">
          Pronta para se sentir incrível?
        </h2>
        <p className="text-brown mb-6">
          Explore nossa coleção e descubra produtos que vão transformar sua rotina de beleza
        </p>
        <Link href="/loja">
          <Button size="lg">Explorar Coleção</Button>
        </Link>
      </section>
    </div>
  );
}
