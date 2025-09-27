'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiBookOpen, FiFilter, FiGrid, FiList, FiRss } from 'react-icons/fi';
import BlogCard from '../ui/BlogCard';
import { 
  blogPosts, 
  getUniqueCategories, 
  getUniqueTags, 
  filterBlogPosts, 
  getFeaturedPosts,
  getRecentPosts 
} from '../../data/blog';
import { BlogPost } from '../../types/blog';

export default function BlogSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeTag, setActiveTag] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showAllPosts, setShowAllPosts] = useState(false);
  
  const categories = getUniqueCategories();
  const tags = getUniqueTags();
  
  const filteredPosts = filterBlogPosts(blogPosts, activeCategory, activeTag);
  const featuredPosts = getFeaturedPosts(3);
  const recentPosts = getRecentPosts(6);
  
  const displayedPosts = showAllPosts ? filteredPosts : recentPosts;

  const resetFilters = () => {
    setActiveCategory('all');
    setActiveTag('all');
  };

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Blog Posts
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Sharing knowledge, insights, and experiences from my journey in web development, 
            technology trends, and software engineering best practices.
          </p>
        </motion.div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && !showAllPosts && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 w-3 h-3 rounded-full mr-3"></span>
                Featured Articles
              </h3>
            </div>
            
            <div className="space-y-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <BlogCard post={post} featured={true} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Filter Controls */}
        {showAllPosts && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Filter Header */}
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <FiFilter className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Filter Articles
                  </h3>
                </div>

                <div className="flex-1 space-y-4">
                  {/* Category Filter */}
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                      Category
                    </label>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setActiveCategory('all')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          activeCategory === 'all'
                            ? 'bg-blue-500 text-white shadow-lg scale-105'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600'
                        }`}
                      >
                        All ({blogPosts.length})
                      </button>
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setActiveCategory(category.name)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                            activeCategory === category.name
                              ? 'bg-blue-500 text-white shadow-lg scale-105'
                              : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600'
                          }`}
                        >
                          {category.name} ({category.count})
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tag Filter */}
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                      Tags
                    </label>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setActiveTag('all')}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                          activeTag === 'all'
                            ? 'bg-purple-500 text-white shadow-lg scale-105'
                            : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600'
                        }`}
                      >
                        All Tags
                      </button>
                      {tags.slice(0, 10).map((tag) => (
                        <button
                          key={tag.id}
                          onClick={() => setActiveTag(tag.name)}
                          className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                            activeTag === tag.name
                              ? 'bg-purple-500 text-white shadow-lg scale-105'
                              : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600'
                          }`}
                        >
                          {tag.name} ({tag.count})
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* View Controls */}
                <div className="flex items-center gap-2">
                  {(activeCategory !== 'all' || activeTag !== 'all') && (
                    <button
                      onClick={resetFilters}
                      className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-300"
                    >
                      Clear Filters
                    </button>
                  )}
                  <div className="flex border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${
                        viewMode === 'grid'
                          ? 'bg-blue-500 text-white'
                          : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600'
                      } transition-colors duration-300`}
                      title="Grid view"
                    >
                      <FiGrid className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${
                        viewMode === 'list'
                          ? 'bg-blue-500 text-white'
                          : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600'
                      } transition-colors duration-300`}
                      title="List view"
                    >
                      <FiList className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Results Count */}
        {showAllPosts && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Showing {filteredPosts.length} of {blogPosts.length} articles
              {activeCategory !== 'all' && ` in ${activeCategory}`}
              {activeTag !== 'all' && ` tagged with ${activeTag}`}
            </p>
          </motion.div>
        )}

        {/* Recent Posts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          {!showAllPosts && (
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 w-3 h-3 rounded-full mr-3"></span>
                Recent Articles
              </h3>
            </div>
          )}
          
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1 lg:grid-cols-2'
          }`}>
            <AnimatePresence>
              {displayedPosts.map((post: BlogPost, index: number) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <BlogCard post={post} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* No Results */}
        {showAllPosts && filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 dark:text-gray-500 text-6xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No articles found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Try adjusting your filters to see more articles.
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Reset Filters
            </button>
          </motion.div>
        )}

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          {!showAllPosts ? (
            <button
              onClick={() => setShowAllPosts(true)}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <FiBookOpen className="h-5 w-5" />
              View All Articles ({blogPosts.length})
            </button>
          ) : (
            <button
              onClick={() => setShowAllPosts(false)}
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
            >
              <FiBookOpen className="h-5 w-5" />
              Show Recent Only
            </button>
          )}
          
          <div className="flex justify-center">
            <a
              href="/blog/rss.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-300"
            >
              <FiRss className="h-4 w-4" />
              RSS Feed
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}