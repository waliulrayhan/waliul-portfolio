'use client';

import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiAward, FiBookOpen, FiUser, FiHeart } from 'react-icons/fi';
import { education, personalInfo } from '../../data/about';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Passionate developer with a love for creating innovative solutions and meaningful user experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Personal Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Bio Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-xl mr-4">
                  <FiUser className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  My Journey
                </h3>
              </div>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{personalInfo.bio.intro}</p>
                <p>{personalInfo.bio.expertise}</p>
                <p>{personalInfo.bio.interests}</p>
              </div>
            </div>

            {/* Core Values */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-xl mr-4">
                  <FiHeart className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  What I Value
                </h3>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                {personalInfo.coreValues.map((value, index) => (
                  <motion.div
                    key={value}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">
                      {value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 text-center">
                <div className="text-2xl font-bold mb-1">{personalInfo.experience}</div>
                <div className="text-sm opacity-90">Experience</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 text-center">
                <div className="text-2xl font-bold mb-1">50+</div>
                <div className="text-sm opacity-90">Projects</div>
              </div>
            </div>
          </motion.div>

          {/* Education Timeline Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-green-100 rounded-xl mr-4">
                  <FiBookOpen className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Education
                </h3>
              </div>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-green-400"></div>
                
                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <motion.div
                      key={edu.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="relative pl-16"
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-4 w-4 h-4 bg-white border-4 border-blue-500 rounded-full shadow-lg"></div>
                      
                      {/* Education Card */}
                      <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                        <div className="mb-4">
                          <h4 className="text-lg font-bold text-gray-900 mb-2">
                            {edu.degree}
                          </h4>
                          <p className="text-blue-600 font-semibold mb-2">
                            {edu.institution}
                          </p>
                          
                          {/* Meta Info */}
                          <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-600">
                            <div className="flex items-center">
                              <FiCalendar className="mr-2 h-4 w-4" />
                              {edu.period}
                            </div>
                            <div className="flex items-center">
                              <FiMapPin className="mr-2 h-4 w-4" />
                              {edu.location}
                            </div>
                            {edu.gpa && (
                              <div className="flex items-center">
                                <FiAward className="mr-2 h-4 w-4" />
                                GPA: {edu.gpa}
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <p className="text-gray-700 mb-4">
                          {edu.description}
                        </p>

                        {/* Honors */}
                        {edu.honors && edu.honors.length > 0 && (
                          <div className="mb-4">
                            <h5 className="text-sm font-semibold text-gray-900 mb-2">
                              Honors & Awards:
                            </h5>
                            <div className="space-y-1">
                              {edu.honors.map((honor, honorIndex) => (
                                <div key={honorIndex} className="flex items-center text-sm text-gray-600">
                                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                                  {honor}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Key Coursework */}
                        {edu.coursework && edu.coursework.length > 0 && (
                          <div>
                            <h5 className="text-sm font-semibold text-gray-900 mb-2">
                              Key Coursework:
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {edu.coursework.slice(0, 4).map((course, courseIndex) => (
                                <span
                                  key={courseIndex}
                                  className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-medium"
                                >
                                  {course}
                                </span>
                              ))}
                              {edu.coursework.length > 4 && (
                                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium">
                                  +{edu.coursework.length - 4} more
                                </span>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}