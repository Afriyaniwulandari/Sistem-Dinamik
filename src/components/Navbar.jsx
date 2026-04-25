import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
      isActive
        ? "bg-blue-600 text-white shadow-md"
        : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
    }`;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Title */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SP</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-800 leading-tight">
                Simulasi Garam
              </h1>
              <p className="text-xs text-gray-500 -mt-0.5">Sistem Dinamis</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <NavLink to="/" className={navLinkClass} end>
              HOME
            </NavLink>
            <NavLink to="/simulasi" className={navLinkClass}>
              SIMULASI
            </NavLink>
            <NavLink to="/model" className={navLinkClass}>
              MODEL
            </NavLink>
            <NavLink to="/hasil" className={navLinkClass}>
              HASIL
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-blue-600 focus:outline-none p-2">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Simple Implementation */}
      <div className="md:hidden border-t border-gray-100">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          >
            HOME
          </Link>
          <Link
            to="/simulasi"
            className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          >
            SIMULASI
          </Link>
          <Link
            to="/model"
            className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          >
            MODEL
          </Link>
          <Link
            to="/hasil"
            className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          >
            HASIL
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
