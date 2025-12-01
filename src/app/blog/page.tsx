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
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 pt-24 pb-20">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-medium text-white/50 uppercase tracking-[0.2em]">Journal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Blog
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Thoughts on design, development, and the intersection of art and technology.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
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
    <article className="group flex flex-col h-full">
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <div className="bg-transparent h-full flex flex-col">
          {/* Thumbnail */}
          <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-white/5 border border-white/10 mb-4">
            {post.thumbnail ? (
              <Image
                src={post.thumbnail}
                alt={post.imageAlt || post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
            )}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>

          <div className="flex-1 flex flex-col">
            {/* Category/Tags (using first tag as category label) */}
            {post.tags.length > 0 && (
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span className="text-xs font-medium text-white/60 uppercase tracking-wider">
                  {post.tags[0]}
                </span>
              </div>
            )}

            {/* Title */}
            <h2 className="text-xl font-medium text-white mb-2 group-hover:text-white/90 transition-colors">
              {post.title}
            </h2>

            {/* Excerpt */}
            <p className="text-sm text-white/50 leading-relaxed line-clamp-2 mb-4">
              {post.excerpt}
            </p>

            {/* Meta */}
            <div className="mt-auto pt-2 flex items-center gap-3 text-xs text-white/30">
              <time dateTime={post.date}>
                {formatDate(post.date)}
              </time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
