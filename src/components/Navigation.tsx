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
      ? "text-sm text-gray-900 dark:text-white font-medium tracking-tight"
      : "text-sm text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white tracking-tight";
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-black/20 border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <nav className="flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="inline-flex items-center gap-2 group">
          <svg className="md:w-12 md:h-12 w-[32px] h-[32px] animate-spin-slow text-gray-900 dark:text-white transition-colors" viewBox="0 0 261 256" aria-hidden="true" style={{width: '32px', height: '32px'}}>
            <g clipPath="url(#clip0_473_3036)">
              <path d="M34.2075 133.625C35.1307 136.383 35.7624 138.174 36.3697 140.012C39.7224 150.319 46.9866 156.634 57.5306 157.94C64.0416 158.739 70.8685 157.771 77.4767 156.948C86.32 155.86 95.0419 153.827 103.885 152.787C122.276 150.634 137.534 156.658 149.268 171.054C154.929 177.997 157.601 185.667 153.374 194.232C149.244 202.627 141.785 205.095 132.869 204.611C129.832 204.442 126.431 204.442 123.807 205.651C121.426 206.764 118.414 209.595 118.316 211.797C118.195 214.386 120.503 217.458 122.544 219.612C124.001 221.136 126.698 221.475 129.565 222.636C128.35 224.45 127.548 225.999 126.431 227.281C118.827 236.088 111.125 244.774 103.569 253.629C101.359 256.218 99.5122 256.701 96.1595 255.153C80.3921 247.846 67.2242 237.806 58.9883 222.152C52.4287 209.692 58.6967 192.417 71.7674 186.804C81.6554 182.57 91.9564 180.997 102.695 181.651C108.501 182.014 114.332 182.014 120.163 182.183C124.414 182.304 127.84 180.852 128.787 176.352C129.686 172.046 127.573 169.239 123.71 167.207C113.506 161.811 103.326 163.529 93.7786 168.174C82.53 173.642 72.1561 180.973 60.7618 186.102C44.7515 193.337 28.1338 196.627 11.5889 186.877C10.9573 186.514 10.3013 186.199 9.66965 185.836C-2.30773 178.602 -2.79363 175.481 6.26836 165.199C14.1885 156.198 22.0115 147.101 29.9073 138.077C31.0492 136.77 32.3125 135.585 34.2075 133.625Z" fill="currentColor"/>
              <path d="M136.392 221.595C147.932 219.563 156.192 213.901 159.277 203.57C161.221 197.014 161.391 189.61 160.808 182.715C159.788 170.303 156.508 158.012 156.143 145.601C155.633 127.721 168.485 109.914 184.35 103.817C197.688 98.6879 210.321 108.196 209.276 122.398C209.009 126.148 209.203 129.995 209.859 133.697C210.515 137.423 213.018 139.818 217.172 139.625C221.278 139.431 223.95 137.496 224.898 133.31C226.283 127.116 227.036 126.898 231.895 131.036C239.912 137.883 247.808 144.875 255.874 151.649C258.765 154.069 259.737 156.246 257.89 159.972C250.723 174.61 241.224 187.166 227.206 195.973C212.362 205.312 193.849 198.417 188.407 181.844C184.957 171.319 186.561 160.674 186.512 150.028C186.512 145.504 186.682 140.98 186.561 136.455C186.463 132.874 184.884 130.165 181.046 129.366C177.304 128.592 174.122 129.487 171.984 132.778C168.315 138.367 166.444 144.73 168.947 150.899C173.125 161.23 178.179 171.247 183.135 181.263C190.205 195.61 197.445 209.764 195.525 226.627C194.189 238.483 187.144 246.854 179.418 254.862C178.446 255.854 174.948 255.999 173.83 255.056C161.804 245.063 149.997 234.805 138.189 224.571C137.582 224.039 137.315 223.119 136.44 221.571L136.392 221.595Z" fill="currentColor"/>
              <path d="M131.484 33.6534C135.177 29.3952 138.214 25.8871 141.251 22.3789C146.474 16.3303 151.795 10.3543 156.872 4.16058C159.035 1.5234 161.197 0.845961 164.452 2.00729C181.191 7.95909 193.582 19.1611 201.939 34.3793C210.394 49.7427 200.676 68.711 183.086 71.1304C172.178 72.6305 161.002 72.1466 149.948 72.6063C146.158 72.7756 142.077 72.3401 138.675 73.6224C136.1 74.5902 132.966 77.7113 132.675 80.1549C132.407 82.5018 134.885 86.2761 137.193 87.631C145.259 92.373 154.005 92.1553 162.314 88.139C170.647 84.1228 178.616 79.3565 186.876 75.1709C193.193 71.9772 199.826 69.3884 206.118 66.1706C222.59 57.7752 245.549 61.9608 258.887 76.0177C260.733 77.9532 261.996 79.6226 259.931 82.0179C249.023 94.6231 238.09 107.228 226.769 120.293C225.967 118.696 225.36 117.85 225.068 116.906C221.205 104.131 210.102 95.6876 196.716 96.8006C185.346 97.7684 174.049 99.97 162.776 101.906C143.559 105.196 126.868 100.744 114.016 85.768C110.736 81.9453 108.258 76.8161 107.141 71.8805C104.468 59.9527 113.749 49.9846 126.066 50.5895C129.152 50.7346 132.237 51.0492 135.298 50.9524C139.501 50.8314 142.83 49.0894 143.559 44.5651C144.312 39.8472 141.518 37.1132 137.534 35.3954C136.052 34.7664 134.448 34.4761 131.436 33.6051L131.484 33.6534Z" fill="currentColor"/>
              <path d="M124.657 32.9041C121.742 34.0655 120.333 34.7187 118.875 35.2268C105.707 39.7027 98.5161 49.9611 99.6822 64.5503C100.484 74.6151 102.258 84.6558 104.444 94.5513C108.987 115.141 100.848 136.77 83.429 148.529C76.9179 152.932 69.8724 153.876 62.7783 150.247C55.9028 146.738 53.279 140.617 53.4005 133.117C53.4491 130.214 53.2304 127.31 53.1575 124.407C53.0846 119.689 50.4608 116.713 46.0877 116.06C41.8361 115.431 38.945 118.068 37.293 121.939C34.9364 127.456 34.086 127.722 29.47 123.802C21.3069 116.858 13.3139 109.697 5.10223 102.802C1.9196 100.14 1.57947 97.6481 3.37729 93.8738C10.2285 79.333 20.5538 67.8649 33.9646 59.1792C49.4647 49.1385 69.095 57.3162 73.4438 75.2442C75.9461 85.5752 76.5535 95.9545 75.1687 106.527C74.7071 110.084 74.7071 113.786 75.1687 117.342C75.7518 121.77 78.0112 125.399 82.9674 125.81C87.6806 126.222 90.0615 123.222 91.7378 119.133C95.6979 109.503 93.2441 100.576 88.9682 91.9141C85.1053 84.1235 80.7322 76.5749 76.8208 68.8085C69.921 55.1629 63.167 41.4447 66.2039 25.3555C68.1718 15.0245 74.0025 7.11301 82.0199 0.701514C83.0645 -0.121093 85.8342 -0.314647 86.7331 0.459571C99.1235 10.8147 111.319 21.3877 124.682 32.88L124.657 32.9041Z" fill="currentColor"/>
            </g>
            <defs>
              <clipPath id="clip0_473_3036">
                <rect width="261" height="256" fill="white"/>
              </clipPath>
            </defs>
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
          <a href="#" className="hidden sm:inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium tracking-tight text-gray-900 dark:text-white bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/15 border border-gray-200 dark:border-white/10 shadow-sm transition-colors">
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
            className="md:hidden inline-flex items-center justify-center rounded-full p-2 border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 text-gray-900 dark:text-white"
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
          className="fixed left-0 right-0 top-[72px] sm:top-[80px] mx-4 sm:mx-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/90 dark:bg-black/20 backdrop-blur-xl shadow-2xl overflow-hidden z-[60]"
          style={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
        >
          <div className="px-4 py-3 grid gap-2">
            <Link href="/projects" className="text-sm text-gray-900 dark:text-white font-medium tracking-tight py-1.5 hover:text-gray-600 dark:hover:text-white/80 transition-colors" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
            <Link href="/#tools" className="text-sm text-gray-900 dark:text-white font-medium tracking-tight py-1.5 hover:text-gray-600 dark:hover:text-white/80 transition-colors" onClick={() => setMobileMenuOpen(false)}>Tools</Link>
            <Link href="/#about" className="text-sm text-gray-900 dark:text-white font-medium tracking-tight py-1.5 hover:text-gray-600 dark:hover:text-white/80 transition-colors" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link href="/blog" className="text-sm text-gray-900 dark:text-white font-medium tracking-tight py-1.5 hover:text-gray-600 dark:hover:text-white/80 transition-colors" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
          </div>
          <div className="border-t border-gray-200 dark:border-white/10 px-4 py-3">
            <a href="#" className="inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-white dark:text-neutral-900 bg-neutral-900 dark:bg-white hover:bg-neutral-800 dark:hover:bg-white/90 border border-transparent dark:border-white/10 transition-colors">
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
