# Karina Viana Importados

E-commerce premium de cosméticos e beleza importados.

## 🚀 Stack

- **Framework**: Next.js 16 (App Router)
- **Estilo**: Tailwind CSS 4
- **Estado**: Zustand
- **Animações**: Framer Motion
- **Ícones**: Lucide React
- **Deploy**: Vercel

## 📦 Funcionalidades

- ✅ Home com hero imersivo e seções animadas
- ✅ Catálogo com filtros (categoria, marca, busca, ordenação)
- ✅ Página de produto detalhada
- ✅ Carrinho de compras (drawer lateral + página)
- ✅ Checkout com pagamento via Pix
- ✅ Conta do cliente (login, registro, pedidos)
- ✅ Painel admin (dashboard, produtos, pedidos)
- ✅ Blog com posts
- ✅ Páginas institucionais (Sobre, Contato, FAQ)
- ✅ Botão flutuante WhatsApp
- ✅ Design responsivo mobile-first
- ✅ SEO otimizado

## 🎨 Paleta

| Cor | Hex |
|-----|-----|
| Gold Dark | #B8860B |
| Gold | #D4A853 |
| Gold Light | #E8C97A |
| Cream | #F2E8D9 |
| Pearl | #FAF6F0 |
| Brown Dark | #5C4A32 |
| Brown | #7A6548 |

## 🛠️ Como rodar

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar produção
npm start
```

## 🔑 Acesso Admin

- URL: `/admin/login`
- Senha padrão: `admin123`
- Para alterar: edite `NEXT_PUBLIC_ADMIN_PASSWORD` no `.env.local`

## 💳 Pagamento

- Método: Pix manual
- Para configurar a chave Pix: edite `PIX_KEY` em `src/lib/utils.ts`

## 📱 WhatsApp

- Número configurado: (14) 99746-3756
- Para alterar: edite `WHATSAPP_NUMBER` em `src/lib/utils.ts`

## 📝 Como adicionar produtos

Edite o arquivo `src/data/products.json` seguindo a estrutura dos produtos existentes.

## 🌐 Deploy na Vercel

1. Faça push do projeto para o GitHub
2. Conecte o repositório na Vercel
3. Configure a variável de ambiente `NEXT_PUBLIC_ADMIN_PASSWORD`
4. Deploy automático!
