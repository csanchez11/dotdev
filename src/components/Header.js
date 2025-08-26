import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Header = ({ isMobileSidebarOpen, setIsMobileSidebarOpen }) => {
  const { isDark, toggleTheme } = useTheme();
  const [ isOnline, setIsOnline ] = useState(navigator.onLine);

  // Function to check/set internet connectivity
  const checkInternetConnection = () => {
    setIsOnline(navigator.onLine);
  };

  useEffect(() => {
    // Add event listeners for online/offline events
    window.addEventListener('online', checkInternetConnection);
    window.addEventListener('offline', checkInternetConnection);

    return () => {
      window.removeEventListener('online', checkInternetConnection);
      window.removeEventListener('offline', checkInternetConnection);
    };
  }, []);


  return (
    <header className="bg-white dark:bg-dark-card border-b border-gray-200 dark:border-dark-border px-4 py-3 lg:px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
            className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CS</span>
            </div>
            <h1 className="ml-3 text-xl font-bold text-gray-900 dark:text-white">
              Portfolio Dashboard
            </h1>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center">
              <div className={`w-2 h-2 rounded-full mr-2 ${
                isOnline
                  ? 'bg-green-500 animate-pulse'
                  : 'bg-red-500'
              }`}></div>
              {isOnline ? 'Online' : 'Offline'}
            </span>
            <span>•</span>
            <span>Last Updated: {new Date().toLocaleTimeString()}</span>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;