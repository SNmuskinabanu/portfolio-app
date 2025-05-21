import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-indigo-500 via-purple-400 to-teal-400 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-white bg-white bg-opacity-20 px-2 py-1 rounded-lg">
                MB
              </span>
            </div>
            <div className="ml-4 hidden md:block">
              <span className="text-white font-semibold text-lg">
                Muskina Banu
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <a
                  className="text-white hover:text-teal-200 px-3 py-2 text-sm font-medium"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-teal-200 px-3 py-2 text-sm font-medium"
                  href="#skills"
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  className="text-white hover:text-teal-200 px-3 py-2 text-sm font-medium"
                  href="#projects"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-teal-200 px-3 py-2 text-sm font-medium"
                  href="#contacts"
                >
                  Contacts
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white hover:text-teal-200 focus:outline-none transition-colors duration-200"
            >
              {menuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-b from-indigo-600 to-purple-600 px-4 py-4 space-y-2">
          <a href="#about" className="block text-white hover:text-teal-200">
            About
          </a>
          <a href="#skills" className="block text-white hover:text-teal-200">
            Skills
          </a>

          <a href="#projects" className="block text-white hover:text-teal-200">
            Projects
          </a>
          <a href="#contacts" className="block text-white hover:text-teal-200">
            Contacts
          </a>
        </div>
      )}
    </nav>
  );
}
