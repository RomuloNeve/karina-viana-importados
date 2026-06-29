import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com a Karina Viana Importados. Estamos prontos para te ajudar!",
};

export default function ContatoPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-brown-dark mb-3">
          Fale Conosco
        </h1>
        <p className="text-brown max-w-xl mx-auto">
          Estamos aqui para ajudá-la. Entre em contato pelo canal de sua preferência.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact info */}
        <div className="space-y-8">
          <div className="bg-white rounded-2xl border border-gold-light/20 p-8">
            <h2 className="font-[var(--font-heading)] text-xl font-semibold text-brown-dark mb-6">
              Informações de Contato
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold-light/20 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-gold-dark" />
                </div>
                <div>
                  <p className="font-medium text-brown-dark text-sm">WhatsApp</p>
                  <p className="text-brown text-sm">(14) 99746-3756</p>
                  <p className="text-xs text-brown/60 mt-0.5">
                    Resposta em até 30 minutos
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold-light/20 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-gold-dark" />
                </div>
                <div>
                  <p className="font-medium text-brown-dark text-sm">E-mail</p>
                  <p className="text-brown text-sm">contato@karianaviana.com</p>
                  <p className="text-xs text-brown/60 mt-0.5">
                    Resposta em até 24 horas
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold-light/20 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-gold-dark" />
                </div>
                <div>
                  <p className="font-medium text-brown-dark text-sm">Localização</p>
                  <p className="text-brown text-sm">São Paulo, Brasil</p>
                  <p className="text-xs text-brown/60 mt-0.5">
                    Atendimento online — entregamos para todo o Brasil
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold-light/20 flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-gold-dark" />
                </div>
                <div>
                  <p className="font-medium text-brown-dark text-sm">Horário</p>
                  <p className="text-brown text-sm">Segunda a Sábado</p>
                  <p className="text-xs text-brown/60 mt-0.5">
                    09h às 18h (horário de Brasília)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="bg-green-50 rounded-2xl border border-green-200 p-8 text-center">
            <MessageCircle size={32} className="mx-auto text-green-600 mb-3" />
            <h3 className="font-[var(--font-heading)] text-lg font-semibold text-brown-dark mb-2">
              Atendimento por WhatsApp
            </h3>
            <p className="text-sm text-brown mb-4">
              O jeito mais rápido de falar conosco. Tire dúvidas, peça
              recomendações ou acompanhe seu pedido.
            </p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button className="bg-green-600 hover:bg-green-700">
                <MessageCircle size={16} />
                Iniciar Conversa
              </Button>
            </a>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-2xl border border-gold-light/20 p-8">
          <h2 className="font-[var(--font-heading)] text-xl font-semibold text-brown-dark mb-6">
            Perguntas Frequentes
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Os produtos são originais?",
                a: "Sim! Todos os nossos produtos são 100% autênticos, importados diretamente de fornecedores autorizados. Garantimos procedência e qualidade.",
              },
              {
                q: "Como funciona o pagamento?",
                a: "Aceitamos pagamento via Pix. Após realizar o pagamento, envie o comprovante pelo WhatsApp e confirmaremos seu pedido em até 30 minutos.",
              },
              {
                q: "Qual o prazo de entrega?",
                a: "O prazo varia de acordo com sua localização. Em média, de 3 a 10 dias úteis após a confirmação do pagamento. Enviamos o código de rastreio assim que o pedido é despachado.",
              },
              {
                q: "Posso trocar um produto?",
                a: "Sim! Aceitamos trocas em até 7 dias após o recebimento, desde que o produto esteja lacrado e em perfeitas condições. Entre em contato pelo WhatsApp para solicitar.",
              },
              {
                q: "Vocês enviam para todo o Brasil?",
                a: "Sim! Entregamos em todas as regiões do Brasil com segurança e rastreamento. O frete é calculado no momento do pedido.",
              },
              {
                q: "Como posso tirar dúvidas sobre um produto?",
                a: "Estamos à disposição pelo WhatsApp! Envie uma mensagem com sua dúvida e teremos prazer em ajudá-la a escolher o produto ideal.",
              },
            ].map((faq) => (
              <div key={faq.q} className="pb-5 border-b border-gold-light/20 last:border-0 last:pb-0">
                <h3 className="font-medium text-brown-dark text-sm mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-brown leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
