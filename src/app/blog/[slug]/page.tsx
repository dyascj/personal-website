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
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Navigation */}
      <Navigation currentPage="blog-post" />

      <PageTransition>
        {/* Back to Blog */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white text-sm transition-colors"
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
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-white/70 transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-4 text-gray-500 dark:text-white/60 text-sm transition-colors duration-300">
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
            <div className="relative aspect-video w-full mb-8 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 transition-colors duration-300">
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
            className="prose prose-lg dark:prose-invert max-w-none transition-colors duration-300"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center transition-colors duration-300">
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">CJ</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white transition-colors duration-300">{post.author}</p>
                  <p className="text-sm text-gray-500 dark:text-white/60 transition-colors duration-300">Product Designer</p>
                </div>
              </div>
              
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-white dark:text-neutral-900 bg-neutral-900 dark:bg-white hover:bg-neutral-800 dark:hover:bg-white/90 border border-transparent dark:border-white/10 transition-colors"
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
