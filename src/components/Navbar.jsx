import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 glassmorphism transition-all duration-300 ${scrolled ? "shadow-lg bg-dark-900/95 py-2" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a
              href="#"
              className="font-serif text-2xl font-bold tracking-wider text-white"
            >
              Mahale<span className="text-gold-500"> Photography</span>.
            </a>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="#home"
              className="nav-link text-gray-300 hover:text-white font-medium text-sm"
            >
              Home
            </a>
            <a
              href="#about"
              className="nav-link text-gray-300 hover:text-white font-medium text-sm"
            >
              About
            </a>
            <a
              href="#services"
              className="nav-link text-gray-300 hover:text-white font-medium text-sm"
            >
              Services
            </a>
            <a
              href="#gallery"
              className="nav-link text-gray-300 hover:text-white font-medium text-sm"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="nav-link text-gray-300 hover:text-white font-medium text-sm"
            >
              Contact
            </a>
            <a
              href="#contact"
              className="bg-gold-500 hover:bg-gold-400 text-dark-900 px-6 py-2.5 rounded-full font-semibold btn-hover text-sm tracking-wide"
            >
              Book Photoshoot
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <i className="fa-solid fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden glassmorphism border-t border-gray-800 transition-all duration-400 ease-in-out overflow-hidden ${isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md"
          >
            About Studio
          </a>
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md"
          >
            Services
          </a>
          <a
            href="#gallery"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md"
          >
            Contact
          </a>
          <div className="pt-4">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-gold-500 text-dark-900 px-5 py-3 rounded-md font-semibold text-base mb-2"
            >
              Book Photoshoot
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
