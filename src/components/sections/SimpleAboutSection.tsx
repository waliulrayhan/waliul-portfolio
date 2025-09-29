'use client';

import { motion } from 'framer-motion';
import { FiArrowRight, FiCode, FiHeart, FiUsers } from 'react-icons/fi';
import Link from 'next/link';
import { personalInfo } from '../../data/about';

export default function SimpleAboutSection() {
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Personal Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-xl mr-4">
                  <FiCode className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Who I Am
                </h3>
              </div>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{personalInfo.bio.intro}</p>
                <p>{personalInfo.bio.expertise}</p>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <Link 
                  href="/about"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                >
                  Learn more about me
                  <FiArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats & Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 text-center">
                <div className="text-2xl font-bold mb-1">{personalInfo.experience}</div>
                <div className="text-sm opacity-90">Experience</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 text-center">
                <div className="text-2xl font-bold mb-1">50+</div>
                <div className="text-sm opacity-90">Projects</div>
              </div>
            </div>

            {/* Core Values Preview */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-xl mr-4">
                  <FiHeart className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  What I Value
                </h3>
              </div>
              
              <div className="space-y-3 mb-6">
                {personalInfo.coreValues.slice(0, 3).map((value, index) => (
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

              <div className="pt-4 border-t border-gray-100">
                <Link 
                  href="/about"
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200"
                >
                  See all values & journey
                  <FiArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              href="/experience"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <FiUsers className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Experience</h3>
              <p className="text-gray-600 text-sm">Explore my career journey and achievements</p>
            </Link>

            <Link 
              href="/projects"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                <FiCode className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Featured Projects</h3>
              <p className="text-gray-600 text-sm">Discover my latest work and innovations</p>
            </Link>

            <Link 
              href="/achievements"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg mx-auto mb-4 group-hover:bg-yellow-200 transition-colors duration-300">
                <FiHeart className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Achievements</h3>
              <p className="text-gray-600 text-sm">View my certifications and recognition</p>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}