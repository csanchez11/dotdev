import React from 'react';
import Overview from './sections/Overview';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

const MainContent = ({ activeSection }) => {
  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return <Overview />;
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Overview />;
    }
  };

  return (
    <main className="flex-1 p-4 lg:p-6 overflow-auto">
      <div className="max-w-7xl mx-auto">
        {renderSection()}
      </div>
    </main>
  );
};

export default MainContent;