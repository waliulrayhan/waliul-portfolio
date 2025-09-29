import HeroSection from '../components/sections/HeroSection';
import SimpleAboutSection from '../components/sections/SimpleAboutSection';
import LatestBlogSection from '../components/sections/LatestBlogSection';
import ContactSection from '../components/sections/ContactSection';
import PageWrapper from '../components/common/PageWrapper';

export const metadata = {
  title: 'Waliul Rayhan - Full Stack Developer & UI/UX Enthusiast',
  description: 'Welcome to my portfolio! I\'m a passionate Full Stack Developer creating innovative digital experiences with React, Next.js, and modern technologies.',
};

export default function Home() {
  return (
    <PageWrapper className="overflow-x-hidden">
      <HeroSection />
      <SimpleAboutSection />
      <LatestBlogSection />
      <ContactSection />
    </PageWrapper>
  );
}
