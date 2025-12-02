import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPostData, getAllPostSlugs, formatDate } from '@/lib/blog';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import PageTransition from '@/components/PageTransition';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  try {
    const post = await getPostData(params.slug);
    const image = post.featuredImage || post.thumbnail;
    return {
      title: `${post.title}`,
      description: post.excerpt,
      openGraph: image
        ? {
            type: 'article',
            title: post.title,
            description: post.excerpt,
            images: [{ url: image }],
          }
        : undefined,
      twitter: image
        ? {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: [image],
          }
        : {
            card: 'summary',
            title: post.title,
            description: post.excerpt,
          },
    };
  } catch {
    return {
      title: 'Post Not Found - Charles J. (CJ) Dyas',
    };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  let post;
  try {
    post = await getPostData(params.slug);
  } catch {
    notFound();
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Navigation */}
      <Navigation currentPage="blog-post" />

      <PageTransition>
        {/* Back to Blog */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-20">
          <header className="mb-8">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-4 text-white/60 text-sm">
              <time dateTime={post.date}>
                {formatDate(post.date)}
              </time>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span>By {post.author}</span>
            </div>
          </header>

          {/* Featured Image */}
          {post.featuredImage && (
            <div className="relative aspect-video w-full mb-8 rounded-2xl overflow-hidden border border-white/10">
              <Image
                src={post.featuredImage}
                alt={post.imageAlt || post.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
            </div>
          )}

          {/* Content */}
          <div 
            className="prose prose-lg prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-lg font-semibold">CJ</span>
                </div>
                <div>
                  <p className="font-medium text-white">{post.author}</p>
                  <p className="text-sm text-white/60">Product Designer</p>
                </div>
              </div>
              
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-neutral-900 bg-white hover:bg-white/90 border border-white/10"
              >
                More Posts
              </Link>
            </div>
          </footer>
        </article>
      </PageTransition>

      {/* Footer */}
      <Footer />
    </div>
  );
}
