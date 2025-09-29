import ProjectsSection from '../../components/sections/ProjectsSection';
import PageWrapper from '../../components/common/PageWrapper';

export const metadata = {
  title: 'Projects - Waliul Rayhan',
  description: 'Explore the portfolio of projects by Waliul Rayhan - showcasing web development skills and innovative solutions.',
};

export default function ProjectsPage() {
  return (
    <PageWrapper className="pt-16">
      <ProjectsSection />
    </PageWrapper>
  );
}