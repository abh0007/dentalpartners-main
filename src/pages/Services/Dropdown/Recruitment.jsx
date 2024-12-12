import React, { useEffect } from 'react';
import { FaClock, FaFileAlt, FaExclamationTriangle, FaHandHoldingUsd, FaUsers, FaClipboardCheck, FaUserTie, FaHandshake } from 'react-icons/fa';
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

function Recruitment() {

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
        Recruitment Services
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-sm md:text-md text-gray-600 text-center mb-12 poppins-light"
      >
           Looking for top talent to drive your business forward? Our recruitment services are designed to help you find the perfect candidates for your job openings. Whether you need to fill entry-level positions or executive roles, we have the expertise to attract and evaluate the best candidates for your organization. How can we assist you in your hiring process today?
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
          <FaUsers className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Talent Sourcing</h2>
          <p className="text-gray-600 poppins-light text-sm mb-4">
          Identifying and attracting potential candidates for specific job roles using various sourcing strategies.       </p>
          <button
            className="text-orange-600 border border-orange-600 py-2 px-4 rounded-full hover:bg-orange-600 hover:text-white transition"
            onClick={() => scrollToSection('talent-sourcing')}
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
          <FaClipboardCheck className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-lg poppins-medium text-gray-800 mb-2">Candidate Screening</h2>
          <p className="text-gray-600 poppins-light text-sm mb-4">
          Evaluating applicants based on their skills, qualifications, and fit for the role, ensuring only the best candidates are considered.
          </p>
          <button
            className="text-orange-600 border border-orange-600 py-2 px-4 rounded-full hover:bg-orange-600 hover:text-white transition"
            onClick={() => scrollToSection('candidate-screening')}
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
          <FaUserTie className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Executive Recruitment</h2>
          <p className="text-gray-600 poppins-light text-sm mb-4">
          Focusing on finding top-tier candidates for senior leadership roles, ensuring they align with the company’s vision and strategy.
          </p>
          <button
            className="text-orange-600 border border-orange-600 py-2 px-4 rounded-full hover:bg-orange-600 hover:text-white transition"
            onClick={() => scrollToSection('executive-recruitment')}
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
          <FaHandshake className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Job Offer Management</h2>
          <p className="text-gray-600 poppins-light text-sm mb-4">
          Handling job offers, negotiations, and ensuring candidates have a seamless onboarding experience.
          </p>
          <button
            className="text-orange-600 border border-orange-600 py-2 px-4 rounded-full hover:bg-orange-600 hover:text-white transition"
            onClick={() => scrollToSection('job-offer-management')}
          >
            Learn More
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}>

<div id='talent-sourcing' className="mt-20 mb-12">
  <h2 className="text-3xl poppins-bold text-gray-800 mb-4 ">Talent Sourcing</h2>
  <div>
    <p className="poppins-light text-gray-600">
      Our <b className='text-orange-600'>Talent Sourcing</b> service is designed to help you identify and attract the right candidates for specific job roles using a range of effective sourcing strategies. This process is crucial for building a strong team and ensuring that you have the right talent to drive your business forward. Key aspects include:
      <br/><br/>
      
      <b className='text-orange-600'>Strategic Sourcing:</b> Utilize various sourcing strategies, including job boards, social media, industry events, and networking, to identify potential candidates. This approach helps in reaching a broad and diverse talent pool.
      <br/><br/>
      
      <b className='text-orange-600'>Talent Mapping:</b> Conduct talent mapping to understand the market landscape and identify key individuals with the skills and experience needed for your roles. This proactive approach ensures you are aware of top talent even before vacancies arise.
      <br/><br/>
      
      <b className='text-orange-600'>Engagement:</b> Engage with potential candidates through personalized communication and targeted outreach. Building relationships with prospective talent helps in creating a positive impression and increasing their interest in your opportunities.
      <br/><br/>
      
      <b className='text-orange-600'>Evaluation:</b> Assess candidates based on their skills, experience, and cultural fit for your organization. Implement structured evaluation methods to ensure you identify the best fit for your specific job roles.
      <br/><br/>
      
      <b className='text-orange-600'>Continuous Improvement:</b> Continuously refine your sourcing strategies based on market trends, feedback, and outcomes. This iterative approach ensures you remain competitive and effective in attracting top talent.
    </p>
  </div>
</div>




