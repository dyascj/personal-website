import { getSortedPostsData } from '@/lib/blog';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import BlogPageClient from '@/components/BlogPageClient';

export const metadata = {
  title: 'Blog - Charles J. (CJ) Dyas',
  description: 'Thoughts on design, development, and the intersection of art and technology.',
};

export default function BlogPage() {
  const posts = getSortedPostsData();

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Navigation */}
      <Navigation currentPage="blog" />

      {/* Client Component with Animations */}
      <BlogPageClient posts={posts} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
