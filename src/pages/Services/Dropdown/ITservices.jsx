import React, { useEffect } from 'react';
import { FaLaptopCode, FaNetworkWired, FaDatabase, FaShieldAlt } from 'react-icons/fa';
import { inView, motion } from 'framer-motion';

// Define animation variants for each service card
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },


  hover: {
    scale: 1.05,
    
    transition: {
      duration: 0.2,  // Changed transition duration for smoother scaling
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      delay: 0,
    },
  },
};

function ITServices() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
    
    if (section) {
      window.scrollTo({
        top: section.offsetTop - navbarHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="md:mx-48 mx-4 px-4 py-10">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="text-3xl poppins-bold text-gray-800 text-center mb-8"
      >
        Our IT Services
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-sm md:text-md text-gray-600 text-center mb-12 poppins-light"
      >
 

Are you willing to risk data loss, security breaches, and downtime by neglecting IT system management? Just as regular maintenance is crucial for IT infrastructure, consistent system management and backup services are vital for your business’s growth and data security. Avoid temporary fixes and reactive approaches. Our specialized IT management and backup services ensure your technology stays optimized and secure.
       </motion.p>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
  transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Software Development */}
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="text-center border hover:border-orange-500 border-gray-300 rounded-lg p-4 flex flex-col justify-between"
        >
          <div className="mb-4 flex justify-center">
            <FaLaptopCode className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Software Development</h2>
          <p className="text-gray-600 poppins-light text-sm mb-4">
            Custom software solutions tailored to your business needs.
          </p>
          <motion.button
            className="text-orange-600 border border-gray-300 py-2 px-4 rounded-full hover:border-orange-500 hover:bg-orange-600 hover:text-white transition"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('software-development')}
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Network Solutions */}
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="text-center border hover:border-orange-500 border-gray-300 rounded-lg p-4 flex flex-col justify-between"
        >
          <div className="mb-4 flex justify-center">
            <FaNetworkWired className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Network Solutions</h2>
          <p className="text-gray-600 poppins-light text-sm mb-4">
            Reliable and secure network infrastructure setup and maintenance.
          </p>
          <motion.button
            className="text-orange-600 border border-gray-300 py-2 px-4 rounded-full hover:border-orange-500 hover:bg-orange-600 hover:text-white transition"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('network-solutions')}
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Database Management */}
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="text-center border hover:border-orange-500 border-gray-300 rounded-lg p-4 flex flex-col justify-between"
        >
          <div className="mb-4 flex justify-center">
            <FaDatabase className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Database Management</h2>
          <p className="text-gray-600 poppins-light text-sm mb-4">
            Efficient database solutions to manage and secure your data.
          </p>
          <motion.button
            className="text-orange-600 border border-gray-300 py-2 px-4 rounded-full hover:border-orange-500 hover:bg-orange-600 hover:text-white transition"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('database-management')}
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Cybersecurity */}
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="text-center border hover:border-orange-500 border-gray-300 rounded-lg p-4 flex flex-col justify-between"
        >
          <div className="mb-4 flex justify-center">
            <FaShieldAlt className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Cybersecurity</h2>
          <p className="text-gray-600 poppins-light text-sm mb-4">
            Comprehensive security services to protect your digital assets.
          </p>
          <motion.button
            className="text-orange-600 border border-gray-300 py-2 px-4 rounded-full hover:border-orange-500 hover:bg-orange-600 hover:text-white transition"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('cybersecurity')}
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Detailed Sections */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={textVariants}
        className="mt-16"
      >
      <div id='software-development' className="mb-12">
  <h2 className="text-3xl poppins-bold text-gray-800 mb-4">Software Development</h2>
  <div>
    <p className="poppins-light text-gray-600">
      <b>Software Development</b> encompasses a range of services tailored to meet your business needs, ensuring that your software solutions drive efficiency and innovation. Key aspects include:
      <br/><br/>
      
      <b className='text-orange-600'>Custom Solutions:</b> We provide bespoke software solutions designed specifically for your business requirements, ensuring a perfect fit and optimal performance.
      <br/><br/>
      
      <b className='text-orange-600'>End-to-End Development:</b> From initial design and development to deployment and maintenance, we manage the entire software development lifecycle to ensure high-quality results.
      <br/><br/>
      
      <b className='text-orange-600'>Innovation and Efficiency:</b> Our solutions are crafted to foster innovation and streamline processes, enhancing overall efficiency within your organization.
      <br/><br/>
      
      <b className='text-orange-600'>Ongoing Support:</b> We offer comprehensive support and maintenance services to address any issues and ensure the software continues to meet your evolving needs.
    </p>
  </div>
