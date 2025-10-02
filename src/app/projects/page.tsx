import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProjectsPage from '@/components/ProjectsPage';
import { getProjectsByCategory } from '@/lib/projects';

export default function ProjectsPageWrapper() {
  const graphicDesignProjects = getProjectsByCategory('graphic-design');
  const productDesignProjects = getProjectsByCategory('product-design');

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Navigation */}
      <Navigation currentPage="projects" />
      
      {/* Projects Page Component */}
      <ProjectsPage 
        graphicDesignProjects={graphicDesignProjects}
        productDesignProjects={productDesignProjects}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
