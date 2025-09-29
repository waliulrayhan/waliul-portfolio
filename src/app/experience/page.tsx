import ExperienceSection from '../../components/sections/ExperienceSection';
import PageWrapper from '../../components/common/PageWrapper';

export const metadata = {
  title: 'Experience - Waliul Rayhan',
  description: 'Explore the professional experience and career journey of Waliul Rayhan - Full Stack Developer.',
};

export default function ExperiencePage() {
  return (
    <PageWrapper className="pt-16">
      <ExperienceSection />
    </PageWrapper>
  );
}