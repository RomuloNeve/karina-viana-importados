import { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import blogPosts from "@/data/blog-posts.json";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description: "Dicas de beleza, tendências e novidades do mundo dos cosméticos importados.",
};

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-brown-dark mb-3">
          Blog
        </h1>
        <p className="text-brown max-w-xl mx-auto">
          Dicas de beleza, tendências e novidades do mundo dos cosméticos importados
        </p>
      </div>

      {/* Posts grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="group bg-white rounded-2xl border border-gold-light/20 overflow-hidden hover:shadow-lg hover:shadow-gold/5 hover:border-gold/30 transition-all duration-300"
          >
            {/* Cover image placeholder */}
            <div className="aspect-[16/10] bg-gradient-to-br from-cream to-gold-light/20 flex items-center justify-center">
              <span className="font-[var(--font-heading)] text-gold-dark/40 text-sm">
                Blog
              </span>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 bg-gold-light/20 text-gold-dark rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <Link href={`/blog/${post.slug}`}>
                <h2 className="font-[var(--font-heading)] text-lg font-semibold text-brown-dark group-hover:text-gold-dark transition-colors line-clamp-2 mb-2">
                  {post.title}
                </h2>
              </Link>

              {/* Excerpt */}
              <p className="text-sm text-brown line-clamp-3 mb-4">
                {post.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between pt-4 border-t border-gold-light/20">
                <div className="flex items-center gap-2 text-xs text-brown">
                  <Clock size={12} />
                  <span>{post.readTime} min de leitura</span>
                </div>
                <span className="text-xs text-brown">
                  {formatDate(post.publishedAt)}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