</div>

<div id='network-solutions' className="mb-12">
  <h2 className="text-3xl poppins-bold text-gray-800 mb-4">Network Solutions</h2>
  <div>
    <p className="poppins-light text-gray-600">
      <b>Network Solutions</b> are essential for establishing and maintaining secure and efficient network infrastructures. Key features include:
      <br/><br/>
      
      <b className='text-orange-600'>Secure Setup:</b> We design and implement secure network configurations to protect your business from unauthorized access and cyber threats.
      <br/><br/>
      
      <b className='text-orange-600'>Reliable Performance:</b> Our solutions ensure reliable network performance, minimizing downtime and maintaining smooth business operations.
      <br/><br/>
      
      <b className='text-orange-600'>Scalability:</b> We provide scalable network solutions that can grow with your business, accommodating increased traffic and evolving needs.
      <br/><br/>
      
      <b className='text-orange-600'>Ongoing Maintenance:</b> Regular maintenance and monitoring are conducted to ensure optimal network performance and address any issues promptly.
    </p>
  </div>
</div>

<div id='database-management' className="mb-12">
  <h2 className="text-3xl poppins-bold text-gray-800 mb-4">Database Management</h2>
  <div>
    <p className="poppins-light text-gray-600">
      Our <b className='text-orange-600'>Database Management</b> services are designed to ensure that your data is meticulously managed and protected. Effective database management is crucial for maintaining data integrity, optimizing performance, and supporting business operations. Key aspects of our services include:
      <br/><br/>
      
      <b className='text-orange-600'>Data Storage:</b> We provide robust solutions for storing your data securely, ensuring that it is both accessible and protected from unauthorized access.
      <br/><br/>
      
      <b className='text-orange-600'>Efficient Retrieval:</b> Our systems are optimized for fast and reliable data retrieval, helping you access and utilize your information without delays.
      <br/><br/>
      
      <b className='text-orange-600'>Data Security:</b> We implement advanced security measures to safeguard your data from breaches and cyber threats, maintaining confidentiality and compliance with industry standards.
      <br/><br/>
      
      <b className='text-orange-600'>Support and Maintenance:</b> Ongoing support and regular maintenance ensure that your database operates smoothly, with minimal downtime and quick resolution of any issues that may arise.
    </p>
  </div>
</div>

<div id='cybersecurity' className="mb-12">
  <h2 className="text-3xl poppins-bold text-gray-800 mb-4">Cybersecurity</h2>
  <div>
    <p className="poppins-light text-gray-600">
      Our <b className='text-orange-600'>Cybersecurity</b> services are designed to offer comprehensive protection for your digital assets against a wide range of cyber threats. In today’s digital landscape, safeguarding your business from potential attacks is crucial. We provide a suite of services to ensure robust security and resilience:
      <br/><br/>
      
      <b className='text-orange-600'>Threat Detection:</b> We utilize advanced tools and techniques to identify and mitigate potential threats before they can impact your operations. Continuous monitoring helps in early detection of vulnerabilities.
      <br/><br/>
      
      <b className='text-orange-600'>Risk Assessment:</b> Our experts perform thorough risk assessments to evaluate the security posture of your systems, identifying weaknesses and recommending improvements.
      <br/><br/>
      
      <b className='text-orange-600'>Security Measures:</b> We implement a range of security measures, including firewalls, encryption, and access controls, to protect your data and systems from unauthorized access and breaches.
      <br/><br/>
      
      <b className='text-orange-600'>Incident Response:</b> In the event of a security breach, our team is equipped to respond quickly and effectively, minimizing damage and restoring normal operations as swiftly as possible.
    </p>
  </div>
</div>

      </motion.div>
    </div>
  );
}

export default ITServices;
