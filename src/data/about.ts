export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  gpa?: string;
  honors?: string[];
  coursework?: string[];
}

export const education: Education[] = [
  {
    id: '1',
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Technology',
    location: 'Dhaka, Bangladesh',
    period: '2020 - 2024',
    description: 'Specialized in Software Engineering and Web Development with a focus on modern programming paradigms and system design.',
    gpa: '3.85/4.0',
    honors: ['Dean\'s List (6 semesters)', 'Outstanding Student in Web Development'],
    coursework: [
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Software Engineering',
      'Web Development',
      'Mobile App Development',
      'Machine Learning Fundamentals'
    ]
  },
  {
    id: '2',
    degree: 'Higher Secondary Certificate (Science)',
    institution: 'Notre Dame College',
    location: 'Dhaka, Bangladesh', 
    period: '2018 - 2020',
    description: 'Science Group with focus on Mathematics, Physics, and Computer Science, building a strong foundation for engineering studies.',
    gpa: '5.0/5.0',
    honors: ['Board Scholarship Recipient', 'Science Olympiad Winner'],
    coursework: [
      'Higher Mathematics',
      'Physics',
      'Chemistry',
      'Computer Science',
      'Statistics'
    ]
  }
];

export const personalInfo = {
  name: 'Waliul Rayhan',
  title: 'Full Stack Developer & UI/UX Enthusiast',
  location: 'Dhaka, Bangladesh',
  experience: '3+ years',
  bio: {
    intro: "I'm a passionate full-stack developer with over 3 years of experience creating digital solutions that bridge the gap between design and functionality. My journey in tech started with curiosity and has evolved into a deep love for crafting exceptional user experiences.",
    expertise: "I specialize in modern web technologies including React, Next.js, and Node.js, with a strong focus on writing clean, maintainable code. I believe in the power of collaboration and enjoy working with diverse teams to bring innovative ideas to life.",
    interests: "When I'm not coding, you can find me exploring new technologies, contributing to open source projects, mentoring aspiring developers, or writing technical blog posts to share knowledge with the community."
  },
  coreValues: [
    'Clean, maintainable code',
    'User-centered design',
    'Continuous learning',
    'Team collaboration',
    'Open source contribution'
  ]
};