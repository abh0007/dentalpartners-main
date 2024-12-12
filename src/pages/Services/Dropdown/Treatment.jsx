import React, { useEffect } from 'react';
import { FaCalendarAlt, FaStethoscope, FaHandsHelping, FaChartBar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Treatment() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

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
        transition={{ duration: 0.3 }}
        className="text-3xl poppins-bold text-gray-800 text-center mb-8"
      >
        Treatment Coordination
      </motion.h1>

      <motion.p
       initial={{ opacity: 0, y: 50 }}
       animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
       transition={{ duration: 0.4, delay: 0.1 }}
      className="text-sm md:text-md text-gray-600 text-center mb-12 poppins-light">
      Treatment Coordination Services help promote dental treatments and services by reaching out to potential patients with information on new treatments, special offers, and discounts. These services also educate patients on oral hygiene, preventive care, and the importance of regular dental visits. They provide a platform for patients to ask questions, give feedback, and address concerns, ensuring a higher level of satisfaction.
      </motion.p>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Scheduling Appointments */}
        <motion.div
          className="text-center border border-gray-300 rounded-lg p-4 flex flex-col justify-between"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="mb-4 flex justify-center">
            <FaCalendarAlt className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Scheduling Appointments</h2>
          <p className="text-gray-600 poppins-light text-sm mb-4">
            Efficiently schedule and manage patient appointments to streamline workflow.
          </p>
          <motion.button
            className="text-orange-600 border border-gray-300 py-2 px-4 rounded-full hover:border-orange-500 hover:bg-orange-600 hover:text-white transition"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('scheduling-appointments')}
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Treatment Planning */}
        <motion.div
          className="text-center border border-gray-300 rounded-lg p-4 flex flex-col justify-between"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="mb-4 flex justify-center">
            <FaStethoscope className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Treatment Planning</h2>
          <p className="text-gray-600 poppins-light text-sm mb-4">
            Develop comprehensive treatment plans to address patient needs effectively.
          </p>
          <motion.button
            className="text-orange-600 border border-gray-300 py-2 px-4 rounded-full hover:border-orange-500 hover:bg-orange-600 hover:text-white transition"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('treatment-planning')}
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Coordination with Specialists */}
        <motion.div
          className="text-center border border-gray-300 rounded-lg p-4 flex flex-col justify-between"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="mb-4 flex justify-center">
            <FaHandsHelping className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Coordination with Specialists</h2>
          <p className="text-gray-600 poppins-light text-sm mb-4">
            Collaborate with specialists to ensure integrated and thorough patient care.
          </p>
          <motion.button
            className="text-orange-600 border border-gray-300 py-2 px-4 rounded-full hover:border-orange-500 hover:bg-orange-600 hover:text-white transition"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('coordination-specialists')}
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Monitoring Progress */}
        <motion.div
          className="text-center border border-gray-300 rounded-lg p-4 flex flex-col justify-between"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="mb-4 flex justify-center">
            <FaChartBar className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Monitoring Progress</h2>
          <p className="text-gray-600 poppins-light text-sm mb-4">
            Track patient progress and treatment outcomes to ensure effective results.
          </p>
          <motion.button
            className="text-orange-600 border border-gray-300 py-2 px-4 rounded-full hover:border-orange-500 hover:bg-orange-600 hover:text-white transition"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('monitoring-progress')}
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Detailed Sections */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-16"
      >
     <div id='scheduling-appointments' className="mb-12">
  <h2 className="text-3xl poppins-bold text-gray-800 mb-4">Scheduling Appointments</h2>
  <div>
    <p className="poppins-light text-gray-600">
      Our <b className='text-orange-600'>Scheduling Appointments</b> feature is designed to optimize the management of patient bookings, enhancing the efficiency of your practice. This comprehensive solution simplifies the appointment scheduling process, addressing several key areas to improve overall workflow and patient experience:
      <br/><br/>
      
      <b className='text-orange-600'>Streamlined Booking:</b> Patients can easily book, reschedule, or cancel appointments through an intuitive online portal, reducing the need for manual intervention and minimizing scheduling errors.
      <br/><br/>
      
      <b className='text-orange-600'>Real-Time Availability:</b> Our system provides real-time updates on appointment availability, allowing patients to select times that fit their schedules and ensuring that slots are utilized effectively.
      <br/><br/>
      
      <b className='text-orange-600'>Automated Reminders:</b> Automated email and SMS reminders help reduce no-show rates by keeping patients informed of upcoming appointments and any required preparations.
      <br/><br/>
      
      <b className='text-orange-600'>Customization Options:</b> Patients can specify preferences for appointment times, doctors, or modes of consultation, whether in-person or telehealth, enhancing the overall patient experience.
      <br/><br/>
      
      <b className='text-orange-600'>Integration with EHR:</b> Seamlessly integrates with electronic health records (EHR) systems, providing healthcare providers with access to patient information and history for better preparation and personalized care.
    </p>
  </div>
