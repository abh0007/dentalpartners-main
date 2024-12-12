import React, { useEffect } from 'react';
import { InlineWidget } from 'react-calendly';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { FaLinkedin, FaYoutube } from 'react-icons/fa6';
import { GrInstagram } from 'react-icons/gr';
import youtube from '../../assets/youtube.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
function Scheduler() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className=" py-10">
      {/* Heading at the top */}
      <h2 className="text-3xl poppins-bold text-gray-800 text-center mb-8">
        Schedule a Meeting with Our Dental Care Connects Team
      </h2>
      
      {/* Calendly Inline Widget */}
      <div className=" ">
        <InlineWidget url="https://calendly.com/abhigangwarlife/30min" className=" w-full h-full " />
      </div>

      {/* Contact Information at the bottom */}
      <div className="text-center mt-10">
        <h3 className="text-2xl poppins-medium text-gray-800 mb-4">
          Contact Us
        </h3>
        <p className="text-gray-600 poppins-light mb-4">
          If you have any questions or need further assistance, feel free to reach out to us.
        </p>
        <div className="flex justify-center gap-8 flex-col md:flex-row ">
          <div className="flex items-center flex-col md:flex-row">
            <FaPhoneAlt className="text-orange-500 text-2xl mr-2" />
            <span className="text-gray-600 poppins-light">+91 9458227633</span>
          </div>
          <div className="flex items-center justify-center">
            <FaEnvelope className="text-orange-500 text-2xl mr-2" />
            <span className="text-gray-600 poppins-light">
              <a href="mailto:contact@dentalcareconnects.com"  className='hover:text-orange-500 hover:underline'>
             contact@dentalcareconnects.com </a></span>
          </div>

        </div>

          <div className="mt-8 flex md:flex-row flex-col  justify-center items-center gap-4">
          <a href="http://www.youtube.com/@DentalCareConnects" target="_blank" className="text-gray-400 hover:text-orange-500 flex  items-center gap-x-1">
          <img src={youtube} className="w-8 h-8" /><span>@DentalCareConnects</span>
        </a>
          <a href="https://www.instagram.com/dentalcareconnects/" target="_blank" className="text-gray-400 hover:text-orange-500 flex items-center gap-x-2">
          <img src={instagram} className='w-6 h-6'/>@dentalcareconnects </a>
          <a href="https://www.linkedin.com/company/dental-care-connects/" target="_blank" className="text-gray-400 hover:text-orange-500  flex items-center gap-x-1">
          <img src={linkedin} className='w-6 h-6'/>@dental-care-connects </a>
        </div>
      </div>
    </section>
  );
}

export default Scheduler;
