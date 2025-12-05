import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProjectData, getAllProjectSlugs, formatDate, ProjectCategory } from '@/lib/projects';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

interface ProjectPageProps {
  params: {
    category: string;
    slug: string;
  };
}

export async function generateStaticParams() {
  const graphicDesignSlugs = getAllProjectSlugs('graphic-design');
  const productDesignSlugs = getAllProjectSlugs('product-design');
  const webDesignSlugs = getAllProjectSlugs('web-design');
  
  return [
    ...graphicDesignSlugs.map(({ params }) => ({
      category: 'graphic-design',
      slug: params.slug,
    })),
    ...productDesignSlugs.map(({ params }) => ({
      category: 'product-design',
      slug: params.slug,
    })),
    ...webDesignSlugs.map(({ params }) => ({
      category: 'web-design',
      slug: params.slug,
    })),
  ];
}

export async function generateMetadata({ params }: ProjectPageProps) {
  try {
    const project = await getProjectData(params.slug, params.category as ProjectCategory);
    const image = project.featuredImage || project.thumbnail;
    
    return {
      title: `${project.title}`,
      description: project.excerpt,
      openGraph: image
        ? {
            type: 'article',
            title: project.title,
            description: project.excerpt,
            images: [{ url: image }],
          }
        : undefined,
      twitter: image
        ? {
            card: 'summary_large_image',
            title: project.title,
            description: project.excerpt,
            images: [image],
          }
        : {
            card: 'summary',
            title: project.title,
            description: project.excerpt,
          },
    };
  } catch {
    return {
      title: 'Project Not Found - Charles J. (CJ) Dyas',
    };
  }
}

function getCategoryLabel(category: ProjectCategory): string {
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

export default async function ProjectPage({ params }: ProjectPageProps) {
  let project;
  try {
    project = await getProjectData(params.slug, params.category as ProjectCategory);
  } catch {
    notFound();
  }

  const imageSrc = project.featuredImage || project.thumbnail;

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Navigation */}
      <Navigation currentPage="projects" />

      <PageTransition>
        {/* Back Button */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white text-sm transition-colors"
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
        </div>

        {/* Project Header */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-20">
          <header className="mb-8">
            {/* Category and Tools */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-white/70 transition-colors duration-300">
                {getCategoryLabel(project.category)}
              </span>
              {project.tools && project.tools.length > 0 && (
                <>
                  <span className="text-gray-300 dark:text-white/30 hidden sm:inline transition-colors duration-300">•</span>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-white/70 transition-colors duration-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-8 transition-colors duration-300">
              {project.title}
            </h1>

            {/* Meta Info & Action */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
              <div className="flex items-center gap-4 text-gray-500 dark:text-white/60 text-sm transition-colors duration-300">
                <time dateTime={project.date}>
                  {formatDate(project.date)}
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
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium tracking-tight text-white dark:text-neutral-900 bg-neutral-900 dark:bg-white hover:bg-neutral-800 dark:hover:bg-white/90 border border-transparent dark:border-white/10 transition-colors duration-200 w-full sm:w-auto"
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
            </div>
          </header>

          {/* Featured Image */}
          {imageSrc && (
            <div className="relative aspect-video w-full mb-12 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 transition-colors duration-300">
              <Image
                src={imageSrc}
                alt={project.imageAlt || project.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
            </div>
          )}

          {/* Content */}
          <div
            className="prose prose-lg dark:prose-invert max-w-none transition-colors duration-300"
            dangerouslySetInnerHTML={{ __html: project.content }}
          />

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center transition-colors duration-300">
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">CJ</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white transition-colors duration-300">Charles J. (CJ) Dyas</p>
                  <p className="text-sm text-gray-500 dark:text-white/60 transition-colors duration-300">Product Designer</p>
                </div>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-white dark:text-neutral-900 bg-neutral-900 dark:bg-white hover:bg-neutral-800 dark:hover:bg-white/90 border border-transparent dark:border-white/10 transition-colors"
              >
                More Projects
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
