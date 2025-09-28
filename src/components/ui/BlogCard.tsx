import Image from 'next/image';
import Link from 'next/link';
import { FiCalendar, FiClock, FiExternalLink, FiTag, FiUser } from 'react-icons/fi';
import { BlogPost } from '../../types/blog';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const formattedDate = new Date(post.publishedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const href = post.externalUrl || `/blog/${post.slug}`;
  const isExternal = !!post.externalUrl;

  const CardContent = () => (
    <div className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-200 relative ${
      featured ? 'lg:flex lg:items-center' : ''
    }`}>
      {/* Blog Image */}
      <div className={`relative overflow-hidden ${
        featured ? 'lg:w-1/2 h-64 lg:h-80' : 'h-48'
      }`}>
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110"
          sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-xs font-medium shadow-lg">
            {post.category}
          </span>
        </div>

        {/* Featured Badge */}
        {post.featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              ⭐ Featured
            </span>
          </div>
        )}

        {/* External Link Indicator */}
        {isExternal && (
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
              <FiExternalLink className="h-4 w-4 text-gray-700" />
            </div>
          </div>
        )}
      </div>

      {/* Blog Content */}
      <div className={`p-6 ${featured ? 'lg:w-1/2 lg:p-8' : ''}`}>
        {/* Meta Information */}
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <FiUser className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <FiCalendar className="h-4 w-4" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <FiClock className="h-4 w-4" />
            <span>{post.readingTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className={`font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300 ${
          featured ? 'text-2xl lg:text-3xl' : 'text-xl'
        }`}>
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className={`text-gray-600 mb-4 leading-relaxed ${
          featured ? 'text-base line-clamp-4' : 'text-sm line-clamp-3'
        }`}>
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.slice(0, featured ? 6 : 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-blue-50 hover:text-blue-700 transition-all duration-300"
            >
              <FiTag className="h-3 w-3" />
              {tag}
            </span>
          ))}
          {post.tags.length > (featured ? 6 : 3) && (
            <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-xs font-medium">
              +{post.tags.length - (featured ? 6 : 3)} more
            </span>
          )}
        </div>

        {/* Read More Button */}
        <div className="flex items-center justify-between">
          <div className={`inline-flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all duration-300 ${
            featured ? 'text-base' : 'text-sm'
          }`}>
            <span>Read More</span>
            <FiExternalLink className={`transition-transform duration-300 group-hover:translate-x-1 ${
              featured ? 'h-5 w-5' : 'h-4 w-4'
            }`} />
          </div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
      </div>
    </div>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        aria-label={`Read article: ${post.title}`}
      >
        <CardContent />
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="block"
      aria-label={`Read article: ${post.title}`}
    >
      <CardContent />
    </Link>
  );
}
