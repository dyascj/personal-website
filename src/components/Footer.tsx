'use client';

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Footer() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 sm:mt-24 mt-16 border-t border-gray-200 dark:border-white/10 pt-16 pb-20 transition-colors duration-300">
      <div className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-neutral-950 text-gray-900 dark:text-white p-8 sm:p-12 transition-colors duration-300">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-20%,rgba(0,0,0,0.02),transparent_60%)] dark:bg-[radial-gradient(1200px_600px_at_20%_-20%,rgba(255,255,255,0.07),transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_120%,rgba(0,0,0,0.02),transparent_60%)] dark:bg-[radial-gradient(1200px_600px_at_80%_120%,rgba(255,255,255,0.06),transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#0000000d_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.15]"></div>
        </div>

        <div className="relative">
          <h2 className="text-[14vw] sm:text-[10vw] md:text-[10vw] lg:text-[6vw] xl:text-[4vw] 2xl:text-[3vw] 3xl:text-[2.5vw] 4xl:text-[2vw] max-w-4xl leading-[0.9] font-semibold tracking-tight">
            Let&apos;s build <span className="text-gray-400 dark:text-white/70">together.</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 md:divide-x md:divide-gray-200 dark:md:divide-white/10">
            <div>
              <p className="text-sm text-gray-500 dark:text-white/70">Email</p>
              <a href="mailto:dyascj@gmail.com" className="mt-2 inline-flex items-center gap-3 text-xl sm:text-2xl font-medium tracking-tight text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-white/80 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                </svg>
                <span className="break-all">dyascj@gmail.com</span>
              </a>
            </div>
            <div className="md:pl-8">
              <p className="text-sm text-gray-500 dark:text-white/70">Schedule</p>
              <a href="#" className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-tight text-white dark:text-gray-900 bg-neutral-900 dark:bg-white hover:bg-neutral-800 dark:hover:bg-white/90 border border-transparent dark:border-white/10 mt-2 transition-all shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
                <span>Book a call</span>
              </a>
            </div>
            <div className="md:pl-8">
              <p className="text-sm text-gray-500 dark:text-white/70">Social</p>
              <div className="flex flex-wrap gap-4 mt-4">
                <a href="https://www.threads.com/@cjdyas" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center hover:opacity-80 transition-opacity">
                  <img src="/icons/threads-brands-solid-full.svg" alt="Threads" className="w-6 h-6 sm:w-7 sm:h-7 dark:invert" />
                </a>
                <a href="https://www.linkedin.com/in/charles-cj-dyas/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center hover:opacity-80 transition-opacity">
                  <img src="/icons/linkedin-in-brands-solid-full.svg" alt="LinkedIn" className="w-6 h-6 sm:w-7 sm:h-7 dark:invert" />
                </a>
                <a href="https://www.youtube.com/@CJDyas" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center hover:opacity-80 transition-opacity">
                  <img src="/icons/youtube-brands-solid-full.svg" alt="YouTube" className="w-6 h-6 sm:w-7 sm:h-7 dark:invert" />
                </a>
                <a href="https://dribbble.com/cjdyas" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center hover:opacity-80 transition-opacity">
                  <img src="/icons/basketball-solid-full.svg" alt="Dribbble" className="w-6 h-6 sm:w-7 sm:h-7 dark:invert" />
                </a>
                <a href="https://github.com/dyascj" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center hover:opacity-80 transition-opacity">
                  <img src="/icons/github-brands-solid-full.svg" alt="GitHub" className="w-6 h-6 sm:w-7 sm:h-7 dark:invert" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-center text-[11px] text-gray-400 dark:text-white/60">© {new Date().getFullYear()} Charles Dyas — Available for freelance & contracts</p>
            
            {mounted && (
              <div className="flex items-center gap-1 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-white/10 rounded-full p-1 shadow-sm">
                <button
                  onClick={() => setTheme("system")}
                  className={`p-2 rounded-full transition-all ${theme === "system" ? "bg-gray-100 text-neutral-900 shadow-sm dark:bg-white/10 dark:text-white" : "text-gray-400 hover:text-gray-600 dark:text-white/40 dark:hover:text-white/70"}`}
                  aria-label="System Theme"
                >
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                    <line x1="8" x2="16" y1="21" y2="21"></line>
                    <line x1="12" x2="12" y1="17" y2="21"></line>
                  </svg>
                </button>
                <button
                  onClick={() => setTheme("light")}
                  className={`p-2 rounded-full transition-all ${theme === "light" ? "bg-gray-100 text-neutral-900 shadow-sm" : "text-gray-400 hover:text-gray-600 dark:text-white/40 dark:hover:text-white/70"}`}
                  aria-label="Light Mode"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                  </svg>
                </button>
                <button
                  onClick={() => setTheme("dark")}
                  className={`p-2 rounded-full transition-all ${theme === "dark" ? "bg-white/10 text-white shadow-sm" : "text-gray-400 hover:text-gray-600 dark:text-white/40 dark:hover:text-white/70"}`}
                  aria-label="Dark Mode"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
