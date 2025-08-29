import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'Projects - Charles J. (CJ) Dyas',
  description: 'Product & UI/UX Designer with 4+ years of experience focusing on UX, web design, and design systems to create user-centered products that serve over 2 million users annually.',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Navigation */}
      <Navigation currentPage="projects" />

      <div className="flex items-center justify-center" style={{minHeight: 'calc(100vh - 120px)'}}>

      
      <div className="max-w-md mx-auto px-4 sm:px-6 text-center">
        {/* Construction Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/10 border border-white/20">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="48" 
              height="48" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-white/80"
            >
              <path d="M12 6v12"></path>
              <path d="M17.196 9 6.804 15"></path>
              <path d="M6.804 9 17.196 15"></path>
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
          Under Construction
        </h1>

        {/* Message */}
        <p className="text-lg text-white/70 mb-8 leading-relaxed">
          I'm currently building something amazing here. Check back soon to see my latest projects and case studies.
        </p>

        {/* Return Home Button */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight text-neutral-900 bg-white hover:bg-white/90 border border-white/10 transition-colors duration-200"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg>
          Return Home
        </Link>

        {/* Additional Info */}
        <p className="mt-8 text-xs text-white/50">
          Want to see my work? Check out my{' '}
          <Link href="/blog" className="text-white/70 hover:text-white underline">
            blog
          </Link>
          {' '}or reach out via{' '}
          <a href="mailto:dyascj@gmail.com" className="text-white/70 hover:text-white underline">
            email
          </a>
          .
        </p>
      </div>
      </div>
    </div>
  );
}
