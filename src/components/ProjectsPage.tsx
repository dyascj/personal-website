'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useMemo } from 'react';
import { ProjectMeta } from '@/lib/projects';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectsPageProps {
  initialProjects: ProjectMeta[];
}

type FilterType = 'All' | 'Product Design' | 'Web Design' | 'Graphic Design';

function getCategoryLabel(category: string): string {
  switch (category) {
    case 'graphic-design':
      return 'Graphic Design';
    case 'product-design':
      return 'Product Design';
    case 'web-design':
      return 'Web Design';
    default:
      return category;
  }
}

function getDotColor(category: string): string {
  switch (category) {
    case 'graphic-design':
      return 'bg-pink-500';
    case 'product-design':
      return 'bg-blue-500';
    case 'web-design':
      return 'bg-violet-500';
    default:
      return 'bg-white/50';
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  },
  exit: { 
    opacity: 0, 
    scale: 0.95, 
    transition: { duration: 0.2 } 
  }
};

function ProjectCard({ project }: { project: ProjectMeta }) {
  const categoryLabel = getCategoryLabel(project.category);
  const dotColor = getDotColor(project.category);

  return (
    <motion.article
      layout
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="group flex flex-col h-full"
    >
      <Link href={`/projects/${project.category}/${project.slug}`} className="block h-full">
        {/* Card Container */}
        <div className="bg-transparent h-full flex flex-col">
          {/* Thumbnail Image */}
          <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-white/5 border border-white/10 mb-4">
            {project.thumbnail ? (
              <Image
                src={project.thumbnail}
                alt={project.imageAlt || project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                  <circle cx="9" cy="9" r="2"/>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                </svg>
              </div>
            )}
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col">
            {/* Category / Tag */}
            <div className="flex items-center gap-2 mb-2">
              <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`}></span>
              <span className="text-xs font-medium text-white/60 uppercase tracking-wider">
                {categoryLabel}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-medium text-white mb-2 group-hover:text-white/90 transition-colors">
              {project.title}
            </h3>

            {/* Excerpt */}
            <p className="text-sm text-white/50 leading-relaxed line-clamp-2 mb-4">
              {project.excerpt}
            </p>

            {/* Year */}
            <div className="mt-auto pt-2 text-xs text-white/30">
              {project.year || new Date(project.date).getFullYear()}
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

function EmptyState() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="col-span-full text-center py-20"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 mb-4 text-white/30">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="m15 9-6 6"/>
          <path d="m9 9 6 6"/>
        </svg>
      </div>
      <p className="text-white/50">No projects found for this category.</p>
    </motion.div>
  );
}

export default function ProjectsPage({ initialProjects }: ProjectsPageProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return initialProjects;

    return initialProjects.filter((project) => {
      if (activeFilter === 'Graphic Design') return project.category === 'graphic-design';
      if (activeFilter === 'Product Design') return project.category === 'product-design';
      if (activeFilter === 'Web Design') return project.category === 'web-design';
      return true;
    });
  }, [activeFilter, initialProjects]);

  const filters: FilterType[] = ['All', 'Product Design', 'Web Design', 'Graphic Design'];

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 pt-24 pb-20">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center max-w-4xl mx-auto mb-20"
      >
         <div className="flex items-center justify-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            <span className="text-xs font-medium text-white/50 uppercase tracking-[0.2em]">Portfolio</span>
         </div>
         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Projects
         </h1>
         <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            A curated selection of work spanning from freelance graphic & web design to professional product design experience.
         </p>
      </motion.div>

      {/* Header & Filters */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-white/10 pb-6"
      >
        <div className="relative flex-1 min-w-0">
          <div className="flex items-center gap-4 overflow-x-auto pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
            <span className="text-sm font-medium text-white/50 whitespace-nowrap sticky left-0 bg-neutral-950 z-10 pr-4 md:static md:bg-transparent md:pr-0">Filter:</span>
            <div className="flex gap-2 pr-4 md:pr-0">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    activeFilter === filter
                      ? 'bg-white text-neutral-950'
                      : 'text-white/60 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          {/* Fade mask for mobile scrolling */}
          <div className="absolute right-0 top-0 bottom-2 w-8 bg-gradient-to-l from-neutral-950 to-transparent pointer-events-none md:hidden"></div>
        </div>
        
        <div className="text-sm text-white/40 font-mono hidden md:block flex-shrink-0">
          [{filteredProjects.length} works]
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))
          ) : (
            <EmptyState />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
