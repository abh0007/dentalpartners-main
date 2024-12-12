import React from 'react';
import { FaLinkedin, FaYoutube } from 'react-icons/fa6';
import { GrInstagram } from 'react-icons/gr';
import { ImFacebook2 } from 'react-icons/im';
 
 

function Footer() {
  return (
    <footer className="  py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-lg  poppins-medium">About Us</h2>
            <p className="mt-4 text-sm text-gray-400 poppins-light">
              We provide a seamless way for dentists to manage their appointments and focus on delivering the best care to patients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg poppins-medium">Quick Links</h2>
            <ul className="mt-4 space-y-2 poppins-light">
              <li><a href="/" className="text-gray-400 hover:text-orange-500">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-orange-500">About Us</a></li>
             
              <li><a href="/contact" className="text-gray-400 hover:text-orange-500">Contact</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-lg poppins-medium">Contact Us</h2>
            <ul className="mt-4 space-y-2 text-sm text-gray-400 poppins-light">
              <li>Email:  <a href="mailto:contact@dentalcareconnects.com" className='hover:text-orange-500 hover:underline'>
             contact@dentalcareconnects.com </a></li>
              <li>Phone: +91 9458227633</li>
             
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-8 flex justify-center space-x-6 items-center">
          <a href="http://www.youtube.com/@DentalCareConnects" target="_blank" className="text-gray-400 hover:text-orange-500">
          <FaYoutube className='w-6 h-6' />
        </a>
          <a href="https://www.instagram.com/dentalcareconnects/" target="_blank" className="text-gray-400 hover:text-orange-500">
          <GrInstagram  className='w-5 h-5' /> </a>
          <a href="https://www.linkedin.com/company/dental-care-connects/" target="_blank" className="text-gray-400 hover:text-orange-500">
          <FaLinkedin   className='w-5 h-5'/></a>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm text-gray-400 poppins-light">
          © 2024 Dental Care Connects. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
