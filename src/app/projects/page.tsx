import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProjectsPage from '@/components/ProjectsPage';
import { getAllProjects } from '@/lib/projects';

export const metadata = {
  title: 'Projects - Charles J. (CJ) Dyas',
  description: 'A collection of my design work, case studies, and creative projects spanning graphic design and product design.',
};

export default function ProjectsPageWrapper() {
  const allProjects = getAllProjects();

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Navigation */}
      <Navigation currentPage="projects" />
      
      {/* Projects Page Component */}
      <ProjectsPage initialProjects={allProjects} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
