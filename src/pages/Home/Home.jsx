import React, { useEffect, useState } from 'react';
import { IoNewspaperSharp } from "react-icons/io5";
import { FaBookMedical, FaStethoscope, FaUserDoctor, FaComputer } from "react-icons/fa6";
import { AiFillClockCircle } from "react-icons/ai";
import { HiSpeakerphone } from "react-icons/hi";
import homepage from '../../assets/homepage.webp';  // Full-resolution image
import homepagePlaceholder from '../../assets/homepagePlaceholder.webp';  
import { motion } from 'framer-motion'; // Low-quality image
import { Link } from 'react-router-dom';
import GoogleAd from '../../components/GoogleAds';

function Home() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Define animation variants for text and buttons
  const textRevealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };

  // Define animation variants for the services container and cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Array of services with icon, title, and description
  
    const services = [
      {
        icon: <FaUserDoctor className="text-5xl transition-colors duration-300" />,
        title: 'Patient Coordination',
        description: 'Involves organizing and managing patient care, appointments, and communication for effective treatment processes.',
        link: '/services/patient',
      }, {
        icon: <IoNewspaperSharp className="text-5xl transition-colors duration-300" />,
        title: 'Insurance Eligibility & Benefits',
        description: 'Determining if a patient qualifies for coverage and what services or treatments are covered, including costs.',
        link: '/services/insurance',
      },
      {
        icon: <FaBookMedical className="text-5xl transition-colors duration-300" />,
        title: 'Bookkeeping & Accounting',
        description: 'Involves recording financial transactions and maintaining accurate financial records for a business.',
        link: '/services/bookkeeping',
      },
      {
        icon: <AiFillClockCircle className="text-5xl transition-colors duration-300" />,
        title: 'Pending Claims Management',
        description: 'Involves tracking, reviewing, and resolving outstanding insurance claims to ensure timely reimbursement.',
        link: '/services/pending',
      },
      {
        icon: <FaComputer className="text-5xl transition-colors duration-300" />,
        title: 'IT Services',
        description: 'Provides technical support, infrastructure management, and software solutions to optimize business operations.',
        link: '/services/itservices',
      },
  
      {
        icon: <FaStethoscope className="text-5xl transition-colors duration-300" />,
        title: 'Treatment Coordination',
        description: 'Managing a patient’s care plan across healthcare providers to ensure smooth and effective treatment.',
        link: '/services/treatment',
      },
      {
        icon: <HiSpeakerphone className="text-5xl transition-colors duration-300" />,
        title: 'Marketing Management',
        description: 'Planning and executing marketing strategies to promote products or services and achieve business objectives.',
        link: '/services/marketing',
      },
      {
        icon: <FaUserDoctor className="text-5xl transition-colors duration-300" />,
        title: 'Recruitment Services',
        description: 'Sourcing, interviewing, and hiring candidates for various roles to meet business needs effectively.',
        link: '/services/recruitment',
      },
      {
        icon: <FaComputer className="text-5xl transition-colors duration-300" />,
        title: 'Business Analyst',
        description: 'Analyzing business operations to identify opportunities for improvement and optimize performance.',
        link: '/services/business',
      },
   
    
    
  ];

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="relative">
      {/* Background Image with Placeholder */}
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          {/* Show the placeholder until the full image is loaded */}
          <img
        src={homepagePlaceholder}
        alt="Low-quality placeholder"
        className={`object-cover w-full h-[600px] -z-40 object-bottom transition-opacity duration-[2000ms] ease-in-out ${isImageLoaded ? 'opacity-0' : 'opacity-100'}`}
      />
      <img
        src={homepage}
        alt="homepage"
        className={`object-cover w-full h-[600px] absolute top-0  object-bottom transition-opacity duration-[2000ms] ease-in-out ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsImageLoaded(true)}
      />
    </div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex">
          <div className="bg-black bg-opacity-50 text-white w-full h-[600px]   flex justify-center items-left flex-col md:pl-28">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={textRevealVariants}
              viewport={{ once: true, amount: 0.2 }}
              className="text-2xl md:text-4xl font-bold poppins-bold text-center md:text-left  "
            >
              <p className="text-5xl  ">
                Focus on <span className="text-orange-500 ">Patients</span>
              </p>
              We Handle the Rest
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={buttonVariants}
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col md:flex-row gap-3 items-center mt-4 "
            >
              <Link to="/contact">
                <button className="bg-orange-500 text-white py-2 px-4 rounded-full mt-4 hover:bg-orange-600  md:text-sm">
                 Schedule a Meeting
                </button>
              </Link>
              <button className="border text-white py-2 px-4 rounded-full md:mt-4 md:text-sm">
                Call: +91 9458227633
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <GoogleAd />
      {/* Who We Are Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={textRevealVariants}
        viewport={{ once: true, amount: 0.2 }}
        className="my-28 p-5"
      >
        <h2 className="text-3xl poppins-bold text-gray-800 text-center">Who We Are</h2>
        <div className="mt-4 max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-700 poppins-light-italic">
            "We are a <span className="text-orange-500">dedicated</span> team committed to providing exceptional care and support. Our mission is to streamline healthcare processes and offer comprehensive solutions that <span className="text-orange-500">enhance</span> the patient experience and <span className="text-orange-500">improve operational efficiency</span>. With a focus on innovation and compassion, we strive to be a leader in the industry, ensuring that every patient receives the highest quality of care and attention."
          </p>
        </div>
      </motion.div>

      {/* Services Section */}
      <div className="relative">
      {/* Services Section */}
      <div className="mt-10 p-5">
        <h2 className="text-3xl my-5 font-bold text-center">What We Offer</h2>
        <motion.div
          className="mt-5 flex flex-wrap justify-center gap-7 md:px-20 px-4"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white p-5 rounded-lg shadow-lg  min-w-[300px] w-[30%] m-4 group transition-colors duration-300 hover:bg-orange-500 hover:text-white"
            >
              
              <Link to={service.link} className='flex flex-col md:flex-row justify-center items-center md:items-start'>
              {/* Icon Column */}
              <div className="mr-4 group-hover:text-white transition-colors duration-100 text-orange-500">
                {service.icon}
              </div>
              {/* Text Column */}
              <div>
                 <p  className="text-xl mb-2 font-bold group-hover:text-white transition-colors duration-300 text-center md:text-left"> {service.title} </p>
               
                <p className="mt-2 text-sm text-gray-600 group-hover:text-gray-200 transition-colors duration-300 text-center md:text-left">
                  {service.description}
                </p>
              
              </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  

      {/* Testimonials */}
      <section className="my-16">
        <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-16 h-16 text-orange-500">
            <polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
            <path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.76-38.515,17.733-34.234,1.76-38.515,32.475-20.78,38.515-1.76L256,121.75l34.234,17.733,38.515,1.76,32.475,20.78,1.76,38.515,17.733,34.234Z"></path>
          </svg>
          <p className="px-6 md:text-lg poppins-light italic text-gray-800 md:px-32 text-center">
            "Exceptional service! Dental Care Connects has streamlined our practice with top-notch insurance management and patient coordination, allowing us to focus more on delivering quality care."
          </p>
          <div className="flex justify-center space-x-3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPifbSMjy9cWkAjAH-xuPG_MTpfcSbPso5FQ&s" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
            <div>
              <p className="leading-tight poppins-bold">Dr. Rajesh Kapoor</p>
              <p className="text-sm leading-tight dark:text-gray-600">Dentist</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
