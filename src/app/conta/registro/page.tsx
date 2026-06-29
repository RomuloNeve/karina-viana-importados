"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function RegistroPage() {
  const router = useRouter();
  const { login } = useAuthStore();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(formData);
    router.push("/conta");
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="font-[var(--font-heading)] text-2xl font-bold text-brown-dark mb-2">
            Criar Conta
          </h1>
          <p className="text-brown text-sm">
            Crie sua conta para acompanhar pedidos e receber ofertas
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl border border-gold-light/20 p-8 space-y-5"
        >
          <Input
            label="Nome completo"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            placeholder="Seu nome completo"
          />
          <Input
            label="E-mail"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            placeholder="seu@email.com"
          />
          <Input
            label="WhatsApp"
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            required
            placeholder="(00) 00000-0000"
          />

          <Button type="submit" size="lg" className="w-full">
            Criar Conta
          </Button>

          <p className="text-center text-sm text-brown">
            Já tem conta?{" "}
            <Link
              href="/conta/login"
              className="text-gold-dark hover:text-gold font-medium"
            >
              Entrar
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
