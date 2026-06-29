"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuthStore();
  const [formData, setFormData] = useState({ email: "", name: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ name: formData.name, email: formData.email, phone: "" });
    router.push("/conta");
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="font-[var(--font-heading)] text-2xl font-bold text-brown-dark mb-2">
            Entrar na Conta
          </h1>
          <p className="text-brown text-sm">
            Acesse sua conta para acompanhar seus pedidos
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl border border-gold-light/20 p-8 space-y-5"
        >
          <Input
            label="Nome"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            placeholder="Seu nome"
          />
          <Input
            label="E-mail"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            placeholder="seu@email.com"
          />

          <Button type="submit" size="lg" className="w-full">
            Entrar
          </Button>

          <p className="text-center text-sm text-brown">
            Não tem conta?{" "}
            <Link
              href="/conta/registro"
              className="text-gold-dark hover:text-gold font-medium"
            >
              Criar conta
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
