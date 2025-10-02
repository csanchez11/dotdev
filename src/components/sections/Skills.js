import React from 'react';

const SkillCard = ({ category, skills, color }) => (
  <div className="bg-white dark:bg-dark-card rounded-lg p-6 border border-gray-200 dark:border-dark-border">
    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 ${color}`}>
      {category}
    </div>
    <div className="space-y-3">
      {skills.map((skill, index) => (
        <div key={index} className="space-y-1">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-900 dark:text-white">{skill.name}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-1000 ${skill.color}`}
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const TechStack = ({ title, technologies }) => (
  <div className="bg-white dark:bg-dark-card rounded-lg p-6 border border-gray-200 dark:border-dark-border">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend Development',
      color: 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300',
      skills: [
        { name: 'React', level: 95, color: 'bg-gradient-to-r from-blue-500 to-blue-600' },
        { name: 'TypeScript', level: 90, color: 'bg-gradient-to-r from-blue-500 to-blue-600' },
        { name: 'Tailwind CSS', level: 88, color: 'bg-gradient-to-r from-blue-500 to-blue-600' },
        { name: 'Semantic HTML', level: 75, color: 'bg-gradient-to-r from-blue-500 to-blue-600' },
      ]
    },
    {
      category: 'Backend Development',
      color: 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300',
      skills: [
        { name: 'Node.js', level: 92, color: 'bg-gradient-to-r from-green-500 to-green-600' },
        { name: 'Express', level: 85, color: 'bg-gradient-to-r from-green-500 to-green-600' },
        { name: 'PostgreSQL', level: 88, color: 'bg-gradient-to-r from-green-500 to-green-600' },
        { name: 'MongoDB', level: 80, color: 'bg-gradient-to-r from-green-500 to-green-600' },
      ]
    },
    {
      category: 'DevOps & Cloud',
      color: 'bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300',
      skills: [
        { name: 'AWS', level: 87, color: 'bg-gradient-to-r from-purple-500 to-purple-600' },
        { name: 'Docker', level: 82, color: 'bg-gradient-to-r from-purple-500 to-purple-600' },
        { name: 'CI/CD Pipelines', level: 85, color: 'bg-gradient-to-r from-purple-500 to-purple-600' },
        { name: 'Jenkins', level: 78, color: 'bg-gradient-to-r from-purple-500 to-purple-600' },
      ]
    },
    {
      category: 'Mobile & Other',
      color: 'bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300',
      skills: [
        { name: 'React Native', level: 83, color: 'bg-gradient-to-r from-orange-500 to-orange-600' },
        { name: 'Git', level: 80, color: 'bg-gradient-to-r from-orange-500 to-orange-600' },
        { name: 'NGINX', level: 75, color: 'bg-gradient-to-r from-orange-500 to-orange-600' },
        { name: 'Webpack', level: 70, color: 'bg-gradient-to-r from-orange-500 to-orange-600' },
      ]
    }
  ];

  const techStacks = [
    {
      title: 'Languages',
      technologies: ['JavaScript', 'TypeScript', 'SQL']
    },
    {
      title: 'Frameworks & Libraries',
      technologies: ['React', 'Next.js', 'Express.js', 'FastAPI', 'Tailwind CSS']
    },
    {
      title: 'Databases & Storage',
      technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'S3', 'Firebase']
    },
    {
      title: 'Tools & Platforms',
      technologies: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'Postman']
    }
  ];

  const certifications = [
    { name: 'React Professional Developer', date: '2022', status: 'Active' },
    { name: 'Hack Reactor Software Engineering Immersive', date: '2020', status: 'Active' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-dark-card rounded-lg p-6 border border-gray-200 dark:border-dark-border">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Technical Skills</h2>
        <p className="text-gray-600 dark:text-gray-400">
          A comprehensive overview of my technical expertise and proficiency levels
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <SkillCard key={index} {...category} />
        ))}
      </div>

      {/* Technology Stack */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {techStacks.map((stack, index) => (
          <TechStack key={index} {...stack} />
        ))}
      </div>

      {/* Certifications & Learning */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-dark-card rounded-lg p-6 border border-gray-200 dark:border-dark-border">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Certifications</h3>
          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{cert.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{cert.date}</p>
                </div>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-xs font-medium rounded-full">
                  {cert.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-dark-card rounded-lg p-6 border border-gray-200 dark:border-dark-border">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Currently Learning</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 dark:text-gray-300">Agentic AI</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 dark:text-gray-300">Machine Learning </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 dark:text-gray-300">Blockchain Development</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 dark:text-gray-300">Swift App Development</span>
            </div>
          </div>
        </div>
      </div>

      {/* Skill Metrics */}
      <div className="bg-white dark:bg-dark-card rounded-lg p-6 border border-gray-200 dark:border-dark-border">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Skills Performance Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">99%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Code Quality Score</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">10/10</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Team Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">20+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">2.1x</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Productivity Increase</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;