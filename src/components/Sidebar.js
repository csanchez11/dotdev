import React, { useState } from 'react';

const Sidebar = ({ activeSection, setActiveSection, isMobileSidebarOpen, setIsMobileSidebarOpen }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'skills', label: 'Skills', icon: '🚀' },
    { id: 'projects', label: 'Projects', icon: '💼' },
    { id: 'contact', label: 'Contact', icon: '📧' },
  ];

  const handleMenuClick = (sectionId) => {
    setActiveSection(sectionId);
    // Close mobile sidebar when menu item is clicked
    if (setIsMobileSidebarOpen) {
      setIsMobileSidebarOpen(false);
    }
  };

  return (
    <>
      {/* Mobile sidebar backdrop */}
      {isMobileSidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      <aside className={`fixed lg:static inset-y-0 left-0 z-50 ${isCollapsed ? 'w-18' : 'w-64'}
        bg-white dark:bg-dark-card border-r border-gray-200 dark:border-dark-border
        transform transition-all duration-300 ease-in-out lg:translate-x-0 ${
          isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}>

        <div className="flex flex-col h-full">
          {/* Collapse button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <svg className={`w-4 h-4 transition-transform ${isCollapsed ? 'rotate-180' : ''}`}
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1">
            <ul className="space-y-2 px-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleMenuClick(item.id)}
                    className={`w-full flex items-center px-4 py-2 rounded-lg text-left transition-colors ${
                      activeSection === item.id
                        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-r-2 border-blue-600'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    {!isCollapsed && (
                      <span className="ml-3 font-medium">{item.label}</span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Trading status */}
          {!isCollapsed && (
            <div className="p-4 border-t border-gray-200 dark:border-dark-border">
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-medium text-green-700 dark:text-green-300">
                    Portfolio Active
                  </span>
                </div>
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                  All systems operational
                </p>
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;