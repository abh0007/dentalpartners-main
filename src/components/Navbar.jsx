import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { IoMdArrowDropdown } from "react-icons/io";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for desktop dropdown
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false); // State for mobile dropdown
  const location = useLocation(); // Hook to get the current location

  // Function to determine if a link is active
  const isActive = (path) => location.pathname === path ? 'text-orange-600 font-medium' : 'text-gray-800 hover:text-orange-600';

  // Function to toggle desktop dropdown menu
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Function to toggle mobile dropdown menu
  const toggleMobileDropdown = () => setMobileDropdownOpen(!mobileDropdownOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className=" px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                className="h-16 w-auto"
                src={logo} // Replace with your logo URL
                alt="Logo"
              />
            </Link>
          </div>

          {/* Menu Button for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Links for Desktop */}
          <div className="hidden md:flex space-x-4 items-center poppins-medium relative">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm ${isActive('/')}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm ${isActive('/about')}`}
            >
              About
            </Link>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className={`px-3 py-2 rounded-md text-sm ${isActive('/services')}`}
              >
                <p className="flex items-center">
                  Services <IoMdArrowDropdown />
                </p>
              </button>
              {dropdownOpen && (
                <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-lg poppins-light text-sm">
                  <Link
                    to="/services/patient"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 border-b border-gray-300"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Patient Coordination
                  </Link>
                  <Link
                    to="/services/insurance"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 border-b border-gray-300"
                    onClick={() => setDropdownOpen(false)}
                  >
                   Insurance Eligibility & Benefits
                  </Link>
                  <Link
                    to="/services/bookkeeping"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 border-b border-gray-300"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Bookkeeping & Accounting
                  </Link>
                  <Link
                    to="/services/pending"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 border-b border-gray-300"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Pending Claims Management
                  </Link>
                  <Link
                    to="/services/itservices"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 border-b border-gray-300"
                    onClick={() => setDropdownOpen(false)}
                  >
                   IT Services
                  </Link>
                  <Link
                    to="/services/treatment"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 border-b border-gray-300"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Treatment Coordination
                  </Link>
                  <Link
                    to="/services/marketing"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 border-b border-gray-300"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Marketing Maintenance
                  </Link>
                  <Link
                    to="/services/recruitment"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 border-b border-gray-300"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Recruitment Services
                  </Link>
                  <Link
                    to="/services/business"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-b-lg"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Business Analytics
                  </Link>
                </div>
              )}
            </div>
            <Link to="/contact">
              <button className="text-orange-500 border border-orange-500 poppins-medium text-xs py-2 px-4 rounded-full hover:bg-orange-600 hover:text-white">
              Schedule a Meeting
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3  shadow-lg">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/')}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/about')}`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <button
              onClick={toggleMobileDropdown}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${isActive('/services')}`}
            >
              <p className="flex items-center justify-between">
                Services <IoMdArrowDropdown />
              </p>
            </button>
            {mobileDropdownOpen && (
              <div className="pl-4   poppins-light ">
                <Link
                  to="/services/patient"
                  className="poppins-light block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-200 border-b border-gray-300"
                  onClick={() => {
                    setIsOpen(false);
                    setMobileDropdownOpen(false);
                  }}
                >
                  Patient Coordination
                </Link>
                <Link
                  to="/services/insurance"
                  className=" poppins-light block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-200 border-b border-gray-300"
                  onClick={() => {
                    setIsOpen(false);
                    setMobileDropdownOpen(false);
                  }}
                >
                   Insurance Eligibility & Benefits
                </Link>
                <Link
                  to="/services/bookkeeping"
                  className=" poppins-light block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-200 border-b border-gray-300"
                  onClick={() => {
                    setIsOpen(false);
                    setMobileDropdownOpen(false);
                  }}
                >
                  Bookkeeping & Accounting
                </Link>     <Link
                  to="/services/pending"
                  className=" poppins-light block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-200 border-b border-gray-300"
                  onClick={() => {
                    setIsOpen(false);
                    setMobileDropdownOpen(false);
                  }}
                >
                 Pending Claims Management
                </Link>     <Link
                  to="/services/itservices"
                  className=" poppins-light block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-200 border-b border-gray-300"
                  onClick={() => {
                    setIsOpen(false);
                    setMobileDropdownOpen(false);
                  }}
                >
                   IT Services
                </Link>     <Link
                  to="/services/treatment"
                  className=" poppins-light block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-200 border-b border-gray-300"
                  onClick={() => {
                    setIsOpen(false);
                    setMobileDropdownOpen(false);
                  }}
                >
                 Treatment Coordination
                </Link>     <Link
                  to="/services/marketing"
                  className="poppins-light block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-200  border-b border-gray-300"
                  onClick={() => {
                    setIsOpen(false);
                    setMobileDropdownOpen(false);
                  }}
                >
                  Marketing Maintenance
                </Link>
                <Link
                    to="/services/recruitment"
                    className="block px-3 py-2 text-gray-800 hover:bg-gray-200 border-b border-gray-300"
                    onClick={() => {
                      setIsOpen(false);
                      setMobileDropdownOpen(false);
                    }}
                  >
                    Recruitment Services
                  </Link>
                  <Link
                    to="/services/business"
                    className="block px-3 py-2 text-gray-800 hover:bg-gray-200 rounded-b-lg"
                    onClick={() => {
                      setIsOpen(false);
                      setMobileDropdownOpen(false);
                    }}
                  >
                    Business Analytics
                  </Link>
              </div>
            )}
             <Link to="/contact">
              <button   onClick={() => {
                      setIsOpen(false);
                      setMobileDropdownOpen(false);
                    }} className="text-orange-500 border border-orange-500 poppins-medium text-xs py-3 px-4 rounded-full w-full mt-3 mb-2 hover:bg-orange-600 hover:text-white">
              Schedule a Meeting
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
