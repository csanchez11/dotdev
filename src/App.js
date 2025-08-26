import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-dark-bg">
        <div className="flex h-screen">
          <Sidebar 
            activeSection={activeSection} 
            setActiveSection={setActiveSection}
            isMobileSidebarOpen={isMobileSidebarOpen}
            setIsMobileSidebarOpen={setIsMobileSidebarOpen}
          />
          <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
            <Header 
              isMobileSidebarOpen={isMobileSidebarOpen}
              setIsMobileSidebarOpen={setIsMobileSidebarOpen}
            />
            <MainContent activeSection={activeSection} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
