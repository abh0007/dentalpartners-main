import React, { useEffect } from 'react';
import { FaBullhorn, FaChartPie, FaCogs, FaRegStar } from 'react-icons/fa';
import { inView, motion } from 'framer-motion';

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

function MarketingMaintenance() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const navbarHeight = document.querySelector('nav').offsetHeight;
    
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
      >   Marketing & Maintenance
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-sm md:text-md text-gray-600 text-center mb-12 poppins-light"
      >
      Just as neglecting regular dental care harms oral health, overlooking follow-up optimization for your website and marketing can hinder your practice’s growth. A one-time marketing effort without ongoing maintenance is like a single teeth cleaning with no future care. Our specialized dental marketing maintenance services ensure your strategies remain optimized. While you focus on exceptional patient care, we handle SEO, social media, email marketing, reactivation campaigns, analytics, and more, freeing up your time and ensuring optimal results
  </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
  transition={{ duration: 0.8, delay: 0.2 }}>
        {/* Marketing Strategies */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.05,duration: 0.2 }}
          className="text-center border hover:border-orange-500 border-gray-300 rounded-lg p-4 flex flex-col justify-between h-full"
        >
          <div>
            <div className="mb-4 flex justify-center">
              <FaBullhorn className="text-4xl text-orange-500" />
            </div>
            <h2 className="text-xl poppins-medium text-gray-800 mb-2">Marketing Strategies</h2>
            <p className="text-gray-600 poppins-light text-sm mb-4">
              Develop and implement effective marketing strategies to boost your practice’s visibility.
            </p>
          </div>
          <button onClick={() => scrollToSection('marketing-strategies')} className="w-full text-orange-600 border border-orange-600 py-2 px-4 rounded-full hover:bg-orange-600 hover:text-white transition">
            Learn More
          </button>
        </motion.div>

        {/* Analytics and Reporting */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.05,duration: 0.2 }}
          className="text-center border hover:border-orange-500 border-gray-300 rounded-lg p-4 flex flex-col justify-between h-full"
        >
          <div>
            <div className="mb-4 flex justify-center">
              <FaChartPie className="text-4xl text-orange-500" />
            </div>
            <h2 className="text-xl poppins-medium text-gray-800 mb-2">Analytics and Reporting</h2>
            <p className="text-gray-600 poppins-light text-sm mb-4">
              Track and analyze marketing performance to make data-driven decisions.
            </p>
          </div>
          <button onClick={() => scrollToSection('analytics-and-reporting')} className="w-full text-orange-600 border border-orange-600 py-2 px-4 rounded-full hover:bg-orange-600 hover:text-white transition">
            Learn More
          </button>
        </motion.div>

        {/* Ongoing Maintenance */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.05,duration: 0.2 }}
          className="text-center border hover:border-orange-500 border-gray-300 rounded-lg p-4 flex flex-col justify-between h-full"
        >
          <div>
            <div className="mb-4 flex justify-center">
              <FaCogs className="text-4xl text-orange-500" />
            </div>
            <h2 className="text-xl poppins-medium text-gray-800 mb-2">Ongoing Maintenance</h2>
            <p className="text-gray-600 poppins-light text-sm mb-4">
              Regular updates and maintenance to keep your marketing tools and platforms running smoothly.
            </p>
          </div>
          <button onClick={() => scrollToSection('ongoing-maintenance')} className="w-full text-orange-600 border border-orange-600 py-2 px-4 rounded-full hover:bg-orange-600 hover:text-white transition">
            Learn More
          </button>
        </motion.div>

        {/* Customer Feedback */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.05,duration: 0.2 }}
          className="text-center border hover:border-orange-500 border-gray-300 rounded-lg p-4 flex flex-col justify-between h-full"
        >
          <div>
            <div className="mb-4 flex justify-center">
              <FaRegStar className="text-4xl text-orange-500" />
            </div>
            <h2 className="text-xl poppins-medium text-gray-800 mb-2">Customer Feedback</h2>
            <p className="text-gray-600 poppins-light text-sm mb-4">
              Gather and analyze customer feedback to continuously improve your services and customer satisfaction.
            </p>
          </div>
          <button onClick={() => scrollToSection('customer-feedback')} className="w-full text-orange-600 border border-orange-600 py-2 px-4 rounded-full hover:bg-orange-600 hover:text-white transition">
            Learn More
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}>
      <div id='marketing-strategies' className="mt-16 mb-12">
  <h2 className="text-3xl poppins-bold text-gray-800 mb-4">Marketing Strategies</h2>
  <div>
    <p className="poppins-light text-gray-600">
      Our <b className='text-orange-600'>Marketing Strategies</b> are designed to enhance your practice's visibility and attract more clients. Implementing a well-rounded marketing approach helps in building a strong brand presence and increasing patient engagement. Key elements include:
      <br/><br/>
      
      <b className='text-orange-600'>Targeted Campaigns:</b> Develop marketing campaigns tailored to your target audience to ensure your messages reach potential patients effectively. Utilize demographic data and patient insights to refine your approach.
      <br/><br/>
      
      <b className='text-orange-600'>Digital Marketing:</b> Leverage digital platforms such as social media, search engine optimization (SEO), and online advertising to boost your online presence and drive traffic to your website.
      <br/><br/>
      
      <b className='text-orange-600'>Content Marketing:</b> Create valuable content, including blog posts, videos, and infographics, to engage your audience and establish your practice as an authority in your field.
      <br/><br/>
      
      <b className='text-orange-600'>Community Engagement:</b> Participate in local events, sponsor community activities, and collaborate with other healthcare providers to build relationships and enhance your reputation within the community.
      <br/><br/>
      
      <b className='text-orange-600'>Patient Referrals:</b> Implement a referral program to encourage satisfied patients to recommend your practice to family and friends, expanding your reach through word-of-mouth.
      <br/><br/>
      
      <b className='text-orange-600'>Performance Analytics:</b> Monitor the effectiveness of your marketing strategies through analytics and adjust your approach based on data-driven insights to continuously improve your marketing efforts.
    </p>
  </div>
