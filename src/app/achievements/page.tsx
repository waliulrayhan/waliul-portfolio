import AchievementsSection from '../../components/sections/AchievementsSection';
import PageWrapper from '../../components/common/PageWrapper';

export const metadata = {
  title: 'Achievements - Waliul Rayhan',
  description: 'Discover the achievements, certifications, and recognition earned by Waliul Rayhan throughout his career.',
};

export default function AchievementsPage() {
  return (
    <PageWrapper className="pt-16">
      <AchievementsSection />
    </PageWrapper>
  );
}