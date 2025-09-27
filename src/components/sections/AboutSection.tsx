'use client';

import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Technology',
    location: 'Dhaka, Bangladesh',
    period: '2020 - 2024',
    description: 'Specialized in Software Engineering and Web Development',
  },
  {
    degree: 'Higher Secondary Certificate',
    institution: 'Notre Dame College',
    location: 'Dhaka, Bangladesh', 
    period: '2018 - 2020',
    description: 'Science Group with focus on Mathematics and Physics',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              My Journey
            </h3>
            <div className="prose prose-lg text-gray-600 dark:text-gray-300 max-w-none">
              <p className="mb-4">
                I'm a passionate full-stack developer with over 3 years of experience 
                creating digital solutions that bridge the gap between design and functionality. 
                My journey in tech started with curiosity and has evolved into a deep love 
                for crafting exceptional user experiences.
              </p>
              <p className="mb-4">
                I specialize in modern web technologies including React, Next.js, and Node.js, 
                with a strong focus on writing clean, maintainable code. I believe in the power 
                of collaboration and enjoy working with diverse teams to bring innovative ideas to life.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open source projects, or sharing knowledge with the developer community through 
                blog posts and mentoring.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Core Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 
                  'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker'
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="border-l-4 border-blue-500 pl-6 pb-6 relative"
                >
                  <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-2 top-1"></div>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <FiCalendar className="mr-1 h-4 w-4" />
                        {edu.period}
                      </div>
                      <div className="flex items-center">
                        <FiMapPin className="mr-1 h-4 w-4" />
                        {edu.location}
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}