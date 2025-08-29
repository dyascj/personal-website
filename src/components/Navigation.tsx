'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface NavigationProps {
  currentPage?: 'home' | 'projects' | 'blog' | 'blog-post';
}

export default function Navigation({ currentPage = 'home' }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isActive = (page: string) => {
    if (page === 'blog' && (currentPage === 'blog' || currentPage === 'blog-post')) {
      return true;
    }
    return currentPage === page;
  };

  const getLinkClass = (page: string) => {
    return isActive(page)
      ? "text-sm text-white font-medium tracking-tight"
      : "text-sm text-white/70 hover:text-white tracking-tight";
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <nav className="flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="inline-flex items-center gap-2">
          <svg className="md:w-14 md:h-14 w-[36px] h-[36px]" viewBox="0 0 48 48" aria-hidden="true" strokeWidth="2" style={{width: '36px', height: '36px'}}>
            <path d="M24 8 L40 36 H8 Z" fill="currentColor"></path>
          </svg>
          <span className="sm:text-base text-sm font-medium tracking-tight">Charles J. (CJ) Dyas</span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/projects" className={getLinkClass('projects')}>Projects</Link>
          <Link href="/#tools" className={getLinkClass('tools')}>Tools</Link>
          <Link href="/#about" className={getLinkClass('about')}>About</Link>
          <Link href="/blog" className={getLinkClass('blog')}>Blog</Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a href="#" className="hidden sm:inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium tracking-tight text-white bg-white/10 hover:bg-white/15 border border-white/10 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M12 15V3"></path>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <path d="m7 10 5 5 5-5"></path>
            </svg>
            <span>Resume</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center rounded-full p-2 border border-white/10 bg-white/5 hover:bg-white/10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M4 12h16"></path>
              <path d="M4 18h16"></path>
              <path d="M4 6h16"></path>
            </svg>
            <span className="sr-only">Open menu</span>
          </button>
        </div>
      </nav>
      </div>

      {/* Mobile menu (portal to <body> to ensure backdrop blur samples the page) */}
      {isMounted && mobileMenuOpen && createPortal(
        <div
          className="fixed left-0 right-0 top-[72px] sm:top-[80px] mx-4 sm:mx-6 rounded-2xl border border-white/10 bg-black/20 backdrop-blur-xl shadow-2xl overflow-hidden z-[60]"
          style={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
        >
          <div className="px-4 py-3 grid gap-2">
            <Link href="/projects" className="text-sm text-white font-medium tracking-tight py-1.5 hover:text-white/80 transition-colors" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
            <Link href="/#tools" className="text-sm text-white font-medium tracking-tight py-1.5 hover:text-white/80 transition-colors" onClick={() => setMobileMenuOpen(false)}>Tools</Link>
            <Link href="/#about" className="text-sm text-white font-medium tracking-tight py-1.5 hover:text-white/80 transition-colors" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link href="/blog" className="text-sm text-white font-medium tracking-tight py-1.5 hover:text-white/80 transition-colors" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
          </div>
          <div className="border-t border-white/10 px-4 py-3">
            <a href="#" className="inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-neutral-900 bg-white hover:bg-white/90 border border-white/10 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M12 15V3"></path>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <path d="m7 10 5 5 5-5"></path>
              </svg>
              <span>Download Resume</span>
            </a>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
}
