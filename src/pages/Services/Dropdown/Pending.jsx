import React, { useEffect } from 'react';
import { FaClock, FaFileAlt, FaExclamationTriangle, FaHandHoldingUsd } from 'react-icons/fa';
import { inView, motion } from 'framer-motion';

// Define animation variants for each card
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

function PendingClaims() {

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
        Pending Claim Management
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-sm md:text-md text-gray-600 text-center mb-12 poppins-light"
      >
        Navigating insurance denials can be challenging and time-consuming for dental practices. Our denial management services streamline this process by analyzing denials, identifying patterns, and developing effective strategies to maximize claim acceptance. We handle claim resubmissions, appeals, and follow-ups, allowing your staff to focus on patient care. By leveraging our services, you can minimize revenue loss, reduce administrative burdens, and improve practice efficiency, ensuring you receive the reimbursement you deserve.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"

        initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
  transition={{ duration: 0.8, delay: 0.2 }}>
        {/* Monitor Claim Status */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          className="text-center hover:border-orange-500 border border-gray-300 rounded-lg p-4 flex flex-col justify-between"
        >
          <div className="mb-4 flex justify-center">
            <FaClock className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Monitor Claim Status</h2>
          <p className="text-gray-600 poppins-light text-sm mb-4">
            Track the status of your claims in real-time to ensure timely follow-ups and resolutions.
          </p>
          <button
            className="text-orange-600 border border-orange-600 py-2 px-4 rounded-full hover:bg-orange-600 hover:text-white transition"
            onClick={() => scrollToSection('monitor-claim-status')}
          >
            Learn More
          </button>
        </motion.div>

        {/* Claim Documentation */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          className="text-center border hover:border-orange-500 border-gray-300 rounded-lg p-4 flex flex-col justify-between"
        >
          <div className="mb-4 flex justify-center">
            <FaFileAlt className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-lg poppins-medium text-gray-800 mb-2">Claim Documentation</h2>
          <p className="text-gray-600 poppins-light text-sm mb-4">
            Maintain accurate documentation for each claim to facilitate smooth processing and avoid delays.
          </p>
          <button
            className="text-orange-600 border border-orange-600 py-2 px-4 rounded-full hover:bg-orange-600 hover:text-white transition"
            onClick={() => scrollToSection('claim-documentation')}
          >
            Learn More
          </button>
        </motion.div>

        {/* Dispute Resolution */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          className="text-center border hover:border-orange-500 border-gray-300 rounded-lg p-4 flex flex-col justify-between"
        >
          <div className="mb-4 flex justify-center">
            <FaExclamationTriangle className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Dispute Resolution</h2>
          <p className="text-gray-600 poppins-light text-sm mb-4">
            Efficiently resolve any disputes or issues related to pending claims to ensure accurate reimbursements.
          </p>
          <button
            className="text-orange-600 border border-orange-600 py-2 px-4 rounded-full hover:bg-orange-600 hover:text-white transition"
            onClick={() => scrollToSection('dispute-resolution')}
          >
            Learn More
          </button>
        </motion.div>

        {/* Financial Recovery */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          className="text-center border hover:border-orange-500 border-gray-300 rounded-lg p-4 flex flex-col justify-between"
        >
          <div className="mb-4 flex justify-center">
            <FaHandHoldingUsd className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Financial Recovery</h2>
          <p className="text-gray-600 poppins-light text-sm mb-4">
            Maximize financial recovery by optimizing claim submissions and follow-up processes.
          </p>
          <button
            className="text-orange-600 border border-orange-600 py-2 px-4 rounded-full hover:bg-orange-600 hover:text-white transition"
            onClick={() => scrollToSection('financial-recovery')}
          >
            Learn More
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}>

      <div id='monitor-claim-status' className="mt-16 mb-12">
  <h2 className="text-3xl poppins-bold text-gray-800 mb-4">Monitor Claim Status</h2>
  <div>
    <p className="poppins-light text-gray-600">
      <b>Monitor Claim Status</b> is vital for ensuring that your claims are processed efficiently and resolved in a timely manner. Tracking the status of your claims in real-time helps you stay on top of follow-ups and facilitates quicker resolutions. Key aspects include:
      <br/><br/>
      
      <b className='text-orange-600'>Real-Time Tracking:</b> Utilize systems that provide real-time updates on the status of your claims. This allows you to monitor progress and identify any potential issues or delays promptly.
      <br/><br/>
      
      <b className='text-orange-600'>Timely Follow-Ups:</b> Set reminders to follow up on claims that have not been processed within the expected time frame. Proactive follow-ups can help expedite claim resolutions and prevent unnecessary delays.
      <br/><br/>
      
      <b className='text-orange-600'>Detailed Reporting:</b> Generate detailed reports on claim statuses to analyze patterns and identify areas for improvement. Comprehensive reporting aids in understanding the efficiency of your claims processing.
      <br/><br/>
      
      <b className='text-orange-600'>Communication with Insurers:</b> Maintain open lines of communication with insurance providers to address any issues or clarifications needed for claim processing. Effective communication can help resolve disputes and ensure smoother claim management.
    </p>
  </div>
</div>

<div id='claim-documentation' className="mt-16 mb-12">
  <h2 className="text-3xl poppins-bold text-gray-800 mb-4">Claim Documentation</h2>
  <div>
    <p className="poppins-light text-gray-600">
      <b>Claim Documentation</b> is essential for ensuring that each claim is processed smoothly and efficiently. Maintaining accurate and comprehensive documentation helps prevent delays and facilitates a quicker resolution of claims. Key aspects include:
      <br/><br/>
      
      <b className='text-orange-600'>Complete Records:</b> Keep detailed records for each claim, including all relevant documentation such as patient information, treatment details, and billing statements. Complete records ensure that all necessary information is available for processing.
      <br/><br/>
      
      <b className='text-orange-600'>Verification of Information:</b> Verify the accuracy of the documentation before submission. Ensure that all details are correct and that there are no discrepancies that could lead to delays or denials.
      <br/><br/>
      
      <b className='text-orange-600'>Organized Filing:</b> Organize documentation systematically for easy retrieval and review. An organized filing system helps in quickly accessing documents when needed and facilitates efficient claim processing.
      <br/><br/>
      
      <b className='text-orange-600'>Regular Updates:</b> Update documentation regularly to reflect any changes or additional information. Keeping documentation up-to-date ensures that the claims process remains smooth and that all relevant information is included.
    </p>
  </div>
</div>
<div id='dispute-resolution' className="mt-16 mb-12">
  <h2 className="text-3xl poppins-bold text-gray-800 mb-4">Dispute Resolution</h2>
  <div>
    <p className="poppins-light text-gray-600">
      <b>Dispute Resolution</b> is vital for addressing and resolving any issues or disputes related to pending claims, ensuring that accurate reimbursements are achieved. Effective dispute resolution processes help to prevent delays and ensure fair outcomes. Key aspects include:
      <br/><br/>
      
      <b className='text-orange-600'>Timely Response:</b> Address disputes promptly to avoid prolonged delays. Quick responses help to expedite the resolution process and prevent issues from escalating.
      <br/><br/>
      
      <b className='text-orange-600'>Clear Communication:</b> Maintain clear and open communication with all parties involved. Provide detailed explanations and documentation to support your position and facilitate a resolution.
      <br/><br/>
      
      <b className='text-orange-600'>Thorough Investigation:</b> Investigate the dispute thoroughly to understand the root cause. Review all relevant documentation and records to gather accurate information for resolving the issue.
      <br/><br/>
      
      <b className='text-orange-600'>Document Resolutions:</b> Keep detailed records of the dispute resolution process, including decisions made and any agreements reached. Accurate documentation helps in future reference and prevents recurrence of similar issues.
    </p>
  </div>
</div>
<div id='financial-recovery' className="mt-16 mb-12">
  <h2 className="text-3xl poppins-bold text-gray-800 mb-4">Financial Recovery</h2>
  <div>
    <p className="poppins-light text-gray-600">
      <b>Financial Recovery</b> is essential for maximizing your practice's revenue by optimizing claim submissions and follow-up processes. Effective financial recovery strategies help ensure that you receive the full amount owed to you and maintain a healthy cash flow. Key aspects include:
      <br/><br/>
      
      <b className='text-orange-600'>Optimize Claim Submissions:</b> Ensure that claims are submitted accurately and promptly. Use detailed and complete information to reduce the likelihood of rejections and denials.
      <br/><br/>
      
      <b className='text-orange-600'>Efficient Follow-Ups:</b> Implement a systematic approach for following up on claims. Regularly check the status of claims and address any issues or delays to expedite the recovery process.
      <br/><br/>
      
      <b className='text-orange-600'>Analyze Claim Rejections:</b> Review rejected claims to identify common issues or patterns. Use this analysis to improve future claim submissions and reduce the frequency of denials.
      <br/><br/>
      
      <b className='text-orange-600'>Leverage Technology:</b> Utilize financial management and claims processing software to streamline recovery efforts. Automated tools can assist in tracking claims, managing follow-ups, and generating reports for better financial oversight.
    </p>
  </div>
</div>
</motion.div>

    </div>
  );
}

export default PendingClaims;