<div id='candidate-screening' className="mb-12">
  <h2 className="text-3xl poppins-bold text-gray-800 mb-4">Candidate Screening</h2>
  <div>
    <p className="poppins-light text-gray-600">
      Our <b className='text-orange-600'>Candidate Screening</b> service is essential for evaluating applicants to ensure that only the best candidates are considered for your job openings. This process involves a thorough assessment of skills, qualifications, and overall fit for the role. Key aspects include:
      <br/><br/>
      
      <b className='text-orange-600'>Skills Assessment:</b> Evaluate candidates based on their technical and soft skills through various assessment methods, including tests, assignments, and practical exercises. This ensures that applicants have the necessary competencies for the role.
      <br/><br/>
      
      <b className='text-orange-600'>Qualifications Review:</b> Review educational backgrounds, certifications, and professional experiences to ensure candidates meet the job's minimum requirements and possess the relevant qualifications.
      <br/><br/>
      
      <b className='text-orange-600'>Cultural Fit:</b> Assess candidates' alignment with your organization's values, culture, and work environment. This ensures that they will integrate well into your team and contribute positively to your company culture.
      <br/><br/>
      
      <b className='text-orange-600'>Structured Interviews:</b> Conduct structured interviews with standardized questions to evaluate candidates consistently. This helps in comparing candidates objectively and making informed decisions.
      <br/><br/>
      
      <b className='text-orange-600'>Background Checks:</b> Perform thorough background checks, including reference checks and employment verification, to validate candidates' claims and assess their reliability and integrity.
      <br/><br/>
      
      <b className='text-orange-600'>Decision Making:</b> Use the gathered information to make informed hiring decisions, ensuring that selected candidates are the best fit for the role and your organization.
    </p>
  </div>
</div>





<div id='executive-recruitment' className="mb-12">
  <h2 className="text-3xl poppins-bold text-gray-800 mb-4">Executive Recruitment</h2>
  <div>
    <p className="poppins-light text-gray-600">
      Our <b className='text-orange-600'>Executive Recruitment</b> service specializes in identifying and attracting top-tier candidates for senior leadership roles. This process ensures that candidates align with your company's vision, strategy, and organizational goals. Key elements include:
      <br/><br/>
      
      <b className='text-orange-600'>Strategic Sourcing:</b> Employ targeted strategies to locate and engage high-caliber executives who possess the skills, experience, and leadership qualities required for senior roles.
      <br/><br/>
      
      <b className='text-orange-600'>Alignment with Company Vision:</b> Assess candidates' alignment with your company's vision, values, and long-term strategy. This ensures they can effectively drive the company’s objectives and contribute to its growth.
      <br/><br/>
      
      <b className='text-orange-600'>Comprehensive Evaluation:</b> Conduct in-depth evaluations through executive assessments, interviews, and reference checks. This helps in assessing candidates' leadership capabilities, strategic thinking, and cultural fit.
      <br/><br/>
      
      <b className='text-orange-600'>Confidentiality and Discretion:</b> Maintain the highest levels of confidentiality throughout the recruitment process to protect both candidates' privacy and your organization's strategic interests.
      <br/><br/>
      
      <b className='text-orange-600'>Cultural and Strategic Fit:</b> Ensure candidates not only have the necessary qualifications but also fit within your company's culture and can align with its strategic goals.
      <br/><br/>
      
      <b className='text-orange-600'>Seamless Integration:</b> Facilitate a smooth transition and integration process for new executives, supporting their onboarding and helping them quickly adapt to their new role.
    </p>
  </div>
</div>


<div id='job-offer-management' className="mb-12">
  <h2 className="text-3xl poppins-bold text-gray-800 mb-4">Job Offer Management</h2>
  <div>
    <p className="poppins-light text-gray-600">
      Our <b className='text-orange-600'>Job Offer Management</b> service focuses on handling job offers, conducting negotiations, and ensuring a seamless onboarding experience for candidates. This process is crucial in securing top talent and setting them up for success in their new role. Key components include:
      <br/><br/>
      
      <b className='text-orange-600'>Offer Preparation:</b> Craft clear and compelling job offers that accurately reflect the role's responsibilities, compensation package, and benefits. Ensure that all terms are presented transparently to avoid misunderstandings.
      <br/><br/>
      
      <b className='text-orange-600'>Negotiation:</b> Manage offer negotiations professionally to address candidates' questions and concerns. Aim for a mutually beneficial agreement that aligns with the organization's budget and the candidate’s expectations.
      <br/><br/>
      
      <b className='text-orange-600'>Offer Acceptance:</b> Facilitate the acceptance process by providing guidance and support to candidates as they transition from offer to onboarding. Ensure that all necessary paperwork and formalities are completed efficiently.
      <br/><br/>
      
      <b className='text-orange-600'>Onboarding:</b> Oversee a smooth onboarding process, including orientation and integration activities. Ensure new hires are well-informed about company policies, procedures, and their role, leading to a successful start in their new position.
      <br/><br/>
      
      <b className='text-orange-600'>Candidate Support:</b> Provide ongoing support to candidates during the transition phase to address any concerns and ensure a positive experience as they join the organization.
    </p>
  </div>
</div>

</motion.div>

    </div>
  );
}

export default Recruitment;
