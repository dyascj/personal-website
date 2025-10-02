'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ProjectMeta, ProjectCategory } from '@/lib/projects';

interface ProjectsPageProps {
  graphicDesignProjects: ProjectMeta[];
  productDesignProjects: ProjectMeta[];
}

function ProjectCard({ project }: { project: ProjectMeta }) {
  return (
    <article className="group">
      <Link href={`/projects/${project.category}/${project.slug}`}>
        <div className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-200 overflow-hidden">
          {/* Thumbnail */}
          {project.thumbnail ? (
            <div className="relative aspect-video w-full">
              <Image
                src={project.thumbnail}
                alt={project.imageAlt || project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          ) : (
            <div className="relative aspect-video w-full bg-white/5 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-white/60"
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
            </div>
          )}

          <div className="p-6">
            {/* Tools (replacing tags) */}
            {project.tools && project.tools.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.slice(0, 2).map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/10 text-white/70"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h2 className="text-xl font-semibold text-white group-hover:text-white/90 mb-3 line-clamp-2">
              {project.title}
            </h2>

            {/* Excerpt */}
            <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-3">
              {project.excerpt}
            </p>

            {/* Meta */}
            <div className="flex items-center justify-between text-xs text-white/50">
              <time dateTime={project.date}>
                {new Date(project.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span>{project.readTime}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

function EmptyState() {
  return (
    <div className="text-center py-12">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 border border-white/20 mb-4">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-white/60"
        >
          <path d="M12 6v12"></path>
          <path d="M17.196 9 6.804 15"></path>
          <path d="M6.804 9 17.196 15"></path>
        </svg>
      </div>
      <p className="text-white/70 text-lg">Projects being added soon</p>
    </div>
  );
}

export default function ProjectsPage({ graphicDesignProjects, productDesignProjects }: ProjectsPageProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('graphic-design');

  const currentProjects = activeCategory === 'graphic-design' 
    ? graphicDesignProjects 
    : productDesignProjects;

  const currentCategoryLabel = activeCategory === 'graphic-design' 
    ? 'Graphic Design' 
    : 'Product Design';

  return (
    <>
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Projects
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
            A collection of my design work, case studies, and creative projects spanning graphic design and product design.
          </p>

          {/* Category Toggle */}
          <div className="inline-flex items-center bg-white/5 border border-white/10 rounded-full p-1">
            <button
              onClick={() => setActiveCategory('graphic-design')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === 'graphic-design'
                  ? 'bg-white text-neutral-900'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              Graphic Design
            </button>
            <button
              onClick={() => setActiveCategory('product-design')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === 'product-design'
                  ? 'bg-white text-neutral-900'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              Product Design
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {currentCategoryLabel}
            </h2>
            <div className="flex-1 h-px bg-white/20"></div>
            <span className="text-white/60 text-sm">
              {currentProjects.length} {currentProjects.length === 1 ? 'project' : 'projects'}
            </span>
          </div>
          
          {currentProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </section>
      </div>
    </>
  );
}
