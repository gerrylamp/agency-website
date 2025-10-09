import React, { useEffect, useState } from 'react';
import { Logo } from './Logo';
import { Button } from './Button';
import { MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Logo />
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/#" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-indigo-600 font-medium`}>
            Home
          </a>
          <a href="#services" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-indigo-600 font-medium`}>
            Services
          </a>
          <a href="#portfolio" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-indigo-600 font-medium`}>
            Work
          </a>
          <a href="#contact" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-indigo-600 font-medium`}>
            Contact
          </a>
          <Button href='#services' variant="primary">Get Started</Button>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {mobileMenuOpen && <div className="md:hidden bg-white">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <a href="#services" className="text-gray-700 hover:text-indigo-600 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
              Services
            </a>
            <a href="#portfolio" className="text-gray-700 hover:text-indigo-600 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
              Work
            </a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </a>
            <Button href='#services' variant="primary" className="w-full">
              Get Started
            </Button>
          </div>
        </div>}
    </header>;
}