</div>

<div id='treatment-planning' className="mb-12">
  <h2 className="text-3xl poppins-bold text-gray-800 mb-4">Treatment Planning</h2>
  <div>
    <p className="poppins-light text-gray-600">
      Our <b className='text-orange-600'>Treatment Planning</b> service is designed to provide a systematic approach to creating and managing treatment plans that are tailored to each patient's unique needs. This comprehensive service enhances the overall quality of care and ensures that every aspect of a patient's health is addressed effectively. Key features include:
      <br/><br/>
      
      <b className='text-orange-600'>Personalized Plans:</b> Develop individualized treatment plans based on detailed patient assessments and medical history, ensuring that the care provided is specifically suited to each patient’s health conditions and goals.
      <br/><br/>
      
      <b className='text-orange-600'>Integrated Care:</b> Coordinate with various healthcare providers and specialists to ensure that all aspects of the patient’s treatment are aligned, leading to a more cohesive and efficient care process.
      <br/><br/>
      
      <b className='text-orange-600'>Ongoing Evaluation:</b> Regularly review and adjust treatment plans based on patient progress and feedback, ensuring that the care remains relevant and effective throughout the treatment process.
      <br/><br/>
      
      <b className='text-orange-600'>Advanced Tools:</b> Utilize advanced planning tools and software to streamline the planning process, making it easier to track and manage treatment plans and outcomes.
      <br/><br/>
      
      <b className='text-orange-600'>Patient Engagement:</b> Involve patients in their own treatment planning by providing them with clear information and options, which enhances their understanding and participation in their care journey.
    </p>
  </div>
</div>

<div id='coordination-specialists' className="mb-12">
  <h2 className="text-3xl poppins-bold text-gray-800 mb-4">Coordination with Specialists</h2>
  <div>
    <p className="poppins-light text-gray-600">
      Our <b className='text-orange-600'>Coordination with Specialists</b> service is designed to enhance the integration and collaboration between primary care providers and specialized healthcare professionals. This coordinated approach ensures that every aspect of a patient’s care is managed effectively, resulting in more comprehensive and effective treatment. Key features of this service include:
      <br/><br/>
      
      <b className='text-orange-600'>Seamless Communication:</b> Facilitate clear and efficient communication between primary care providers and specialists, ensuring that all relevant patient information is shared accurately and in a timely manner.
      <br/><br/>
      
      <b className='text-orange-600'>Integrated Care Plans:</b> Develop and manage care plans that include input from multiple specialists, ensuring that all aspects of a patient's condition are addressed in a cohesive and coordinated manner.
      <br/><br/>
      
      <b className='text-orange-600'>Shared Medical Records:</b> Utilize integrated health record systems to provide specialists with access to comprehensive patient information, enhancing their ability to make informed decisions and recommendations.
      <br/><br/>
      
      <b className='text-orange-600'>Streamlined Referrals:</b> Simplify the referral process by coordinating between providers, reducing delays, and ensuring that patients receive timely specialist care.
      <br/><br/>
      
      <b className='text-orange-600'>Continuous Follow-Up:</b> Monitor patient progress and ensure that follow-up appointments and consultations with specialists are scheduled and managed effectively, promoting ongoing care continuity.
    </p>
  </div>
</div>

<div id='monitoring-progress' className="mb-12">
  <h2 className="text-3xl poppins-bold text-gray-800 mb-4">Monitoring Progress</h2>
  <div>
    <p className="poppins-light text-gray-600">
      Our <b className='text-orange-600'>Monitoring Progress</b> feature is essential for tracking and evaluating patient progress throughout their treatment journey. This functionality ensures that treatment plans are continuously assessed and adjusted to meet the evolving needs of each patient, leading to optimized care and improved outcomes. Key components include:
      <br/><br/>
      
      <b className='text-orange-600'>Real-Time Tracking:</b> Monitor patient progress in real-time with up-to-date information on treatment responses, adherence, and any emerging concerns.
      <br/><br/>
      
      <b className='text-orange-600'>Outcome Evaluation:</b> Evaluate treatment outcomes based on predefined metrics and patient feedback, allowing for data-driven decisions to enhance care effectiveness.
      <br/><br/>
      
      <b className='text-orange-600'>Adjustable Treatment Plans:</b> Modify treatment plans as needed based on progress assessments and outcome evaluations to ensure that care remains aligned with patient goals and conditions.
      <br/><br/>
      
      <b className='text-orange-600'>Integrated Reporting:</b> Utilize integrated reporting tools to generate comprehensive progress reports that can be shared with patients and other healthcare providers, fostering transparent communication and collaborative care.
      <br/><br/>
      
      <b className='text-orange-600'>Enhanced Patient Engagement:</b> Engage patients in their own care by providing them with regular updates and involving them in the decision-making process to improve adherence and satisfaction.
    </p>
  </div>
</div>

      </motion.div>
    </div>
  );
}

export default Treatment;
