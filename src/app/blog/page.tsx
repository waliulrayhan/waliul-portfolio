import BlogSection from '../../components/sections/BlogSection';

export const metadata = {
  title: 'Blog - Waliul Rayhan',
  description: 'Read the latest articles and insights by Waliul Rayhan on web development, technology trends, and software engineering.',
};

export default function BlogPage() {
  return (
    <div className="pt-16">
      <BlogSection />
    </div>
  );
}