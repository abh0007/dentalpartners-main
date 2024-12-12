import React, { useEffect } from 'react';
import { FaClock, FaFileAlt, FaExclamationTriangle, FaHandHoldingUsd, FaChartLine, FaDatabase, FaRegChartBar, FaCogs } from 'react-icons/fa';
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

function Business() {

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
        Business Analyst
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-sm md:text-md text-gray-600 text-center mb-12 poppins-light"
      >
      A Business Analyst can significantly enhance the efficiency of a dental practice by optimizing operations, improving patient data management, and streamlining scheduling processes. They can also assist in financial management, helping to identify cost-saving opportunities and manage investments effectively. By analyzing practice performance metrics, a Business Analyst provides valuable insights for strategic decision-making and helps in adopting technologies that improve patient care and satisfaction. Their expertise in data-driven solutions and process improvements ensures a well-organized, financially sound, and patient-focused practice.      </motion.p>

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
          <FaChartLine className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Data Analytics</h2>
          <p className="text-gray-600 poppins-light text-sm mb-4">
          Analyzing and interpreting raw data to make informed business decisions, optimize processes, and identify trends.
          </p>
          <button
            className="text-orange-600 border border-orange-600 py-2 px-4 rounded-full hover:bg-orange-600 hover:text-white transition"
            onClick={() => scrollToSection('data-analytics')}
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
          <FaDatabase  className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-lg poppins-medium text-gray-800 mb-2">Data Warehousing</h2>
          <p className="text-gray-600 poppins-light text-sm mb-4">
          Storing and managing large volumes of structured and unstructured data in centralized systems for easy access and analysis.
          </p>
          <button
            className="text-orange-600 border border-orange-600 py-2 px-4 rounded-full hover:bg-orange-600 hover:text-white transition"
            onClick={() => scrollToSection('data-warehousing')}
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
          <FaRegChartBar className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Business Intelligence</h2>
          <p className="text-gray-600 poppins-light text-sm mb-4">
          Transforming raw data into meaningful insights and actionable strategies through reporting and visualization tools.
          </p>
          <button
            className="text-orange-600 border border-orange-600 py-2 px-4 rounded-full hover:bg-orange-600 hover:text-white transition"
            onClick={() => scrollToSection('business-intelligence')}
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
          <FaCogs className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Process Optimization</h2>
          <p className="text-gray-600 poppins-light text-sm mb-4">
          Using data to identify inefficiencies and improve workflows, reducing costs and increasing productivity.
          </p>
          <button
            className="text-orange-600 border border-orange-600 py-2 px-4 rounded-full hover:bg-orange-600 hover:text-white transition"
            onClick={() => scrollToSection('process-optimization')}
          >
            Learn More
          </button>
        </motion.div>
      </motion.div>



      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}>

<div id='data-analytics' className="mt-16 mb-12"> <h2 className="text-3xl poppins-bold text-gray-800 mb-4">Data Analytics</h2> <div> <p className="poppins-light text-gray-600"> <b>Data Analytics</b> plays a crucial role in leveraging data to drive business success. By examining and interpreting data, businesses can make more informed decisions, optimize their operations, and uncover valuable insights. Key aspects include: <br/><br/>
      
<b className='text-orange-600'>Informed Decision-Making:</b> Utilize data-driven insights to guide strategic choices, ensuring decisions are based on accurate information rather than guesswork. This approach helps in reducing risks and capitalizing on opportunities.
  <br/><br/>
  
  <b className='text-orange-600'>Process Optimization:</b> Identify inefficiencies and areas for improvement within your processes by analyzing data. Streamlining these workflows can lead to increased productivity and cost savings.
  <br/><br/>
  
  <b className='text-orange-600'>Trend Identification:</b> Analyze historical data to detect patterns and forecast future trends. This capability allows businesses to anticipate market shifts and adjust their strategies accordingly.
  <br/><br/>
  
  <b className='text-orange-600'>Enhanced Reporting:</b> Generate detailed reports that visualize key metrics and performance indicators. Comprehensive reporting supports better communication with stakeholders and aids in strategic planning.
 

    </p>
  </div>
</div>

