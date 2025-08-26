import React, { useState } from 'react';

const ProjectCard = ({ project, onSelect }) => (
  <div 
    className="bg-white dark:bg-dark-card rounded-lg p-6 border border-gray-200 dark:border-dark-border hover:shadow-lg dark:hover:shadow-gray-900/20 transition-all cursor-pointer"
    onClick={() => onSelect(project)}
  >
    <div className="flex items-start justify-between mb-4">
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{project.name}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{project.description}</p>
      </div>
      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
        project.status === 'Live' 
          ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300'
          : project.status === 'In Progress'
          ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300'
          : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
      }`}>
        {project.status}
      </div>
    </div>

    <div className="flex flex-wrap gap-2 mb-4">
      {project.technologies.slice(0, 3).map((tech, index) => (
        <span 
          key={index}
          className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded text-xs font-medium"
        >
          {tech}
        </span>
      ))}
      {project.technologies.length > 3 && (
        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs">
          +{project.technologies.length - 3} more
        </span>
      )}
    </div>

    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
        <span>⭐ {project.rating}</span>
        <span>📈 {project.growth}</span>
      </div>
      <div className="flex items-center space-x-2">
        <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
);

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-dark-card rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 dark:border-dark-border flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">{project.name}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Overview</h3>
            <p className="text-gray-600 dark:text-gray-400">{project.fullDescription}</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features</h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Project Metrics</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Duration:</span>
                  <span className="text-gray-900 dark:text-white">{project.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Team Size:</span>
                  <span className="text-gray-900 dark:text-white">{project.teamSize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Role:</span>
                  <span className="text-gray-900 dark:text-white">{project.role}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Performance</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Users:</span>
                  <span className="text-gray-900 dark:text-white">{project.users}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Growth:</span>
                  <span className="text-green-600 dark:text-green-400">{project.growth}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Rating:</span>
                  <span className="text-yellow-600 dark:text-yellow-400">⭐ {project.rating}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      name: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory management',
      fullDescription: 'A comprehensive e-commerce platform built for a mid-size retailer, featuring real-time inventory management, payment processing, and analytics dashboard. The platform handles 10,000+ daily transactions and supports multiple payment gateways.',
      status: 'Live',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Stripe', 'Redis', 'Docker'],
      rating: '4.8',
      growth: '+156%',
      features: [
        'Real-time inventory tracking and management',
        'Multiple payment gateway integration',
        'Advanced analytics and reporting dashboard',
        'Mobile-responsive design with PWA capabilities',
        'Automated order processing and notifications',
        'Multi-vendor marketplace support'
      ],
      duration: '8 months',
      teamSize: '5 developers',
      role: 'Lead Developer',
      users: '50K+',
      category: 'Web Application'
    },
    {
      name: 'Trading Dashboard',
      description: 'Real-time cryptocurrency trading platform with advanced analytics',
      fullDescription: 'A sophisticated trading dashboard for cryptocurrency markets featuring real-time data streams, technical analysis tools, and automated trading capabilities. Built to handle high-frequency trading with sub-millisecond response times.',
      status: 'Live',
      technologies: ['React', 'WebSocket', 'Python', 'FastAPI', 'MongoDB', 'Chart.js'],
      rating: '4.9',
      growth: '+203%',
      features: [
        'Real-time price feeds and market data',
        'Advanced charting with technical indicators',
        'Automated trading bot integration',
        'Portfolio management and risk analysis',
        'Multi-exchange connectivity',
        'Mobile trading application'
      ],
      duration: '12 months',
      teamSize: '8 developers',
      role: 'Senior Developer',
      users: '25K+',
      category: 'Fintech'
    },
    {
      name: 'Healthcare Management System',
      description: 'Comprehensive patient management system for healthcare providers',
      fullDescription: 'A complete healthcare management solution including patient records, appointment scheduling, billing, and telemedicine capabilities. HIPAA compliant with advanced security features.',
      status: 'Live',
      technologies: ['Vue.js', 'Django', 'PostgreSQL', 'AWS', 'WebRTC', 'Terraform'],
      rating: '4.7',
      growth: '+89%',
      features: [
        'Electronic health records (EHR) system',
        'Appointment scheduling and management',
        'Telemedicine video consultation platform',
        'Billing and insurance claim processing',
        'Prescription management system',
        'HIPAA compliant security measures'
      ],
      duration: '14 months',
      teamSize: '12 developers',
      role: 'Technical Lead',
      users: '15K+',
      category: 'Healthcare'
    },
    {
      name: 'Social Learning Platform',
      description: 'Interactive learning platform with gamification and social features',
      fullDescription: 'An innovative e-learning platform that combines traditional online learning with social networking and gamification elements. Features include peer-to-peer learning, progress tracking, and achievement systems.',
      status: 'In Progress',
      technologies: ['Next.js', 'GraphQL', 'Prisma', 'PostgreSQL', 'Vercel', 'Stripe'],
      rating: '4.6',
      growth: '+134%',
      features: [
        'Interactive course creation tools',
        'Peer-to-peer learning communities',
        'Gamification and achievement system',
        'Real-time collaboration features',
        'AI-powered learning recommendations',
        'Mobile learning applications'
      ],
      duration: '10 months',
      teamSize: '6 developers',
      role: 'Full-stack Developer',
      users: '8K+',
      category: 'Education'
    },
    {
      name: 'IoT Monitoring Dashboard',
      description: 'Real-time monitoring system for industrial IoT devices',
      fullDescription: 'A comprehensive IoT monitoring solution for industrial equipment, featuring real-time sensor data visualization, predictive maintenance alerts, and automated reporting capabilities.',
      status: 'Completed',
      technologies: ['Angular', 'Node.js', 'InfluxDB', 'MQTT', 'Docker', 'Kubernetes'],
      rating: '4.5',
      growth: '+67%',
      features: [
        'Real-time sensor data visualization',
        'Predictive maintenance algorithms',
        'Automated alert and notification system',
        'Historical data analysis and reporting',
        'Device management and configuration',
        'Scalable microservices architecture'
      ],
      duration: '6 months',
      teamSize: '4 developers',
      role: 'Backend Developer',
      users: '2K+',
      category: 'IoT'
    },
    {
      name: 'Content Management CMS',
      description: 'Headless CMS with advanced content editing and publishing features',
      fullDescription: 'A modern headless CMS built for content creators and marketers, featuring drag-and-drop editing, multi-language support, and advanced SEO optimization tools.',
      status: 'Live',
      technologies: ['React', 'Strapi', 'MongoDB', 'AWS S3', 'CloudFront', 'Algolia'],
      rating: '4.4',
      growth: '+112%',
      features: [
        'Drag-and-drop content editor',
        'Multi-language and localization support',
        'Advanced SEO optimization tools',
        'Media asset management system',
        'Role-based access control',
        'API-first architecture'
      ],
      duration: '5 months',
      teamSize: '3 developers',
      role: 'Lead Developer',
      users: '12K+',
      category: 'CMS'
    }
  ];

  const categories = ['All', 'Web Application', 'Fintech', 'Healthcare', 'Education', 'IoT', 'CMS'];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-dark-card rounded-lg p-6 border border-gray-200 dark:border-dark-border">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Project Portfolio</h2>
            <p className="text-gray-600 dark:text-gray-400">
              A showcase of my recent work and achievements
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  filter === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-dark-card rounded-lg p-6 border border-gray-200 dark:border-dark-border text-center">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{projects.length}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Total Projects</div>
        </div>
        <div className="bg-white dark:bg-dark-card rounded-lg p-6 border border-gray-200 dark:border-dark-border text-center">
          <div className="text-3xl font-bold text-green-600 dark:text-green-400">
            {projects.filter(p => p.status === 'Live').length}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Live Projects</div>
        </div>
        <div className="bg-white dark:bg-dark-card rounded-lg p-6 border border-gray-200 dark:border-dark-border text-center">
          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">162K+</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Total Users</div>
        </div>
        <div className="bg-white dark:bg-dark-card rounded-lg p-6 border border-gray-200 dark:border-dark-border text-center">
          <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">4.7</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Avg Rating</div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project} 
            onSelect={setSelectedProject}
          />
        ))}
      </div>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
};

export default Projects;