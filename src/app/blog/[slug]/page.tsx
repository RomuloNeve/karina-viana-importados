import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import blogPosts from "@/data/blog-posts.json";
import { formatDate } from "@/lib/utils";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post não encontrado" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-brown hover:text-gold-dark text-sm mb-8 transition-colors"
      >
        <ArrowLeft size={16} />
        Voltar ao blog
      </Link>

      {/* Cover placeholder */}
      <div className="aspect-[16/9] bg-gradient-to-br from-cream to-gold-light/20 rounded-2xl mb-8 flex items-center justify-center">
        <span className="font-[var(--font-heading)] text-gold-dark/40 text-lg">
          {post.title}
        </span>
      </div>

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <div className="flex items-center gap-1.5 text-sm text-brown">
          <Calendar size={14} />
          {formatDate(post.publishedAt)}
        </div>
        <div className="flex items-center gap-1.5 text-sm text-brown">
          <Clock size={14} />
          {post.readTime} min de leitura
        </div>
        <span className="text-sm text-brown">Por {post.author}</span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 bg-gold-light/20 text-gold-dark rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h1 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-brown-dark mb-6 leading-tight">
        {post.title}
      </h1>

      {/* Content */}
      <div className="prose prose-brown max-w-none">
        <p className="text-lg text-brown leading-relaxed mb-6">
          {post.excerpt}
        </p>
        <p className="text-brown leading-relaxed">
          {post.content}
        </p>
        <p className="text-brown leading-relaxed mt-4">
          Continue acompanhando nosso blog para mais dicas e novidades sobre o mundo da beleza importada.
          Se tiver dúvidas, entre em contato pelo nosso WhatsApp — teremos prazer em ajudá-la!
        </p>
      </div>

      {/* CTA */}
      <div className="mt-12 p-8 bg-cream rounded-2xl text-center">
        <h3 className="font-[var(--font-heading)] text-xl font-semibold text-brown-dark mb-3">
          Gostou das dicas?
        </h3>
        <p className="text-brown text-sm mb-4">
          Explore nossa coleção de produtos importados
        </p>
        <Link
          href="/loja"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gold-dark hover:bg-gold text-white rounded-xl font-medium text-sm transition-colors"
        >
          Ver Produtos
        </Link>
      </div>
    </div>
  );
}
