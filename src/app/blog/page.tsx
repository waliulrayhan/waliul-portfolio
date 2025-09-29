import BlogSection from '../../components/sections/BlogSection';
import PageWrapper from '../../components/common/PageWrapper';

export const metadata = {
  title: 'Blog - Waliul Rayhan',
  description: 'Read the latest articles and insights by Waliul Rayhan on web development, technology trends, and software engineering.',
};

export default function BlogPage() {
  return (
    <PageWrapper className="pt-16">
      <BlogSection />
    </PageWrapper>
  );
}