import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, X, Menu, Apple } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (!searchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl transition-all duration-300",
        isScrolled ? "border-b border-gray-700/30" : ""
      )}
    >
      <div className="max-w-[1470px] mx-auto">
        <nav className="flex justify-between items-center px-6 h-[44px] text-sm text-white">
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center justify-center space-x-8 flex-1">
            <li>
              <a href="#" className="hover:text-gray-300">
                <Apple size={18} />
              </a>
            </li>
            <li><a href="#" className="hover:text-gray-300">Store</a></li>
            <li><a href="#" className="hover:text-gray-300">Mac</a></li>
            <li><a href="#" className="hover:text-gray-300">iPad</a></li>
            <li><a href="#" className="hover:text-gray-300">iPhone</a></li>
            <li><a href="#" className="hover:text-gray-300">Watch</a></li>
            <li><a href="#" className="hover:text-gray-300">Vision</a></li>
            <li><a href="#" className="hover:text-gray-300">AirPods</a></li>
            <li><a href="#" className="hover:text-gray-300">TV & Home</a></li>
            <li><a href="#" className="hover:text-gray-300">Entertainment</a></li>
            <li><a href="#" className="hover:text-gray-300">Accessories</a></li>
            <li><a href="#" className="hover:text-gray-300">Support</a></li>
          </ul>
          
          {/* Mobile Apple Logo */}
          <a href="#" className="md:hidden">
            <Apple size={18} className="text-white" />
          </a>
          
          {/* Right Icons */}
          <div className="flex items-center space-x-6">
            <button 
              onClick={toggleSearch}
              className="hover:text-gray-300"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
            <a href="#" className="hover:text-gray-300">
              <ShoppingCart size={18} />
            </a>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black pt-[44px] z-40">
          <div className="h-full overflow-y-auto p-6">
            <ul className="space-y-6 text-white text-2xl font-semibold">
              <li><a href="#" className="block py-2">Store</a></li>
              <li><a href="#" className="block py-2">Mac</a></li>
              <li><a href="#" className="block py-2">iPad</a></li>
              <li><a href="#" className="block py-2">iPhone</a></li>
              <li><a href="#" className="block py-2">Watch</a></li>
              <li><a href="#" className="block py-2">Vision</a></li>
              <li><a href="#" className="block py-2">AirPods</a></li>
              <li><a href="#" className="block py-2">TV & Home</a></li>
              <li><a href="#" className="block py-2">Entertainment</a></li>
              <li><a href="#" className="block py-2">Accessories</a></li>
              <li><a href="#" className="block py-2">Support</a></li>
            </ul>
          </div>
        </div>
      )}

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black pt-[44px] z-40">
          <div className="max-w-[1000px] mx-auto p-4">
            <div className="flex items-center bg-[#1d1d1f]/40 rounded-lg p-2 mb-6">
              <Search size={18} className="text-gray-400 mr-2" />
              <input 
                type="text"
                placeholder="Search apple.com"
                className="bg-transparent border-none w-full text-white focus:outline-none"
                autoFocus
              />
              <button onClick={toggleSearch}>
                <X size={18} className="text-gray-400" />
              </button>
            </div>
            <div className="text-white">
              <h3 className="font-semibold mb-2">Quick Links</h3>
              <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">iPhone Support</a></li>
                <li><a href="#" className="hover:text-white">Mac Support</a></li>
                <li><a href="#" className="hover:text-white">iPad Support</a></li>
                <li><a href="#" className="hover:text-white">Watch Support</a></li>
                <li><a href="#" className="hover:text-white">AirPods Support</a></li>
                <li><a href="#" className="hover:text-white">Music Support</a></li>
                <li><a href="#" className="hover:text-white">TV Support</a></li>
                <li><a href="#" className="hover:text-white">iPhone How To</a></li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