</div>
<div id='analytics-and-reporting' className="mb-12">
  <h2 className="text-3xl poppins-bold text-gray-800 mb-4">Analytics and Reporting</h2>
  <div>
    <p className="poppins-light text-gray-600">
      Our <b className='text-orange-600'>Analytics and Reporting</b> services are essential for tracking and analyzing marketing performance, enabling you to make informed, data-driven decisions. By leveraging detailed insights, you can optimize your strategies and improve overall effectiveness. Key components include:
      <br/><br/>
      
      <b className='text-orange-600'>Performance Metrics:</b> Monitor key performance indicators (KPIs) such as website traffic, conversion rates, and engagement levels to assess the success of your marketing efforts.
      <br/><br/>
      
      <b className='text-orange-600'>Campaign Analysis:</b> Evaluate the performance of individual marketing campaigns through detailed reports, identifying what works and what needs adjustment for better results.
      <br/><br/>
      
      <b className='text-orange-600'>Customer Insights:</b> Analyze customer behavior and feedback to understand their preferences and needs, allowing for more targeted and effective marketing strategies.
      <br/><br/>
      
      <b className='text-orange-600'>ROI Measurement:</b> Calculate the return on investment (ROI) for your marketing activities to ensure that resources are allocated efficiently and are generating the desired outcomes.
      <br/><br/>
      
      <b className='text-orange-600'>Regular Reporting:</b> Generate regular reports to track progress over time, helping you stay informed about the effectiveness of your marketing strategies and making it easier to adjust tactics as needed.
      <br/><br/>
      
      <b className='text-orange-600'>Data-Driven Decisions:</b> Utilize insights from analytics to refine and enhance your marketing strategies, ensuring that decisions are based on reliable data and contributing to continuous improvement.
    </p>
  </div>
</div>
<div id='ongoing-maintenance' className="mb-12">
  <h2 className="text-3xl poppins-bold text-gray-800 mb-4">Ongoing Maintenance</h2>
  <div>
    <p className="poppins-light text-gray-600">
      Our <b className='text-orange-600'>Ongoing Maintenance</b> service ensures that your marketing tools and platforms remain operational and up-to-date. Regular updates and maintenance are crucial for maximizing performance, security, and user experience. Key aspects include:
      <br/><br/>
      
      <b className='text-orange-600'>Software Updates:</b> Regularly update your marketing software and tools to incorporate the latest features, security patches, and improvements, ensuring optimal functionality and protection against vulnerabilities.
      <br/><br/>
      
      <b className='text-orange-600'>Performance Monitoring:</b> Continuously monitor the performance of your marketing platforms to identify and address any issues that may arise. This proactive approach helps in maintaining smooth operation and preventing potential disruptions.
      <br/><br/>
      
      <b className='text-orange-600'>Bug Fixes:</b> Promptly address and resolve any bugs or technical issues that could affect the performance of your marketing tools. Regular maintenance helps in maintaining reliability and user satisfaction.
      <br/><br/>
      
      <b className='text-orange-600'>Compatibility Checks:</b> Ensure that your marketing tools and platforms remain compatible with new technologies and updates. This prevents functionality issues and ensures seamless integration with other systems.
      <br/><br/>
      
      <b className='text-orange-600'>Data Backup:</b> Regularly back up your marketing data to protect against data loss and ensure that you can quickly recover in case of any unexpected issues.
      <br/><br/>
      
      <b className='text-orange-600'>User Support:</b> Provide ongoing support to address user queries and technical issues, ensuring that your team can effectively utilize marketing tools and platforms.
    </p>
  </div>
</div>
<div id='customer-feedback' className="mb-12">
  <h2 className="text-3xl poppins-bold text-gray-800 mb-4">Customer Feedback</h2>
  <div>
    <p className="poppins-light text-gray-600">
      Our <b className='text-orange-600'>Customer Feedback</b> service focuses on collecting and analyzing feedback to enhance service quality and customer satisfaction. Actively seeking and understanding customer opinions helps in making informed improvements and building stronger relationships. Key aspects include:
      <br/><br/>
      
      <b className='text-orange-600'>Feedback Collection:</b> Utilize various methods to gather customer feedback, including surveys, interviews, and online reviews. Implementing multiple channels ensures you capture a wide range of perspectives and experiences.
      <br/><br/>
      
      <b className='text-orange-600'>Data Analysis:</b> Analyze the collected feedback to identify common themes, trends, and areas for improvement. This analysis helps in understanding customer needs and preferences, guiding strategic decisions and service enhancements.
      <br/><br/>
      
      <b className='text-orange-600'>Actionable Insights:</b> Translate feedback into actionable insights by developing strategies and initiatives to address identified issues. This proactive approach leads to meaningful improvements and better aligns your services with customer expectations.
      <br/><br/>
      
      <b className='text-orange-600'>Continuous Improvement:</b> Implement changes based on feedback and monitor the impact on customer satisfaction. Regularly updating your approach ensures that your services evolve with customer needs and industry standards.
      <br/><br/>
      
      <b className='text-orange-600'>Engagement:</b> Engage with customers to acknowledge their feedback and inform them about the improvements made. This fosters a positive relationship and demonstrates your commitment to enhancing their experience.
    </p>
  </div>
</div>
</motion.div>

    </div>
  );
}

export default MarketingMaintenance;
