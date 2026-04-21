import { useState, useEffect } from 'react';
import { Moon, Sun, Linkedin, Download, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion } from 'motion/react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 dark:bg-[#0A2540]/90 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection('hero')}
              className="text-xl md:text-2xl font-semibold tracking-tight"
              style={{ color: scrolled ? 'var(--navy)' : '#0A2540' }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="dark:text-white">Emna Khemiri</span>
            </motion.button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-[var(--navy)] dark:text-gray-300 hover:text-[var(--teal)] dark:hover:text-[var(--teal)] transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://www.linkedin.com/in/emna-khemiri-8431b3343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-[var(--navy)] dark:text-gray-300 hover:text-[var(--teal)] dark:hover:text-[var(--teal)] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">emma1911</span>
              </a>

              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-gray-300" />
                ) : (
                  <Moon className="w-5 h-5 text-[var(--navy)]" />
                )}
              </button>

              <a
                href="/emna cv full.pdf"
                download="Emna_Khemiri_CV.pdf"
                className="flex items-center space-x-2 px-5 py-2.5 rounded-full text-white transition-all hover:scale-105"
                style={{ backgroundColor: 'var(--teal)' }}
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center space-x-3">
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-gray-300" />
                ) : (
                  <Moon className="w-5 h-5 text-[var(--navy)]" />
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[var(--navy)] dark:text-white"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-white dark:bg-[#0A2540] pt-20"
        >
          <div className="flex flex-col items-center space-y-6 p-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="text-2xl text-[var(--navy)] dark:text-white hover:text-[var(--teal)] dark:hover:text-[var(--teal)] transition-colors"
              >
                {item.label}
              </motion.button>
            ))}

            <motion.a
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              href="https://linkedin.com/in/emma1911"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-[var(--navy)] dark:text-gray-300 hover:text-[var(--teal)] dark:hover:text-[var(--teal)] transition-colors"
            >
              <Linkedin className="w-6 h-6" />
              <span>emma1911</span>
            </motion.a>

            <motion.a
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              href="/emna cv full.pdf"
              download="Emna_Khemiri_CV.pdf"
              className="flex items-center space-x-2 px-8 py-3 rounded-full text-white transition-all"
              style={{ backgroundColor: 'var(--teal)' }}
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </motion.a>
          </div>
        </motion.div>
      )}
    </>
  );
}








