'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Project } from '@/lib/projects';

interface ProjectDetailClientProps {
  project: Project;
  categoryLabel: string;
  formattedDate: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function ProjectDetailClient({ project, categoryLabel, formattedDate }: ProjectDetailClientProps) {
  return (
    <>
      {/* Back Button */}
      <motion.div 
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 pt-8"
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
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
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          Back to Projects
        </Link>
      </motion.div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-20">
        <motion.header 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          {/* Category and Tools */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2 mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/70">
              {categoryLabel}
            </span>
            {project.tools && project.tools.length > 0 && (
              <>
                <span className="text-white/30 hidden sm:inline">•</span>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/70"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </>
            )}
          </motion.div>

          {/* Title */}
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8">
            {project.title}
          </motion.h1>

          {/* Meta Info & Action */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-white/10">
            <div className="flex items-center gap-4 text-white/60 text-sm">
              <time dateTime={project.date}>
                {formattedDate}
              </time>
              <span>•</span>
              <span>{project.readTime}</span>
              {project.client && (
                <>
                  <span>•</span>
                  <span>for {project.client}</span>
                </>
              )}
            </div>

            {/* Project Link Button */}
            {project.link && project.link !== '#' && (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium tracking-tight text-neutral-900 bg-white hover:bg-white/90 border border-white/10 transition-colors duration-200 w-full sm:w-auto"
              >
                View Project
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
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </Link>
            )}
          </motion.div>
        </motion.header>

        {/* Featured Image */}
        {project.featuredImage && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="relative aspect-[4/3] w-full mb-12 rounded-2xl overflow-hidden border border-white/10"
          >
            <Image
              src={project.featuredImage}
              alt={project.imageAlt || project.title}
              fill
              className="object-cover"
            />
          </motion.div>
        )}

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="prose prose-lg prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: project.content }}
        />

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-lg font-semibold">CJ</span>
              </div>
              <div>
                <p className="font-medium text-white">Charles J. (CJ) Dyas</p>
                <p className="text-sm text-white/60">Product Designer</p>
              </div>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-neutral-900 bg-white hover:bg-white/90 border border-white/10"
            >
              More Projects
            </Link>
          </div>
        </motion.footer>
      </article>
    </>
  );
}

