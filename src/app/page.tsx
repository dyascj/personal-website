'use client';

import Image from "next/image";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export default function Home() {

  useEffect(() => {
    // Load UnicornStudio animation script
    if (typeof window !== 'undefined') {
      const initializeAnimation = () => {
        if (window.UnicornStudio) {
          // Add a small delay to ensure DOM is ready and previous animations are cleaned up
          setTimeout(() => {
            try {
              window.UnicornStudio?.init();
            } catch (error) {
              console.warn('UnicornStudio initialization error:', error);
            }
          }, 100);
        }
      };

      if (!window.UnicornStudio) {
        // Load script if not already loaded
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
        script.onload = initializeAnimation;
        (document.head || document.body).appendChild(script);
      } else {
        // Script already loaded, just initialize
        initializeAnimation();
      }
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Background Animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="aura-background-component top-0 w-full -z-10 absolute h-[815px]"
      >
        <div data-us-project="cqcLtDwfoHqqRPttBbQE" className="absolute top-0 left-0 -z-10 w-full h-full"></div>
      </motion.div>

      {/* Navigation */}
      <Navigation currentPage="home" />

      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-4 sm:px-6 mt-10 sm:mt-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <motion.h1 variants={fadeInUp} className="leading-none text-white tracking-tight">
              <span className="block text-[12vw] sm:text-[10vw] md:text-[10vw] lg:text-[6vw] xl:text-[4vw] 2xl:text-[3vw] 3xl:text-[2.5vw] 4xl:text-[2vw] max-w-4xl font-semibold">
                <span className="tracking-tighter">Charles J.</span>
                <span className="block"></span>
                <span className="tracking-tighter">(CJ) Dyas</span>
              </span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="sm:mt-5 sm:text-3xl leading-relaxed max-w-2xl text-base text-white/70 tracking-tight mt-4">
              Product & UI/UX Designer with 4+ years of experience focusing on UX, web design, and design systems to create user-centered products that serve over 2 million users annually.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="/blog" className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-tight text-neutral-900 bg-white hover:bg-white/90 border border-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
                <span>View Blog</span>
              </a>
              <a href="mailto:dyascj@gmail.com" className="inline-flex items-center justify-center gap-2 hover:bg-white/15 text-sm font-medium text-white tracking-tight bg-white/10 border-white/10 border rounded-full pt-3 pr-5 pb-3 pl-5 shadow-sm backdrop-blur">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                </svg>
                <span>dyascj@gmail.com</span>
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-3 border-t border-white/10 pt-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] text-white/50 mt-0.5">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <div>
                  <p className="text-sm font-medium tracking-tight">Based in Cincinnati, OH</p>
                  <p className="text-xs text-white/60 mt-0.5">Open to remote work</p>
                </div>
              </div>
              <div className="flex items-start gap-3 border-t border-white/10 pt-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] text-white/50 mt-0.5">
                  <path d="M12 20v2"></path>
                  <path d="M12 2v2"></path>
                  <path d="M17 20v2"></path>
                  <path d="M17 2v2"></path>
                  <path d="M2 12h2"></path>
                  <path d="M2 17h2"></path>
                  <path d="M2 7h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="M20 17h2"></path>
                  <path d="M20 7h2"></path>
                  <path d="M7 20v2"></path>
                  <path d="M7 2v2"></path>
                  <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                  <rect x="8" y="8" width="8" height="8" rx="1"></rect>
                </svg>
                <div>
                  <p className="text-sm font-medium tracking-tight">Product Design + Mapping</p>
                  <p className="text-xs text-white/60 mt-0.5">Design systems, web apps, cartography</p>
                </div>
              </div>
              <div className="flex items-start gap-3 border-t border-white/10 pt-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] text-white/50 mt-0.5">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <div>
                  <p className="text-sm font-medium tracking-tight">Currently available</p>
                  <p className="text-xs text-white/60 mt-0.5">Contract work and Freelance Gigs</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="lg:col-span-5">
            <div className="relative aspect-[4/5] sm:aspect-[5/6] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.35)] bg-white/5 rounded-3xl border border-white/10">
              <Image
                src="/cj-fullbody.png" 
                alt="CJ at work" 
                fill
                className="object-cover filter grayscale saturate-75 contrast-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-3">
                <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/15 p-3 shadow-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-white/50"></div>
                    <div className="text-lg font-semibold tracking-tight text-white">20+</div>
                  </div>
                  <p className="text-[11px] text-white/70">Projects</p>
                </div>
                <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/15 p-3 shadow-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-white/50"></div>
                    <div className="text-lg font-semibold tracking-tight text-white">4+</div>
                  </div>
                  <p className="text-[11px] text-white/70">Years of Experience</p>
                </div>
                <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/15 p-3 shadow-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-white/50"></div>
                    <div className="text-lg font-semibold tracking-tight text-white">2m+</div>
                  </div>
                  <p className="text-[11px] text-white/70">Users Served</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Company Logos Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="max-w-7xl sm:px-6 sm:mt-24 mt-16 mr-auto mb-16 ml-auto pt-10 pr-4 pl-4"
      >
        <div className="relative overflow-hidden sm:p-8 text-white bg-neutral-950 border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-20%,rgba(255,255,255,0.07),transparent_60%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_120%,rgba(255,255,255,0.06),transparent_60%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.15]"></div>
          </div>

          <div className="relative">
            <section id="work" className="relative z-10 pt-16 pb-16">
              <div className="max-w-6xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
                <div className="text-center space-y-12">
                  <div className="space-y-4">
                    <h2 className="sm:text-4xl text-3xl font-normal text-white tracking-tight">Trusted by leading companies</h2>
                    <p className="text-lg text-white/70 max-w-2xl mx-auto">At previous companies, I&apos;ve worked with some of the most iconic brands locally and nationally.</p>
                    
                    <div className="mt-8 pt-8 pr-6 pb-6 pl-6">
                      <div className="text-center">
                        <p className="uppercase text-sm font-medium text-zinc-400 tracking-wide">Brands I&apos;ve worked with</p> 
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
                        <div className="col-span-2 sm:col-span-1 flex justify-center">
                          <Image src="/Disney_Logo.svg" alt="Disney Logo" width={100} height={44} className="w-auto h-11 filter brightness-0 invert" />
                        </div>
                        <div className="col-span-2 sm:col-span-1 flex justify-center">
                          <Image src="/SDPadres_logo.svg" alt="San Diego Padres Logo" width={100} height={44} className="w-auto h-11 filter brightness-0 invert" />
                        </div>
                        <div className="col-span-2 sm:col-span-1 flex justify-center">
                          <Image src="/MDD_logo.svg" alt="Miami Design District Logo" width={100} height={44} className="w-auto h-11 filter brightness-0 invert" />
                        </div>
                        <div className="col-span-2 sm:col-span-1 flex justify-center">
                          <Image src="/uch-logo.svg" alt="UCH Logo" width={100} height={36} className="w-auto h-9 filter brightness-0 invert" />
                        </div>
                        <div className="col-span-2 sm:col-span-1 flex justify-center">
                          <Image src="/riverfront_logo.svg" alt="Riverfront Logo" width={100} height={36} className="w-auto h-9 filter brightness-0 invert" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="max-w-7xl mx-auto px-4 sm:px-6 mt-16 sm:mt-20 pt-10 border-t border-white/10"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5">
            <div className="relative aspect-[16/12] md:aspect-[4/5] rounded-3xl overflow-hidden border border-white/20 bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
              <Image
                src="/cj-headshot.png" 
                alt="Workspace" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-transparent"></div>
            </div>
          </div>
          <div className="md:col-span-7 md:pl-8 md:border-l md:border-white/10">
            <h2 className="text-2xl sm:text-3xl tracking-tight text-white">About</h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/70">
              My background in UI/UX design and GIS cartography allows me to bring structure to complexity—designing large-scale touch interfaces, responsive web tools, and interactive maps that prioritize clarity, accessibility, and performance. I work across the entire product lifecycle, from early research and prototyping to polished, production-ready design.
            </p>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/70">
              I take a data-driven approach to design—leveraging usage analytics, user feedback, and real-world testing to measure the impact of my work and iterate intentionally. Whether refining the flow of a multi-step form or optimizing a touchscreen for public use, I focus on designing experiences that are intuitive, efficient, and human-centered.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white/80">
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                </svg>
                <h3 className="text-xl font-semibold tracking-tight">Experience</h3>
              </div>
              <ul className="mt-3 space-y-3">
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white/70 mt-0.5">
                    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                    <path d="M10 6h4"></path>
                    <path d="M10 10h4"></path>
                    <path d="M10 14h4"></path>
                    <path d="M10 18h4"></path>
                  </svg>
                  <div>
                    <p className="text-sm font-medium tracking-tight">Director of Design & Service • RoveiQ</p>
                    <p className="text-xs text-white/60">Feb 2025 — Present · Led design & Product</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white/70 mt-0.5">
                    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                    <path d="M10 6h4"></path>
                    <path d="M10 10h4"></path>
                    <path d="M10 14h4"></path>
                    <path d="M10 18h4"></path>
                  </svg>
                  <div>
                    <p className="text-sm font-medium tracking-tight">Freelance Designer/Web Developer</p>
                    <p className="text-xs text-white/60">2021 — Present · Web Design, Graphic Design, Branding</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white/70 mt-0.5">
                    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                    <path d="M10 6h4"></path>
                    <path d="M10 10h4"></path>
                    <path d="M10 14h4"></path>
                    <path d="M10 18h4"></path>
                  </svg>
                  <div>
                    <p className="text-sm font-medium tracking-tight">Product Designer • RoveIQ</p>
                    <p className="text-xs text-white/60">2021 — 2025 · Product Design & UI/UX Design</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white/80">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <h3 className="text-xl font-semibold tracking-tight">Patents</h3>
              </div>
              <ul className="mt-3 space-y-3">
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white/70 mt-0.5 flex-shrink-0">
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
                    <path d="M10 9H8"/>
                    <path d="M16 13H8"/>
                    <path d="M16 17H8"/>
                  </svg>
                  <div>
                    <a 
                      href="https://patents.google.com/patent/US20250224254A1/en?inventor=CJ+Dyas&oq=inventor:(CJ+Dyas)"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <p className="text-sm font-medium tracking-tight group-hover:text-blue-400 transition-colors inline-flex items-center gap-1">
                        Methods and systems for kiosk-assisted mapping
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                          <path d="M7 17L17 7"/>
                          <path d="M7 7h10v10"/>
                        </svg>
                      </p>
                      <p className="text-xs text-white/60 mt-0.5">US20250224254A1 • Pending</p>
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-6 p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-sm font-medium tracking-tight text-white mb-2">Currently Learning</h3>
              <p className="text-sm text-white/70">Exploring AI-powered design tools and learning to build powerful sites using Next.js</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Technologies & Tools Section */}
      <motion.section 
        id="tools"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="max-w-7xl sm:px-6 sm:mt-20 border-white/10 border-t mt-16 mr-auto ml-auto pt-10 pr-4 pl-4"
      >
        <div className="lg:col-span-2">
          <h3 className="text-2xl sm:text-3xl tracking-tight text-white mb-6">Technologies &amp; Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Design Tools */}
            <div className="bg-vercel-card border border-vercel-border rounded-lg p-4 text-center hover:border-vercel-accent transition-colors">
              <div className="w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/10 shadow-sm">
                <img src="/icons/Figma-logo.svg" alt="Figma" className="w-7 h-7" />
              </div>
              <div className="text-sm font-medium text-white">Figma</div>
            </div>
            <div className="bg-vercel-card border border-vercel-border rounded-lg p-4 text-center hover:border-vercel-accent transition-colors">
              <div className="w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/10 shadow-sm">
                <img src="/icons/framer-svgrepo-com.svg" alt="Framer" className="w-7 h-7" />
              </div>
              <div className="text-sm font-medium text-white">Framer</div>
            </div>
            <div className="bg-vercel-card border border-vercel-border rounded-lg p-4 text-center hover:border-vercel-accent transition-colors">
              <div className="w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/10 shadow-sm">
                <img src="/icons/Notion-logo.svg" alt="Notion" className="w-7 h-7" />
              </div>
              <div className="text-sm font-medium text-white">Notion</div>
            </div>
            <div className="bg-vercel-card border border-vercel-border rounded-lg p-4 text-center hover:border-vercel-accent transition-colors">
              <div className="w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/10 shadow-sm">
                <img src="/icons/QGIS_logo.svg" alt="QGIS" className="w-7 h-7" />
              </div>
              <div className="text-sm font-medium text-white">QGIS</div>
            </div>
            
            {/* Code Technologies */}
            <div className="bg-vercel-card border border-vercel-border rounded-lg p-4 text-center hover:border-vercel-accent transition-colors">
              <div className="w-12 h-12 flex rounded-lg mr-auto mb-3 ml-auto items-center justify-center bg-white/10 backdrop-blur-md border border-white/10 shadow-sm">
                <img src="/icons/React-icon.svg" alt="React" className="w-7 h-7" />
              </div>
              <div className="text-sm font-medium text-white">React</div>
            </div>
            <div className="bg-vercel-card border border-vercel-border rounded-lg p-4 text-center hover:border-vercel-accent transition-colors">
              <div className="w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/10 shadow-sm">
                <img src="/icons/Typescript_logo.svg" alt="TypeScript" className="w-7 h-7" />
              </div>
              <div className="text-sm font-medium text-white">TypeScript</div>
            </div>
            <div className="bg-vercel-card border border-vercel-border rounded-lg p-4 text-center hover:border-vercel-accent transition-colors">
              <div className="w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/10 shadow-sm">
                <span className="text-white font-bold">▲</span>
              </div>
              <div className="text-sm font-medium text-white">Next.js</div>
            </div>
            <div className="bg-vercel-card border border-vercel-border rounded-lg p-4 text-center hover:border-vercel-accent transition-colors">
              <div className="w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/10 shadow-sm">
                <img src="/icons/Python-logo.svg" alt="Python" className="w-7 h-7" />
              </div>
              <div className="text-sm font-medium text-white">Python</div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact / CTA */}
      <Footer />
    </div>
  );
}