<div id='data-warehousing' className="mt-16 mb-12"> <h2 className="text-3xl poppins-bold text-gray-800 mb-4">Data Warehousing</h2> <div> <p className="poppins-light text-gray-600"> <b>Data Warehousing</b> involves the systematic storage and management of large volumes of both structured and unstructured data within centralized systems. This approach facilitates easy access and efficient analysis. Key aspects include: <br/><br/>
      
<b className='text-orange-600'>Centralized Data Storage:</b> Consolidate data from various sources into a single, centralized repository. This unified storage enables more efficient data management and reduces the complexity of accessing information from disparate sources.
  <br/><br/>
  
  <b className='text-orange-600'>Enhanced Data Access:</b> Ensure that data is readily available for querying and reporting. Centralized data warehousing improves accessibility and speeds up the process of retrieving and analyzing information.
  <br/><br/>
  
  <b className='text-orange-600'>Support for Analytical Processing:</b> Design data warehouses to support complex queries and analytical processing. This capability allows for deep analysis and reporting on large datasets, providing valuable insights for decision-making.
  <br/><br/>
  
  <b className='text-orange-600'>Scalability and Flexibility:</b> Implement systems that can scale with growing data volumes and adapt to changing data requirements. This flexibility ensures that the data warehouse continues to meet evolving business needs.
</p>

  </div>
</div>
<div id='business-intelligence' className="mt-16 mb-12"> <h2 className="text-3xl poppins-bold text-gray-800 mb-4">Business Intelligence</h2> <div> <p className="poppins-light text-gray-600"> <b>Business Intelligence</b> (BI) is the process of transforming raw data into meaningful insights and actionable strategies through sophisticated reporting and visualization tools. This approach empowers businesses to make informed decisions and drive growth. Key aspects include: <br/><br/>
      
<b className='text-orange-600'>Data Transformation:</b> Convert raw data from various sources into structured formats that are easier to analyze. This transformation process ensures that the data is clean, consistent, and ready for insightful analysis.
  <br/><br/>
  
  <b className='text-orange-600'>Insightful Reporting:</b> Utilize advanced reporting tools to generate comprehensive reports that highlight key performance indicators (KPIs) and trends. These reports provide valuable insights into business performance and help in identifying opportunities for improvement.
  <br/><br/>
  
  <b className='text-orange-600'>Interactive Visualization:</b> Employ visualization tools to create interactive dashboards and charts. These visualizations help users quickly grasp complex data, spot patterns, and make data-driven decisions more effectively.
  <br/><br/>
  
  <b className='text-orange-600'>Strategic Decision-Making:</b> Use the insights gained from BI tools to develop actionable strategies. By understanding data trends and performance metrics, businesses can craft strategies that enhance efficiency, drive growth, and improve overall performance.
</p>

  </div>
</div>
<div id='process-optimization' className="mt-16 mb-12"> <h2 className="text-3xl poppins-bold text-gray-800 mb-4">Process Optimization</h2> <div> <p className="poppins-light text-gray-600"> <b>Process Optimization</b> involves leveraging data to identify inefficiencies and enhance workflows, ultimately aiming to reduce costs and boost productivity. This approach ensures that processes are as efficient as possible, benefiting the overall business performance. Key aspects include: <br/><br/>
<b className='text-orange-600'>Data-Driven Insights:</b> Analyze operational data to pinpoint areas where processes are lagging or where resources are being wasted. Data-driven insights help in understanding the root causes of inefficiencies and guide targeted improvements.
  <br/><br/>
  
  <b className='text-orange-600'>Workflow Enhancement:</b> Redesign workflows based on data findings to eliminate bottlenecks and streamline operations. Implement changes that simplify tasks, reduce redundancies, and improve the overall flow of work.
  <br/><br/>
  
  <b className='text-orange-600'>Cost Reduction:</b> Identify opportunities to cut costs by optimizing resource allocation and reducing unnecessary expenses. Effective process optimization can lead to significant savings by minimizing waste and improving resource utilization.
  <br/><br/>
  
  <b className='text-orange-600'>Productivity Increase:</b> Enhance productivity by implementing best practices and process improvements. Streamlined processes enable employees to work more efficiently, leading to faster project completion and higher output.
</p>

  </div>
</div>
</motion.div>

    </div>
  );
}

export default Business;
