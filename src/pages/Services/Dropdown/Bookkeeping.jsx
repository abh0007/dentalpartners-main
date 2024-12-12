import React, { useEffect } from 'react';
import { FaCalculator, FaMoneyBillWave, FaFileInvoice, FaChartLine, FaUsers } from 'react-icons/fa';
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

function Bookkeeping() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Helper function to handle smooth scrolling
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
      >
        Bookkeeping and Accounting
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-sm md:text-md text-gray-600 text-center mb-12 poppins-light"
      >
        As a dentist, you do not have the bandwidth to keep up with accounting on a daily basis. You probably are using QuickBooks or accounting software that captures your transactions. You are following a cash-based accounting model that will not truly reflect the value of the practice when you plan to sell your practice as it does not account for future cash flows. We will help you move to accrual-based accounting and keep your records straight.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      
        initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
  transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Accurate Financial Tracking */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          className="text-center border border-gray-300 rounded-lg p-4 hover:border-orange-500 max-w-xs mx-auto flex flex-col justify-between"
        >
          <div className="mb-4 flex justify-center">
            <FaCalculator className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Accurate Financial Tracking</h2>
          <p className="text-gray-600 poppins-light text-sm">
            Implement precise tracking of all financial transactions and expenses to maintain clarity in your practice’s finances.
          </p>
          <button 
            className="text-orange-600 mt-4 border border-orange-600 py-2 px-4 rounded-full hover:bg-orange-600 hover:text-white transition"
            onClick={() => scrollToSection('accurate-financial-tracking')}
          >
            Learn More
          </button>
        </motion.div>

        {/* Streamlined Billing and Invoicing */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          className="text-center border border-gray-300 rounded-lg p-6  hover:border-orange-500 max-w-xs mx-auto flex flex-col justify-between"
        >
          <div className="mb-4 flex justify-center">
            <FaFileInvoice className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Streamlined Billing and Invoicing</h2>
          <p className="text-gray-600 poppins-light text-sm">
            Simplify your billing and invoicing processes to ensure timely and accurate payments, reducing administrative overhead.
          </p>
          <button 
            className="text-orange-600 mt-4 border border-orange-600 py-2 px-4 rounded-full hover:bg-orange-600 hover:text-white transition"
            onClick={() => scrollToSection('streamlined-billing-and-invoicing')}
          >
            Learn More
          </button>
        </motion.div>

        {/* Financial Reporting */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          className="text-center border border-gray-300 rounded-lg p-6 hover:border-orange-500 max-w-xs mx-auto flex flex-col justify-between"
        >
          <div className="mb-4 flex justify-center">
            <FaChartLine className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Financial Reporting</h2>
          <p className="text-gray-600 poppins-light text-sm">
            Generate detailed financial reports to monitor performance, analyze trends, and make informed business decisions.
          </p>
          <button 
            className="text-orange-600 mt-4 border border-orange-600 py-2 px-4 rounded-full hover:bg-orange-600 hover:text-white transition"
            onClick={() => scrollToSection('financial-reporting')}
          >
            Learn More
          </button>
        </motion.div>

        {/* Revenue Management */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          className="text-center border border-gray-300 rounded-lg p-6 hover:border-orange-500 max-w-xs mx-auto flex flex-col justify-between"
        >
          <div className="mb-4 flex justify-center">
            <FaMoneyBillWave className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Revenue Management</h2>
          <p className="text-gray-600 poppins-light text-sm">
            Effectively manage your revenue streams to enhance cash flow and optimize profitability.
          </p>
          <button 
            className="text-orange-600 mt-4 border border-orange-600 py-2 px-4 rounded-full hover:bg-orange-600 hover:text-white transition"
            onClick={() => scrollToSection('revenue-management')}
          >
            Learn More
          </button>
        </motion.div>

        {/* Staff and Payroll Management */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          className="text-center border border-gray-300 rounded-lg p-6 hover:border-orange-500 max-w-xs mx-auto flex flex-col justify-between"
        >
          <div className="mb-4 flex justify-center">
            <FaUsers className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Staff and Payroll Management</h2>
          <p className="text-gray-600 poppins-light text-sm">
            Ensure accurate payroll management and maintain detailed records for all staff to ensure compliance and satisfaction.
          </p>
          <button 
            className="text-orange-600 mt-4 border border-orange-600 py-2 px-4 rounded-full hover:bg-orange-600 hover:text-white transition"
            onClick={() => scrollToSection('staff-management')}
          >
            Learn More
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}>
      <div id='accurate-financial-tracking' className="mt-16 mb-12">
        <h2 className="text-3xl poppins-bold text-gray-800   mb-4">Accurate Financial Tracking</h2>
        <div>
  <p className="poppins-light text-gray-600">
    <b>Accurate Financial Tracking</b> is crucial for maintaining clear and precise records of your practice's finances. Implementing meticulous tracking of all financial transactions and expenses can help ensure transparency and efficient financial management. Key aspects include:
    <br/><br/>
    
    <b className='text-orange-600'>Detailed Records:</b> Keep comprehensive records of every financial transaction, including patient payments, insurance reimbursements, and operational expenses. This thorough documentation aids in accurate financial reporting and analysis.
    <br/><br/>
    
    <b className='text-orange-600'>Regular Reconciliation:</b> Regularly reconcile your financial records with bank statements and accounting software to identify and resolve discrepancies. This practice helps maintain the integrity of your financial data.
    <br/><br/>
    
    <b className='text-orange-600'>Expense Tracking:</b> Track all business-related expenses diligently, categorizing them appropriately. Accurate expense tracking ensures proper budgeting, financial forecasting, and tax preparation.
    <br/><br/>
    
    <b className='text-orange-600'>Use Financial Software:</b> Utilize reliable financial management software to streamline the tracking process. Automated tools can assist in managing invoices, processing payments, and generating financial reports with ease.
  </p>
</div>

        </div>


<div id='streamlined-billing-and-invoicing' className="mt-16 mb-12">
  <h2 className="text-3xl poppins-bold text-gray-800   mb-4">Streamlined Billing and Invoicing</h2>
  <div>
  <p className="poppins-light text-gray-600">
    <b>Streamlined Billing and Invoicing</b> is crucial for ensuring timely and accurate payments while minimizing administrative overhead. Implement these practices to enhance efficiency:
    <br/><br/>
    
    <b className='text-orange-600'>Automated Billing Systems:</b> Utilize automated billing systems to streamline invoicing processes, reduce manual errors, and accelerate payment collection. Automation helps in generating invoices quickly and sending them to clients without delays.
    <br/><br/>
    
    <b className='text-orange-600'>Clear and Detailed Invoices:</b> Ensure invoices are clear, detailed, and easy to understand. Include all necessary information such as service descriptions, amounts, due dates, and payment instructions to avoid confusion and disputes.
    <br/><br/>
    
    <b className='text-orange-600'>Integrated Payment Gateways:</b> Implement integrated payment gateways to facilitate easy and secure online payments. Offering multiple payment options can enhance convenience for clients and accelerate the payment process.
    <br/><br/>
    
    <b className='text-orange-600'>Regular Follow-ups:</b> Set up automated reminders and follow-ups for overdue invoices. Timely reminders can help in prompt payment and reduce the need for manual intervention.
    <br/><br/>
    
    <b className='text-orange-600'>Comprehensive Reporting:</b> Utilize reporting tools to track billing and payment trends. Regularly review reports to identify any discrepancies, optimize billing practices, and improve financial management.
  </p>
</div>

  </div>


    <div id='financial-reporting' className="mt-16 mb-12">
      <h2 className="text-3xl poppins-bold text-gray-800   mb-4">Financial Reporting</h2>
      <div>
  <p className="poppins-light text-gray-600">
    <b>Streamlined Billing and Invoicing</b> is essential for ensuring timely and accurate payments while minimizing administrative overhead. Simplify your billing processes with the following key practices:
    <br/><br/>
    
    <b className='text-orange-600'>Automated Invoicing:</b> Use automated invoicing systems to generate and send invoices quickly and accurately. Automation reduces manual errors and accelerates the billing process.
    <br/><br/>
    
    <b className='text-orange-600'>Clear Itemization:</b> Ensure invoices are detailed and clearly itemized, specifying services provided and associated costs. This transparency helps patients understand their charges and facilitates prompt payment.
    <br/><br/>
    
    <b className='text-orange-600'>Online Payment Options:</b> Offer multiple online payment options to provide convenience for patients. Accepting payments electronically speeds up the payment process and reduces administrative work.
    <br/><br/>
    
    <b className='text-orange-600'>Regular Follow-Ups:</b> Implement a system for tracking unpaid invoices and sending reminders for overdue payments. Regular follow-ups help manage cash flow and reduce outstanding balances.
    <br/><br/>
    
    <b className='text-orange-600'>Integrated Billing Systems:</b> Integrate your billing system with practice management software to streamline the invoicing process and ensure accurate data entry.
  </p>
</div>
</div>

<div id='revenue-management' className="mt-16 mb-12">
<h2 className="text-3xl poppins-bold text-gray-800   mb-4">Revenue Management</h2>
<div>
  <p className="poppins-light text-gray-600">
    <b>Revenue Management</b> is crucial for optimizing your practice's profitability and maintaining healthy cash flow. Implement the following strategies to manage revenue streams effectively:
    <br/><br/>
    
    <b className='text-orange-600'>Analyze Revenue Streams:</b> Regularly review and analyze all sources of revenue to identify trends and opportunities for growth. Understanding where your revenue is coming from helps you make informed business decisions.
    <br/><br/>
    
    <b className='text-orange-600'>Optimize Pricing Strategies:</b> Adjust pricing based on market conditions, service costs, and patient demographics to ensure competitive and profitable pricing models.
    <br/><br/>
    
    <b className='text-orange-600'>Monitor Cash Flow:</b> Implement tools and processes to track cash flow, ensuring that you have enough liquidity to meet operational expenses and invest in growth opportunities.
    <br/><br/>
    
    <b className='text-orange-600'>Reduce Uncollected Revenue:</b> Improve collection processes and follow up on overdue payments to minimize revenue loss from uncollected bills.
    <br/><br/>
    
    <b className='text-orange-600'>Leverage Financial Reports:</b> Utilize financial reports and analytics to track performance, forecast future revenue, and identify areas for improvement.
  </p>
</div>

</div>

<div id='staff-management' className="mt-16 mb-12">
  <h2 className='text-3xl poppins-bold text-gray-800   mb-4'>Staff Management & Payroll</h2>
  <div>
  <p className="poppins-light text-gray-600">
    <b>Staff and Payroll Management</b> is essential for maintaining operational efficiency and ensuring compliance with labor regulations. Implement these best practices to manage payroll and staff effectively:
    <br/><br/>
    
    <b className='text-orange-600'>Accurate Payroll Processing:</b> Ensure timely and precise payroll calculations, including deductions, benefits, and overtime. Implement payroll systems that automate calculations to reduce errors and administrative burden.
    <br/><br/>
    
    <b className='text-orange-600'>Maintain Detailed Records:</b> Keep comprehensive records of all staff-related information, including employment history, performance evaluations, and attendance. This helps in compliance with legal requirements and facilitates effective management.
    <br/><br/>
    
    <b className='text-orange-600'>Compliance with Labor Laws:</b> Stay updated on labor laws and regulations to ensure your practices comply with wage and hour laws, tax requirements, and employee rights.
    <br/><br/>
    
    <b className='text-orange-600'>Staff Satisfaction:</b> Regularly review and address staff concerns related to payroll and benefits to maintain high levels of job satisfaction and retention. Conduct periodic surveys to gather feedback and make necessary improvements.
    <br/><br/>
    
    <b className='text-orange-600'>Efficient Onboarding and Offboarding:</b> Implement smooth processes for onboarding new employees and offboarding departing staff. Ensure that all payroll and administrative tasks are completed accurately and promptly.
  </p>
</div>
</div>
</motion.div>
    </div>
  );
}

export default Bookkeeping;
