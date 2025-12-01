import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProjectData, getAllProjectSlugs, formatDate, ProjectCategory } from '@/lib/projects';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

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

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Navigation */}
      <Navigation currentPage="projects" />

      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8">
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
      </div>

      {/* Project Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-20">
        <header className="mb-8">
          {/* Category and Tools */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/70">
              {getCategoryLabel(project.category)}
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
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            {project.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-white/60 text-sm">
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
        </header>

        {/* Featured Image */}
        {project.featuredImage && (
          <div className="relative aspect-video w-full mb-8 rounded-2xl overflow-hidden border border-white/10">
            <Image
              src={project.featuredImage}
              alt={project.imageAlt || project.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div
          className="prose prose-lg prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: project.content }}
        />

        {/* Project Link */}
        {project.link && (
          <div className="mt-12 pt-8 border-t border-white/10">
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight text-neutral-900 bg-white hover:bg-white/90 border border-white/10 transition-colors duration-200"
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
          </div>
        )}

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-lg font-semibold">CJ</span>
              </div>
              <div>
                <p className="font-medium text-white">Charles J. (CJ) Dyas</p>
                <p className="text-sm text-white/60">Product Designer & Developer</p>
              </div>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-neutral-900 bg-white hover:bg-white/90 border border-white/10"
            >
              More Projects
            </Link>
          </div>
        </footer>
      </article>

      {/* Footer */}
      <Footer />
    </div>
  );
}
