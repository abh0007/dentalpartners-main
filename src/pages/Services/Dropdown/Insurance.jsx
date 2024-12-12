import React, { useEffect } from 'react';
import { FaShieldAlt, FaCheckCircle, FaDollarSign, FaClipboardCheck } from 'react-icons/fa';
import { inView, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Define animation variants for cards
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
};

// Helper function for smooth scrolling
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  const navbarHeight = document.querySelector('nav').offsetHeight;

  if (section) {
    window.scrollTo({
      top: section.offsetTop - navbarHeight, // Offset by navbar height
      behavior: 'smooth',
    });
  }
};

function Insurance() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

   

  return (
    <div className="md:mx-48 mx-4 px-4 py-10">
      <motion.h1
       
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.5 }}
        className="text-3xl poppins-bold text-gray-800 text-center mb-8"
      >
        Insurance Eligibility and Benefits Verification
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-sm md:text-md text-gray-600 text-center mb-12 poppins-light"
      >
        Insurance verification can be time-consuming, with online resources often lacking comprehensive details and calls to insurance representatives averaging 30 minutes each. Our solutions streamline this process, freeing up your front desk staff to focus on essential tasks and patient care, thereby enhancing overall efficiency and service quality.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Understanding Insurance */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          className="flex flex-col text-center border border-gray-300 rounded-lg p-4 hover:border-orange-500 transition-transform transform hover:text-gray-800"
        >
          <div className="mb-4 flex justify-center">
            <FaShieldAlt className="text-4xl text-orange-500" />
          </div>
          <div className="flex-grow">
            <h2 className="text-xl poppins-medium text-gray-800 mb-2">Understanding Insurance</h2>
            <p className="text-gray-600 poppins-light text-sm mb-4">
              Verify insurance coverage and understand policy limitations for accurate treatment planning.
            </p>
          </div>
          <button 
      className="text-orange-600 mt-4 border border-orange-600 py-2 px-4 rounded-full hover:bg-orange-600 hover:text-white transition"
      onClick={() => scrollToSection('understanding-insurance')}
    >
      Learn More
    </button>
        </motion.div>

        {/* Benefits */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          className="flex flex-col text-center border border-gray-300 rounded-lg p-4 hover:border-orange-500 transition-transform transform hover:text-gray-800"
        >
          <div className="mb-4 flex justify-center">
            <FaCheckCircle className="text-4xl text-orange-500" />
          </div>
          <div className="flex-grow">
            <h2 className="text-xl poppins-medium text-gray-800 mb-2">Benefits</h2>
            <p className="text-gray-600 poppins-light text-sm mb-4">
              Enhance patient experience, increase revenue, and improve office efficiency with accurate verification.
            </p>
          </div>
          <button 
      className="text-orange-600 mt-4 border border-orange-600 py-2 px-4 rounded-full hover:bg-orange-600 hover:text-white transition"
      onClick={() => scrollToSection('benefits')}
    >
      Learn More
    </button>
        </motion.div>

        {/* Process */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          className="flex flex-col text-center border border-gray-300 rounded-lg p-4 hover:border-orange-500 transition-transform transform hover:text-gray-800"
        >
          <div className="mb-4 flex justify-center">
            <FaClipboardCheck className="text-4xl text-orange-500" />
          </div>
          <div className="flex-grow">
            <h2 className="text-xl poppins-medium text-gray-800 mb-2">Process</h2>
            <p className="text-gray-600 poppins-light text-sm mb-4">
              Collect patient information, verify coverage, determine benefits, and communicate clearly.
            </p>
          </div>
          <button 
      className="text-orange-600 mt-4 border border-orange-600 py-2 px-4 rounded-full hover:bg-orange-600 hover:text-white transition"
      onClick={() => scrollToSection('process')}
    >
      Learn More
    </button>
        </motion.div>

        {/* Best Practices */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          className="flex flex-col text-center border border-gray-300 rounded-lg p-4 hover:border-orange-500 transition-transform transform hover:text-gray-800"
        >
          <div className="mb-4 flex justify-center">
            <FaDollarSign className="text-4xl text-orange-500" />
          </div>
          <div className="flex-grow">
            <h2 className="text-xl poppins-medium text-gray-800 mb-2">Best Practices</h2>
            <p className="text-gray-600 poppins-light text-sm mb-4">
              Utilize technology, train staff, and conduct regular audits for effective insurance verification.
            </p>
          </div>
          <button 
      className="text-orange-600 mt-4 border border-orange-600 py-2 px-4 rounded-full hover:bg-orange-600 hover:text-white transition"
      onClick={() => scrollToSection('best-practices')}
    >
      Learn More
    </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}>


      <div id="understanding-insurance" className="mt-16 mb-12">
  <h2 className="text-2xl poppins-bold text-gray-800 mb-4">Understanding Insurance</h2>
  <div>
  <p className="poppins-light text-gray-600">
    <b>Understanding Insurance</b> is essential for ensuring smooth and accurate treatment planning. Verifying insurance coverage allows healthcare providers to confirm that a patient’s insurance plan will cover the proposed treatments and services. Key features include:
    <br/><br/>
    
    <b className='text-orange-600'>Policy Limitations:</b> Understanding the specific limitations and exclusions within a patient’s insurance policy helps prevent unexpected costs. Knowing what services are covered and which are not can guide treatment decisions and patient communication.
    <br/><br/>
    
    <b className='text-orange-600'>Coverage Verification:</b> Confirming insurance coverage before the treatment process ensures that there are no surprises regarding billing. This step is critical to ensure patients can proceed with their care without financial delays.
    <br/><br/>
    
    <b className='text-orange-600'>Accurate Billing:</b> Proper insurance verification helps the healthcare office submit correct billing information, reducing the risk of claim rejections and delays in payment.
    <br/><br/>
    
    <b className='text-orange-600'>Patient Education:</b> Helping patients understand their insurance benefits enables them to make informed decisions about their care and manage their out-of-pocket costs more effectively.
  </p>
</div>




</div>

    <div id="benefits" className="mt-16 mb-12">
  <h2 className="text-2xl poppins-bold text-gray-800 mb-4">Benefits</h2>
  <div>
  <p className="poppins-light text-gray-600">
    <b>Benefits</b> of accurate insurance verification extend across patient care, office management, and financial outcomes. Ensuring that insurance coverage is confirmed prior to services provides several advantages:
    <br/><br/>
    
    <b className='text-orange-600'>Enhanced Patient Experience:</b> Patients appreciate knowing that their insurance coverage is verified before their visit. This transparency reduces anxiety around costs and ensures that patients can focus on their healthcare.
    <br/><br/>
    
    <b className='text-orange-600'>Increased Revenue:</b> By verifying coverage ahead of time, offices can avoid claim denials and unpaid services. This leads to improved cash flow, fewer write-offs, and more predictable revenue.
    <br/><br/>
    
    <b className='text-orange-600'>Improved Office Efficiency:</b> Accurate verification streamlines office workflows, reducing the time staff spend on follow-ups, rejected claims, and billing errors. This allows the team to focus more on patient care and other important tasks.
    <br/><br/>
    
    <b className='text-orange-600'>Reduced Delays:</b> Proper verification reduces the chances of treatment delays due to billing issues, allowing for smoother operations and a more seamless patient experience.
  </p>
</div>
</div>



<div id='process' className="mt-16 mb-12">
<h2 className="text-2xl poppins-bold text-gray-800 mb-4">Process</h2>
<div>
  <p className="poppins-light text-gray-600">
    <b>Process</b> of insurance verification involves several key steps that ensure accuracy and efficiency in determining coverage. These steps streamline patient care and prevent potential billing issues:
    <br/><br/>
    
    <b className='text-orange-600'>Collect Patient Information:</b> The first step is gathering all relevant patient details, including insurance information, to ensure that the verification process can proceed smoothly.
    <br/><br/>
    
    <b className='text-orange-600'>Verify Coverage:</b> Once the information is collected, it's essential to confirm the patient's insurance coverage with their provider. This step ensures that the services to be provided are covered under the patient's plan.
    <br/><br/>
    
    <b className='text-orange-600'>Determine Benefits:</b> After coverage is verified, it's crucial to identify the specific benefits the patient is entitled to, including deductibles, co-pays, and coverage limits.
    <br/><br/>
    
    <b className='text-orange-600'>Clear Communication:</b> Once benefits are determined, clearly communicate this information to both the patient and the healthcare provider, ensuring transparency and alignment on coverage and costs.
  </p>
</div>



</div>

<div id ="best-practices" className="mt-16 mb-12">
<h2 className="text-2xl poppins-bold text-gray-800 mb-4">Best Practices</h2>
<div>
  <p className="poppins-light text-gray-600">
    <b>Best Practices</b> in insurance verification can greatly enhance accuracy and efficiency, minimizing errors and improving patient care. Key strategies include:
    <br/><br/>
    
    <b className='text-orange-600'>Utilize Technology:</b> Leveraging advanced tools and software helps automate the insurance verification process, reducing manual errors and speeding up the workflow. Digital solutions ensure that information is up-to-date and easily accessible.
    <br/><br/>
    
    <b className='text-orange-600'>Train Staff:</b> Properly trained staff are essential for understanding the intricacies of insurance policies and procedures. Regular training ensures they stay informed about the latest insurance updates, policies, and best practices.
    <br/><br/>
    
    <b className='text-orange-600'>Conduct Regular Audits:</b> Auditing the verification process periodically ensures accuracy and compliance. Regular reviews can help identify discrepancies, reduce claim denials, and ensure that staff follow the most effective procedures.
  </p>
</div>

</div>
</motion.div>
</div>
  );
}

export default Insurance;
