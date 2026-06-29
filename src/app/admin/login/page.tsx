"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check — in production use env var
    const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin123";
    if (password === adminPassword) {
      sessionStorage.setItem("kv-admin-auth", "true");
      router.push("/admin");
    } else {
      setError("Senha incorreta");
    }
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold-light/20 flex items-center justify-center">
            <Shield size={28} className="text-gold-dark" />
          </div>
          <h1 className="font-[var(--font-heading)] text-2xl font-bold text-brown-dark mb-2">
            Painel Admin
          </h1>
          <p className="text-brown text-sm">
            Acesso restrito ao administrador
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl border border-gold-light/20 p-8 space-y-5"
        >
          <Input
            label="Senha"
            id="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            required
            placeholder="Digite a senha de admin"
            error={error}
          />

          <Button type="submit" size="lg" className="w-full">
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
}
