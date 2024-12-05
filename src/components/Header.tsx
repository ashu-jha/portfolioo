import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();

  const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/#about' },
    { title: 'Projects', href: '/#projects' },
    { title: 'Contact', href: '/#contact' },
    { title: 'Blog', href: '/blog' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm ${isDarkMode ? 'bg-black/80' : 'bg-white/80'}`}>
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between md:justify-center relative">
          {/* Logo - Centered on mobile, moved to left on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:absolute md:left-4"
          >
            <Link to="/" className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
              Portfolio
            </Link>
          </motion.div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {item.href.startsWith('/#') ? (
                  <a
                    href={item.href.substring(1)}
                    className={`${isDarkMode ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'} transition-colors`}
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    className={`${isDarkMode ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'} transition-colors`}
                  >
                    {item.title}
                  </Link>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Theme Toggle and Mobile Menu Buttons - Moved to right */}
          <div className="flex items-center space-x-4 md:absolute md:right-4">
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${isDarkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'} transition-colors`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5 text-black" />}
            </motion.button>
            
            <button
              className={`md:hidden ${isDarkMode ? 'text-white' : 'text-black'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Full width, centered text */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4"
          >
            <div className="flex flex-col items-center space-y-4">
              {menuItems.map((item) => (
                <div key={item.title}>
                  {item.href.startsWith('/#') ? (
                    <a
                      href={item.href.substring(1)}
                      className={`text-lg ${isDarkMode ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'} transition-colors`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className={`text-lg ${isDarkMode ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'} transition-colors`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};
