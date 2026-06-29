"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Copy, Check, MessageCircle, ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { formatCurrency, PIX_KEY, WHATSAPP_LINK, generateOrderId } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

type Step = "info" | "payment" | "confirmation";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getTotal, clearCart, getItemCount } = useCartStore();
  const [step, setStep] = useState<Step>("info");
  const [copied, setCopied] = useState(false);
  const [orderId, setOrderId] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitInfo = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("payment");
  };

  const handleCopyPix = async () => {
    try {
      await navigator.clipboard.writeText(PIX_KEY);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
      const input = document.createElement("input");
      input.value = PIX_KEY;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleConfirmPayment = () => {
    const id = generateOrderId();
    setOrderId(id);
    setStep("confirmation");
    clearCart();
  };

  if (items.length === 0 && step !== "confirmation") {
    router.push("/carrinho");
    return null;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back link */}
      {step === "info" && (
        <Link
          href="/carrinho"
          className="inline-flex items-center gap-2 text-brown hover:text-gold-dark text-sm mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          Voltar ao carrinho
        </Link>
      )}

      {/* Steps indicator */}
      <div className="flex items-center justify-center gap-2 mb-10">
        {["info", "payment", "confirmation"].map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step === s
                  ? "bg-gold-dark text-white"
                  : i < ["info", "payment", "confirmation"].indexOf(step)
                  ? "bg-gold-light text-gold-dark"
                  : "bg-cream text-brown"
              }`}
            >
              {i + 1}
            </div>
            {i < 2 && (
              <div className="w-12 sm:w-20 h-0.5 bg-cream">
                <div
                  className={`h-full transition-all ${
                    i < ["info", "payment", "confirmation"].indexOf(step)
                      ? "bg-gold w-full"
                      : "w-0"
                  }`}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Step: Customer info */}
      {step === "info" && (
        <div>
          <h1 className="font-[var(--font-heading)] text-2xl font-bold text-brown-dark mb-2">
            Dados de Entrega
          </h1>
          <p className="text-brown text-sm mb-8">
            Preencha seus dados para enviarmos seu pedido
          </p>

          <form onSubmit={handleSubmitInfo} className="space-y-6">
            {/* Personal info */}
            <div className="bg-white rounded-2xl border border-gold-light/20 p-6 space-y-4">
              <h3 className="font-[var(--font-heading)] text-sm font-semibold text-brown-dark">
                Dados Pessoais
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  label="Nome completo"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Seu nome"
                />
                <Input
                  label="E-mail"
                  name="email"
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="seu@email.com"
                />
              </div>
              <Input
                label="WhatsApp"
                name="phone"
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="(00) 00000-0000"
              />
            </div>

            {/* Address */}
            <div className="bg-white rounded-2xl border border-gold-light/20 p-6 space-y-4">
              <h3 className="font-[var(--font-heading)] text-sm font-semibold text-brown-dark">
                Endereço de Entrega
              </h3>
              <Input
                label="CEP"
                name="zipCode"
                id="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                required
                placeholder="00000-000"
              />
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <Input
                    label="Rua"
                    name="street"
                    id="street"
                    value={formData.street}
                    onChange={handleInputChange}
                    required
                    placeholder="Nome da rua"
                  />
                </div>
                <Input
                  label="Número"
                  name="number"
                  id="number"
                  value={formData.number}
                  onChange={handleInputChange}
                  required
                  placeholder="123"
                />
              </div>
              <Input
                label="Complemento"
                name="complement"
                id="complement"
                value={formData.complement}
                onChange={handleInputChange}
                placeholder="Apto, bloco, etc."
              />
              <div className="grid sm:grid-cols-3 gap-4">
                <Input
                  label="Bairro"
                  name="neighborhood"
                  id="neighborhood"
                  value={formData.neighborhood}
                  onChange={handleInputChange}
                  required
                  placeholder="Bairro"
                />
                <Input
                  label="Cidade"
                  name="city"
                  id="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  placeholder="Cidade"
                />
                <Input
                  label="Estado"
                  name="state"
                  id="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                  placeholder="SP"
                />
              </div>
            </div>

            {/* Order summary */}
            <div className="bg-white rounded-2xl border border-gold-light/20 p-6">
              <h3 className="font-[var(--font-heading)] text-sm font-semibold text-brown-dark mb-4">
                Resumo ({getItemCount()} itens)
              </h3>
              <div className="space-y-2 mb-4">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex justify-between text-sm"
                  >
                    <span className="text-brown">
                      {item.product.name} × {item.quantity}
                    </span>
                    <span className="text-brown-dark font-medium">
                      {formatCurrency(item.product.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t border-gold-light/20 pt-3 flex justify-between">
                <span className="font-semibold text-brown-dark">Total</span>
                <span className="text-lg font-bold text-gold-dark">
                  {formatCurrency(getTotal())}
                </span>
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full">
              Continuar para Pagamento
            </Button>
          </form>
        </div>
      )}

      {/* Step: Payment (Pix) */}
      {step === "payment" && (
        <div>
          <h1 className="font-[var(--font-heading)] text-2xl font-bold text-brown-dark mb-2">
            Pagamento via Pix
          </h1>
          <p className="text-brown text-sm mb-8">
            Realize o pagamento e envie o comprovante pelo WhatsApp
          </p>

          <div className="bg-white rounded-2xl border border-gold-light/20 p-8 text-center">
            {/* Total */}
            <p className="text-sm text-brown mb-1">Valor total do pedido:</p>
            <p className="text-3xl font-bold text-gold-dark mb-8">
              {formatCurrency(getTotal())}
            </p>

            {/* Pix key */}
            <div className="bg-pearl rounded-xl p-6 mb-6">
              <p className="text-sm text-brown mb-3 font-medium">
                Chave Pix:
              </p>
              <div className="flex items-center justify-center gap-3">
                <code className="text-brown-dark font-mono text-sm bg-white px-4 py-2 rounded-lg border border-gold-light/30">
                  {PIX_KEY}
                </code>
                <button
                  onClick={handleCopyPix}
                  className="flex items-center gap-1.5 px-4 py-2 bg-gold-dark hover:bg-gold text-white rounded-lg text-sm font-medium transition-colors"
                >
                  {copied ? (
                    <>
                      <Check size={14} />
                      Copiada!
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      Copiar
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Instructions */}
            <div className="text-left bg-cream/50 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-brown-dark text-sm mb-3">
                Como pagar:
              </h3>
              <ol className="space-y-2 text-sm text-brown">
                <li className="flex gap-2">
                  <span className="font-medium text-gold-dark">1.</span>
                  Copie a chave Pix acima
                </li>
                <li className="flex gap-2">
                  <span className="font-medium text-gold-dark">2.</span>
                  Abra o app do seu banco e faça o Pix
                </li>
                <li className="flex gap-2">
                  <span className="font-medium text-gold-dark">3.</span>
                  Envie o comprovante pelo WhatsApp
                </li>
                <li className="flex gap-2">
                  <span className="font-medium text-gold-dark">4.</span>
                  Confirmaremos seu pedido em até 30 minutos
                </li>
              </ol>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <a
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent(
                  `Olá! Acabei de fazer um pedido na loja. Valor: ${formatCurrency(
                    getTotal()
                  )}. Segue o comprovante:`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="lg" className="w-full">
                  <MessageCircle size={18} />
                  Enviar Comprovante via WhatsApp
                </Button>
              </a>

              <Button
                size="lg"
                className="w-full"
                onClick={handleConfirmPayment}
              >
                <ShieldCheck size={18} />
                Já Realizei o Pagamento
              </Button>
            </div>
          </div>

          <button
            onClick={() => setStep("info")}
            className="mt-4 text-sm text-brown hover:text-gold-dark transition-colors"
          >
            ← Voltar aos dados
          </button>
        </div>
      )}

      {/* Step: Confirmation */}
      {step === "confirmation" && (
        <div className="text-center py-10">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
            <Check size={40} className="text-green-600" />
          </div>

          <h1 className="font-[var(--font-heading)] text-2xl font-bold text-brown-dark mb-3">
            Pedido Realizado!
          </h1>
          <p className="text-brown mb-2">
            Seu pedido <strong className="text-gold-dark">{orderId}</strong> foi
            registrado com sucesso.
          </p>
          <p className="text-sm text-brown mb-8">
            Assim que confirmarmos o pagamento, você receberá atualizações pelo WhatsApp.
          </p>

          <div className="bg-white rounded-2xl border border-gold-light/20 p-6 text-left mb-8 max-w-md mx-auto">
            <h3 className="font-semibold text-brown-dark text-sm mb-3">
              Próximos passos:
            </h3>
            <ul className="space-y-2 text-sm text-brown">
              <li>✓ Envie o comprovante pelo WhatsApp</li>
              <li>✓ Aguarde a confirmação (até 30min)</li>
              <li>✓ Receba o código de rastreio</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`${WHATSAPP_LINK}?text=${encodeURIComponent(
                `Olá! Meu pedido é ${orderId}. Segue comprovante do Pix:`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="md">
                <MessageCircle size={16} />
                WhatsApp
              </Button>
            </a>
            <Link href="/loja">
              <Button size="md">Continuar Comprando</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
