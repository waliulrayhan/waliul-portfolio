'use client';

import { motion } from 'framer-motion';
import { FiAward, FiStar, FiTarget, FiUsers, FiBookOpen } from 'react-icons/fi';
import { GiTrophy } from 'react-icons/gi';

interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  category: 'Academic' | 'Professional' | 'Community' | 'Certification' | 'Competition';
  description: string;
  icon: string;
  link?: string;
}

const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Outstanding Student in Web Development',
    organization: 'University of Technology',
    date: '2024',
    category: 'Academic',
    description: 'Recognized for exceptional performance in web development courses and final project.',
    icon: 'academic'
  },
  {
    id: '2',
    title: 'Best Innovation Award',
    organization: 'National Hackathon 2023',
    date: '2023',
    category: 'Competition',
    description: 'Won first place for developing an innovative solution for sustainable energy management.',
    icon: 'trophy'
  },
  {
    id: '3',
    title: 'AWS Certified Developer Associate',
    organization: 'Amazon Web Services',
    date: '2023',
    category: 'Certification',
    description: 'Certified in developing and maintaining applications on the AWS platform.',
    icon: 'certification',
    link: 'https://aws.amazon.com/certification/'
  },
  {
    id: '4',
    title: 'Open Source Contributor of the Month',
    organization: 'GitHub',
    date: '2023',
    category: 'Community',
    description: 'Recognized for significant contributions to open source projects and community engagement.',
    icon: 'community'
  },
  {
    id: '5',
    title: 'React Developer Certification',
    organization: 'Meta (Facebook)',
    date: '2022',
    category: 'Certification',
    description: 'Completed comprehensive React development course and certification program.',
    icon: 'certification',
    link: 'https://developers.facebook.com/developercircles/'
  },
  {
    id: '6',
    title: 'Dean&apos;s List Recognition',
    organization: 'University of Technology',
    date: '2020-2024',
    category: 'Academic',
    description: 'Maintained high academic performance for 6 consecutive semesters.',
    icon: 'academic'
  },
  {
    id: '7',
    title: 'Employee of the Quarter',
    organization: 'TechCorp Solutions',
    date: '2023',
    category: 'Professional',
    description: 'Recognized for outstanding performance and leadership in project delivery.',
    icon: 'professional'
  },
  {
    id: '8',
    title: 'Science Olympiad Winner',
    organization: 'National Science Foundation',
    date: '2019',
    category: 'Competition',
    description: 'First place in national level science olympiad competition.',
    icon: 'trophy'
  }
];

const getIcon = (iconType: string) => {
  switch (iconType) {
    case 'academic':
      return <FiBookOpen className="h-6 w-6" />;
    case 'trophy':
      return <GiTrophy className="h-6 w-6" />;
    case 'certification':
      return <FiAward className="h-6 w-6" />;
    case 'community':
      return <FiUsers className="h-6 w-6" />;
    case 'professional':
      return <FiTarget className="h-6 w-6" />;
    default:
      return <FiStar className="h-6 w-6" />;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Academic':
      return 'from-blue-500 to-blue-600';
    case 'Professional':
      return 'from-green-500 to-green-600';
    case 'Community':
      return 'from-purple-500 to-purple-600';
    case 'Certification':
      return 'from-orange-500 to-orange-600';
    case 'Competition':
      return 'from-red-500 to-red-600';
    default:
      return 'from-gray-500 to-gray-600';
  }
};

const getCategoryBgColor = (category: string) => {
  switch (category) {
    case 'Academic':
      return 'bg-blue-100 text-blue-700 border-blue-200';
    case 'Professional':
      return 'bg-green-100 text-green-700 border-green-200';
    case 'Community':
      return 'bg-purple-100 text-purple-700 border-purple-200';
    case 'Certification':
      return 'bg-orange-100 text-orange-700 border-orange-200';
    case 'Competition':
      return 'bg-red-100 text-red-700 border-red-200';
    default:
      return 'bg-gray-100 text-gray-700 border-gray-200';
  }
};

export default function AchievementsSection() {
  const categories = ['All', ...Array.from(new Set(achievements.map(a => a.category)))];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredAchievements = selectedCategory === 'All' 
    ? achievements 
    : achievements.filter(a => a.category === selectedCategory);

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Achievements & Recognition
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A collection of my achievements, certifications, and recognition received throughout my academic and professional journey.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
            >
              {/* Achievement Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${getCategoryColor(achievement.category)} text-white`}>
                  {getIcon(achievement.icon)}
                </div>
                <div className="text-right">
                  <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium border ${getCategoryBgColor(achievement.category)}`}>
                    {achievement.category}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {achievement.date}
                  </div>
                </div>
              </div>

              {/* Achievement Content */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {achievement.title}
                </h3>
                
                <p className="text-blue-600 font-semibold mb-3">
                  {achievement.organization}
                </p>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {achievement.description}
                </p>

                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200"
                  >
                    View Certificate
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Achievement Summary
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {categories.slice(1).map((category) => {
                const count = achievements.filter(a => a.category === category).length;
                return (
                  <div key={category} className="text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-1">{count}</div>
                    <div className="text-sm text-gray-600">{category}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Let&apos;s Build Something Great Together
            </h3>
            <p className="text-gray-600 mb-6">
              Interested in working with me? Let&apos;s discuss your next project.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                Get In Touch
              </a>
              <a
                href="/projects"
                className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200"
              >
                View Projects
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// React import for useState
import React from 'react';