import React from 'react';

const StatCard = ({ label, value }) => (
  <div className="text-center">
    <div className="text-2xl font-bold text-gray-900 dark:text-white">{value}</div>
    <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
  </div>
);

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Daily Users', value: '5.9MM+' },
    { label: 'Technologies', value: '20+' },
    { label: 'Clients Satisfied', value: '30+' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-dark-card rounded-lg p-6 border border-gray-200 dark:border-dark-border">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
        <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              {/* <span className="text-4xl font-bold text-white">CS</span> */}
              <img src='/FramedPortrait.png' alt="Chris Sanchez"></img>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Chris Sanchez</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Web Developer & UI/UX Enthusiast
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a web developer who believes great code is only half the story. The other half? Creating interfaces that feel intuitive, look stunning, and welcome every user—regardless of how they navigate the web.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white dark:bg-dark-card rounded-lg p-6 border border-gray-200 dark:border-dark-border">
            <StatCard {...stat} />
          </div>
        ))}
      </div>

      {/* Experience Timeline */}
      <div className="bg-white dark:bg-dark-card rounded-lg p-6 border border-gray-200 dark:border-dark-border">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Professional Journey</h3>
        <div className="space-y-6">
          <div className="flex space-x-4">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="w-0.5 h-full bg-gray-300 dark:bg-gray-600 mt-2"></div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h4 className="font-semibold text-gray-900 dark:text-white">Software Engineer</h4>
                <span className="text-sm text-gray-500 dark:text-gray-400">2020 - Present</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">JPMorgan Chase & Co</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                - Constructed a versatile component library deployed across 277 different
                JPMorgan Chase applications, supporting diverse use cases including
                Next.js implementations, embedded iFrames, and standalone platforms while
                maintaining WCAG guidelines
                <br></br>
                - Orchestrated the deconstruction of a monolithic application to a
                microfrontend architecture using React and Typescript, significantly
                improving scalability, deployment flexibility, and performance
                <br></br>
                - Developed and deployed product features in highly-sensitive applications
                handling 175M+ monthly user sessions, optimizing performance and
                cross-browser compatibility, which contributed to increased user
                retention and engagement
                <br></br>
                Enabled seamless integration between Amazon Prime Credit Cards and Chase
                Online accounts, enhancing user experience and transaction efficiency
                through secure, API-driven communication
              </p>
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <div className="w-0.5 h-full bg-gray-300 dark:bg-gray-600 mt-2"></div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h4 className="font-semibold text-gray-900 dark:text-white">Full-Stack Developer</h4>
                <span className="text-sm text-gray-500 dark:text-gray-400">2020 - 2022</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">StartupXYZ</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Built MVP products from scratch, worked with product teams to define technical requirements,
                and implemented CI/CD pipelines.
              </p>
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
              <div className="w-0.5 h-full bg-gray-300 dark:bg-gray-600 mt-2"></div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h4 className="font-semibold text-gray-900 dark:text-white">Junior Developer</h4>
                <span className="text-sm text-gray-500 dark:text-gray-400">2019 - 2020</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">WebDev Agency</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Started my professional journey building responsive websites and learning modern development practices.
                Focused on frontend technologies and user experience design.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values & Approach */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-dark-card rounded-lg p-6 border border-gray-200 dark:border-dark-border">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">My Approach</h3>
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <span className="text-gray-700 dark:text-gray-300 text-sm">Clean, maintainable code architecture</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <span className="text-gray-700 dark:text-gray-300 text-sm">User-centered design thinking</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <span className="text-gray-700 dark:text-gray-300 text-sm">Agile development methodologies</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
              <span className="text-gray-700 dark:text-gray-300 text-sm">Continuous learning and improvement</span>
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-dark-card rounded-lg p-6 border border-gray-200 dark:border-dark-border">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Core Values</h3>
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
              <span className="text-gray-700 dark:text-gray-300 text-sm">Quality over quantity</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
              <span className="text-gray-700 dark:text-gray-300 text-sm">Do what is right, not what is easy</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
              <span className="text-gray-700 dark:text-gray-300 text-sm">Innovation through experimentation</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
              <span className="text-gray-700 dark:text-gray-300 text-sm">Under promise, over deliver</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;