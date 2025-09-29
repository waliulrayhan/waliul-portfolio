'use client';

import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiTrendingUp, FiCode } from 'react-icons/fi';

interface Experience {
  id: string;
  position: string;
  company: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance' | 'Internship';
  description: string;
  achievements: string[];
  technologies: string[];
  website?: string;
}

const experiences: Experience[] = [
  {
    id: '1',
    position: 'Senior Full Stack Developer',
    company: 'TechCorp Solutions',
    location: 'Dhaka, Bangladesh',
    period: '2023 - Present',
    type: 'Full-time',
    description: 'Leading development of enterprise web applications using modern technologies. Responsible for architecture decisions, code reviews, and mentoring junior developers.',
    achievements: [
      'Led development of a customer portal that increased user engagement by 40%',
      'Implemented automated testing pipelines reducing deployment time by 60%',
      'Mentored 5 junior developers and conducted technical interviews',
      'Architected microservices infrastructure serving 100K+ daily users'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'TypeScript']
  },
  {
    id: '2',
    position: 'Full Stack Developer',
    company: 'Digital Innovations Ltd',
    location: 'Dhaka, Bangladesh',
    period: '2022 - 2023',
    type: 'Full-time',
    description: 'Developed and maintained multiple client projects including e-commerce platforms, business websites, and web applications.',
    achievements: [
      'Built 15+ responsive websites with 99.9% uptime',
      'Optimized application performance improving load times by 50%',
      'Implemented secure payment gateways for e-commerce clients',
      'Collaborated with design team to create pixel-perfect UI implementations'
    ],
    technologies: ['React', 'Vue.js', 'PHP', 'Laravel', 'MySQL', 'MongoDB', 'JavaScript']
  },
  {
    id: '3',
    position: 'Frontend Developer',
    company: 'StartupXYZ',
    location: 'Remote',
    period: '2021 - 2022',
    type: 'Contract',
    description: 'Specialized in creating modern, responsive user interfaces for startup clients across various industries.',
    achievements: [
      'Delivered 20+ pixel-perfect landing pages',
      'Increased client conversion rates by average of 25%',
      'Implemented responsive designs supporting all device types',
      'Created reusable component libraries for faster development'
    ],
    technologies: ['React', 'Tailwind CSS', 'Figma', 'Git', 'Vercel', 'HTML5', 'CSS3']
  },
  {
    id: '4',
    position: 'Web Development Intern',
    company: 'WebSolutions Pro',
    location: 'Dhaka, Bangladesh',
    period: '2021',
    type: 'Internship',
    description: 'First professional experience in web development, working on client projects and learning industry best practices.',
    achievements: [
      'Contributed to 5 client projects during internship',
      'Learned modern development workflows and version control',
      'Assisted in bug fixes and feature implementations',
      'Gained experience in client communication and project management'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'WordPress']
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-white">
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
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My professional journey in web development, showcasing growth, achievements, and the technologies I&apos;ve mastered along the way.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-green-400 transform md:-translate-x-0.5"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full shadow-lg z-10 transform md:-translate-x-2"></div>
                
                {/* Experience Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-12 md:ml-0`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                    
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                          exp.type === 'Full-time' ? 'bg-green-100 text-green-700' :
                          exp.type === 'Contract' ? 'bg-blue-100 text-blue-700' :
                          exp.type === 'Internship' ? 'bg-orange-100 text-orange-700' :
                          'bg-purple-100 text-purple-700'
                        }`}>
                          {exp.type}
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <FiCalendar className="mr-1 h-4 w-4" />
                          {exp.period}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {exp.position}
                      </h3>
                      
                      <div className="flex items-center text-blue-600 font-semibold mb-2">
                        <FiBriefcase className="mr-2 h-4 w-4" />
                        {exp.company}
                      </div>
                      
                      <div className="flex items-center text-gray-600 text-sm">
                        <FiMapPin className="mr-2 h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                        <FiTrendingUp className="mr-2 h-4 w-4 text-green-500" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                        <FiCode className="mr-2 h-4 w-4 text-blue-500" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Professional Summary
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                <div className="text-gray-600">Technologies</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">5+</div>
                <div className="text-gray-600">Team Members Mentored</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}