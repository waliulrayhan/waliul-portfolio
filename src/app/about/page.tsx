import AboutSection from '../../components/sections/AboutSection';
import PageWrapper from '../../components/common/PageWrapper';

export const metadata = {
  title: 'About - Waliul Rayhan',
  description: 'Learn more about Waliul Rayhan - Full Stack Developer, his background, education, and journey in web development.',
};

export default function AboutPage() {
  return (
    <PageWrapper className="pt-16">
      <AboutSection />
    </PageWrapper>
  );
}