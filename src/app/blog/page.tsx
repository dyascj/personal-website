import Link from 'next/link';
import Image from 'next/image';
import { getSortedPostsData, formatDate, BlogPostMeta } from '@/lib/blog';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'Blog - Charles J. (CJ) Dyas',
  description: 'Thoughts on design, development, and the intersection of art and technology.',
};

export default function BlogPage() {
  const posts = getSortedPostsData();

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Navigation */}
      <Navigation currentPage="blog" />

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Blog
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Thoughts on design, development, and the intersection of art and technology.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function BlogPostCard({ post }: { post: BlogPostMeta }) {
  return (
    <article className="group">
      <Link href={`/blog/${post.slug}`}>
        <div className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-200 overflow-hidden">
          {/* Thumbnail */}
          {post.thumbnail && (
            <div className="relative aspect-video w-full">
              <Image
                src={post.thumbnail}
                alt={post.imageAlt || post.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          )}

          <div className="p-6">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/10 text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h2 className="text-xl font-semibold text-white group-hover:text-white/90 mb-3 line-clamp-2">
              {post.title}
            </h2>

            {/* Excerpt */}
            <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-3">
              {post.excerpt}
            </p>

            {/* Meta */}
            <div className="flex items-center justify-between text-xs text-white/50">
              <time dateTime={post.date}>
                {formatDate(post.date)}
              </time>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
