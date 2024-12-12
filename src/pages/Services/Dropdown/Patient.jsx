import React, { useEffect } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaUser, FaPhoneAlt, FaClipboardList, FaEnvelope, FaGoogle } from 'react-icons/fa';
import { inView, motion } from 'framer-motion';
import { InlineWidget } from 'react-calendly';
 
import { Link } from 'react-router-dom';
import { InView } from 'react-intersection-observer';


function Patient() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  // Helper function to handle smooth scrolling
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const navbarHeight = document.querySelector('nav').offsetHeight; // Get the navbar's height
    
    if (section) {
      window.scrollTo({
        top: section.offsetTop - navbarHeight, // Offset by the navbar height
        behavior: 'smooth' // Smooth scroll
      });
    }
  };

  return (
    <div className="md:mx-48 mx-4 px-4 py-10">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: InView ? 1 : 0, y: InView ? 0 : 50 }}
        transition={{ duration: 0.2, delay: 0 }}
      className="text-3xl poppins-bold text-gray-800 text-center mb-8">
        Patient Coordination
      </motion.h1>

      <motion.p
       initial={{ opacity: 0, y: 50 }}
       animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
       transition={{ duration: 0.4, delay: 0.1 }}
      className="text-sm md:text-md text-gray-600 text-center mb-12 poppins-light">
      <b>Did you know that</b>, on average, 30-35% of calls to dental offices go unanswered nationwide? A recent DentistryIQ survey revealed that while 80% of new patient calls are answered, less than half are converted into first appointments. In contrast, the top 10% of practices answer 95% of calls and convert 75% of them. As a busy dentist, managing patients, verifying insurance, and handling calls simultaneously is a challenge, even for the best front desk staff, making it difficult to achieve 100% accuracy and timeliness.
      </motion.p>

      {/* First Row of Cards */}
      <motion.div 
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
  
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  {/* Appointment Scheduling */}
  <motion.div
    className="text-center border border-gray-300 rounded-lg p-4 hover:border-orange-500 max-w-xs mx-auto flex flex-col justify-between"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
    whileHover={{ scale: 1.05 }}
  >
    <div>
      <div className="mb-4 flex justify-center">
        <FaCalendarAlt className="text-4xl text-orange-500" />
      </div>
      <h2 className="text-xl poppins-medium text-gray-800 mb-2">Appointment Scheduling</h2>
      <p className="text-gray-600 poppins-light text-sm">
        Faster scheduling with specialized teams for new patient appointments.
      </p>
    </div>
    <button 
      className="text-orange-600 mt-4 border border-orange-600 py-2  px-4 rounded-full hover:bg-orange-600 hover:text-white transition"
      onClick={() => scrollToSection('appointment-scheduling')}
    >
      Learn More
    </button>
  </motion.div>

  {/* Location Details */}
  <motion.div
    className="text-center border border-gray-300 rounded-lg p-4 hover:border-orange-500 max-w-xs mx-auto flex flex-col justify-between"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
    whileHover={{ scale: 1.05 }}
  >
    <div>
      <div className="mb-4 flex justify-center">
        <FaMapMarkerAlt className="text-4xl text-orange-500" />
      </div>
      <h2 className="text-xl poppins-medium text-gray-800 mb-2">Location Details</h2>
      <p className="text-gray-600 poppins-light text-sm">
        Clear guidance on public transport, parking, and landmarks for easy access.
      </p>
    </div>
    <button 
      className="text-orange-600 mt-4 border border-orange-600 py-2 px-4 rounded-full hover:bg-orange-600 hover:text-white transition"
      onClick={() => scrollToSection('location-details')}
    >
      Learn More
    </button>
  </motion.div>

  {/* Patient Demographics */}
  <motion.div
    className="text-center border border-gray-300 rounded-lg p-4 hover:border-orange-500 max-w-xs mx-auto flex flex-col justify-between"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
    whileHover={{ scale: 1.05 }}
  >
    <div>
      <div className="mb-4 flex justify-center">
        <FaUser className="text-4xl text-orange-500" />
      </div>
      <h2 className="text-xl poppins-medium text-gray-800 mb-2">Patient Demographics</h2>
      <p className="text-gray-600 poppins-light text-sm">
        Capture accurate patient information to personalize their experience.
      </p>
    </div>
    <button 
      className="text-orange-600 mt-4 border border-orange-600 py-2 px-4 rounded-full hover:bg-orange-600 hover:text-white transition"
      onClick={() => scrollToSection('patient-demographics')}
    >
      Learn More
    </button>
  </motion.div>

  {/* Patient Referrals */}
  <motion.div
    className="text-center border border-gray-300 rounded-lg p-4 hover:border-orange-500 max-w-xs mx-auto flex flex-col justify-between"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
    whileHover={{ scale: 1.05 }}
  >
    <div>
      <div className="mb-4 flex justify-center">
        <FaClipboardList className="text-4xl text-orange-500" />
      </div>
      <h2 className="text-xl poppins-medium text-gray-800 mb-2">Patient Referrals</h2>
      <p className="text-gray-600 poppins-light text-sm">
        Track referrals to improve marketing and patient base growth.
      </p>
    </div>
    <button 
      className="text-orange-600 mt-4 border border-orange-600 py-2 px-4 rounded-full hover:bg-orange-600 hover:text-white transition"
      onClick={() => scrollToSection('patient-referrals')}
    >
      Learn More
    </button>
  </motion.div>
</motion.div>

{/* Second Row of Cards */}
<motion.div
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
  transition={{ duration: 0.8, delay: 0.5 }}
>
  {/* Insurance Information */}
  <motion.div
    className="text-center border border-gray-300 rounded-lg p-4 hover:border-orange-500 max-w-xs mx-auto flex flex-col justify-between"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
    whileHover={{ scale: 1.05 }}
  >
    <div>
      <div className="mb-4 flex justify-center">
        <FaPhoneAlt className="text-4xl text-orange-500" />
      </div>
      <h2 className="text-xl poppins-medium text-gray-800 mb-2">Insurance Information</h2>
      <p className="text-gray-600 poppins-light text-sm">
        Gather insurance details before the appointment for smooth processing.
      </p>
    </div>
    <button 
      className="text-orange-600 mt-4 border border-orange-600 py-2 px-4 rounded-full hover:bg-orange-600 hover:text-white transition"
      onClick={() => scrollToSection('insurance-information')}
    >
      Learn More
    </button>
  </motion.div>

  {/* Confirmation Calls */}
  <motion.div
    className="text-center border border-gray-300 rounded-lg p-4 hover:border-orange-500 max-w-xs mx-auto flex flex-col justify-between"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
    whileHover={{ scale: 1.05 }}
  >
    <div>
      <div className="mb-4 flex justify-center">
        <FaEnvelope className="text-4xl text-orange-500" />
      </div>
      <h2 className="text-xl poppins-medium text-gray-800 mb-2">Confirmation Calls</h2>
      <p className="text-gray-600 poppins-light text-sm">
        Send reminders via text, email, and phone to reduce no-shows.
      </p>
    </div>
    <button 
      className="text-orange-600 mt-4 border border-orange-600 py-2 px-4 rounded-full hover:bg-orange-600 hover:text-white transition"
      onClick={() => scrollToSection('confirmation-calls')}
    >
      Learn More
    </button>
  </motion.div>

  {/* Prescription Management */}
  <motion.div
    className="text-center border border-gray-300 rounded-lg p-4 hover:border-orange-500 max-w-xs mx-auto flex flex-col justify-between"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
    whileHover={{ scale: 1.05 }}
  >
    <div>
      <div className="mb-4 flex justify-center">
        <FaClipboardList className="text-4xl text-orange-500" />
      </div>
      <h2 className="text-xl poppins-medium text-gray-800 mb-2">Prescription Management</h2>
      <p className="text-gray-600 poppins-light text-sm">
        Manage prescriptions digitally for timely fulfillment.
      </p>
    </div>
    <button 
      className="text-orange-600 mt-4 border border-orange-600 py-2 px-4 rounded-full hover:bg-orange-600 hover:text-white transition"
      onClick={() => scrollToSection('prescription-management')}
    >
      Learn More
    </button>
  </motion.div>

  {/* Google Chats and Emails */}
  <motion.div
    className="text-center border border-gray-300 rounded-lg p-4 hover:border-orange-500 max-w-xs mx-auto flex flex-col justify-between"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
    whileHover={{ scale: 1.05 }}
  >
    <div>
      <div className="mb-4 flex justify-center">
        <FaGoogle className="text-4xl text-orange-500" />
      </div>
      <h2 className="text-xl poppins-medium text-gray-800 mb-2">Google Chats & Emails</h2>
      <p className="text-gray-600 poppins-light text-sm">
        Integration with Google tools to streamline communication.
      </p>
    </div>
    <button 
      className="text-orange-600 mt-4 border border-orange-600 py-2 px-4 rounded-full hover:bg-orange-600 hover:text-white transition"
      onClick={() => scrollToSection('google-chats-emails')}
    >
      Learn More
    </button>
  </motion.div>
</motion.div>

<motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}>

      {/* Detailed Sections */}
      <div id="appointment-scheduling" className="mt-16 mb-12">
  <h2 className="text-2xl poppins-bold text-gray-800 mb-4">Appointment Scheduling</h2>
  <p className="text-gray-600 poppins-light text-lg">
    <b>Appointment Scheduling</b> is a key component of patient care, ensuring efficient management of healthcare services. It simplifies the process of booking, rescheduling, and canceling appointments. Key features include:<br/><br/>

    <b className='text-orange-600'>Online Booking:</b> Patients can book appointments through an easy-to-use online portal, reducing the need for phone calls and increasing accessibility. This 24/7 access allows patients to select the time that best fits their schedule.<br/><br/>

    <div className="flex py-0">
      {/* Left Half: Text Content */}
      <div className="w-full md:w-1/2 px-0">
        <p className="mb-4">
          <b className='text-orange-600'>Automated Reminders:</b> Automated reminders via SMS or email help reduce no-show rates by keeping patients informed about their upcoming appointments. These reminders also include instructions or preparation details for the visit.
        </p>
        <p className="mb-4">
          <b className='text-orange-600'>Real-Time Availability:</b> Scheduling systems often provide real-time access to the provider’s availability, ensuring that patients can book the earliest possible appointment without waiting for a callback.
        </p>
        <p className="mb-4">
          <b className='text-orange-600'>Patient Preferences:</b> Patients can specify preferences such as a particular doctor, appointment time, or mode of consultation (in-person or telehealth), which enhances the patient experience.
        </p>
        <p className="mb-4">
          <b className='text-orange-600'>Cancellations & Rescheduling:</b> Patients can cancel or reschedule their appointments easily through the online system, freeing up time slots for others and improving clinic efficiency.
        </p>
      </div>

      {/* Right Half: YouTube Video */}
      <div className="w-full md:w-1/2 flex justify-center px-4 py-2">
        <iframe
          width="620"
          height="350"
          src="https://www.youtube.com/embed/GkLwxj34FME?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
    <b className='text-orange-600'>Integration with EHR:</b> Appointment scheduling systems often integrate with electronic health records (EHR), enabling providers to access patient history and prepare for the visit beforehand.
  </p>
</div>


      <div id="location-details" className="mt-16 mb-12">
        <h2 className="text-2xl poppins-bold text-gray-800 mb-4">Location Details</h2>
        <p className="text-gray-600 poppins-light text-lg">
       <b> Location </b>Details refer to the comprehensive information provided to help patients find and navigate to a healthcare facility. This includes:<br/><br/>

<b className='text-orange-600 '>Address Information:</b> The complete street address of the facility, including the building number, street name, city, and ZIP code. This should be clearly visible and easy to understand.
<br/><br/>
<b className='text-orange-600 '>Directions:</b> Detailed instructions on how to reach the facility, including information on major landmarks, intersections, and nearby streets. This can be enhanced with maps and step-by-step guidance for both driving and public transportation.
<br /><br/>
<b className='text-orange-600 '>Parking Information:</b> Guidance on where patients can park their vehicles. This includes details about on-site parking availability, parking fees, and any special parking arrangements for disabled individuals. Information about nearby parking lots or garages may also be helpful.
<br /><br/>
<b className='text-orange-600 '>Public Transportation:</b> Information on the nearest bus stops, subway stations, or train stations, including any specific routes or lines that service the area. This can help patients who rely on public transportation to plan their visit.
<br /><br/>
<b className='text-orange-600 '>Accessibility:</b> Details about the accessibility of the facility, including entrances, ramps, elevators, and any accommodations for individuals with disabilities.
        </p>
      </div>

      <div id="patient-demographics" className="mt-16 mb-12">
        <h2 className="text-2xl poppins-bold text-gray-800 mb-4">Patient Demographics</h2>
        <p className="text-gray-600 poppins-light text-lg">
       <b> Patient Demographics </b> encompass the collection and management of information about patients that is used to tailor healthcare services to individual needs. This data typically includes:<br/><br/>

       <b className='text-orange-600 '>Personal Information:</b> Basic details such as full name, date of birth, gender, and contact information. This helps in identifying and communicating with patients.
<br/><br/>
<b className='text-orange-600 '>Medical History:</b> A record of past medical conditions, surgeries, allergies, and ongoing treatments. This information is crucial for providing appropriate care and making informed decisions about future treatments.
<br/><br/>
<b className='text-orange-600 '>Lifestyle Information:</b> Details about the patient’s lifestyle, including smoking status, alcohol consumption, diet, and physical activity. This can provide insights into factors that might impact their health and treatment plans.
<br/><br/>
<b className='text-orange-600 '>Insurance Details</b>: Information about the patient’s health insurance coverage, including policy numbers and provider details. This is essential for billing and ensuring that treatments are covered by insurance.
<br/><br/>
<b className='text-orange-600 '>Emergency Contacts:</b> Names and contact information for individuals to be reached in case of an emergency. This ensures that someone can be notified quickly if needed
<br/><br/>

<b className='text-orange-600 '>Ethnic and Cultural Background:</b> Data about the patient’s ethnic background and cultural preferences. This can be important for understanding specific health risks and providing culturally sensitive care.    </p>
      </div>
      <div id="patient-referrals" className="mt-16 mb-12">
  <h2 className="text-2xl poppins-bold text-gray-800 mb-4">Patient Referrals</h2>
  <p className="text-gray-600 poppins-light text-lg">
    <b>Patient Referrals</b> involve directing a patient to another healthcare provider or specialist for further evaluation, diagnosis, or treatment. This process is essential for ensuring comprehensive and specialized care. The referral process typically includes:<br/><br/>

    <b className='text-orange-600'>Initiation:</b> A referral typically begins when a primary care physician or another healthcare provider identifies the need for specialized care. This could be due to the complexity of the patient’s condition, the need for specialized tests, or advanced treatments.<br/><br/>

    <b className='text-orange-600'>Referral Documentation:</b> The referring provider prepares a referral letter or form that includes the patient's medical history, the reason for the referral, and any relevant test results or observations. This documentation helps the specialist understand the patient’s condition and the purpose of the referral.<br/><br/>

    <b className='text-orange-600'>Selecting a Specialist:</b> The referring provider may suggest a specialist based on the patient’s needs and preferences. In some cases, patients might have the option to choose a specialist from a list provided by their insurance or healthcare system.<br/><br/>

    <b className='text-orange-600'>Communication and Coordination:</b> Effective communication between the referring provider, the specialist, and the patient is crucial. This includes scheduling the appointment, transferring medical records, and ensuring that all parties are informed about the patient’s care plan.<br/><br/>

    <b className='text-orange-600'>Follow-Up:</b> After the specialist has evaluated the patient, they will typically send a report back to the referring provider with their findings and recommendations. The referring provider then incorporates this information into the patient’s ongoing care plan.<br/><br/>

    <b className='text-orange-600'>Tracking and Outcomes:</b> Healthcare systems often track referrals to ensure that patients receive timely care and that follow-up actions are taken. Monitoring outcomes helps in assessing the effectiveness of the referral process and improving patient care.
  </p>
</div>

<div id="insurance-information" className="mt-16 mb-12">
  <h2 className="text-2xl poppins-bold text-gray-800 mb-4">Insurance Information</h2>
  <p className="text-gray-600 poppins-light text-lg">
    <b>Insurance Information</b> is crucial for managing the financial aspects of healthcare services. It includes details about a patient’s health insurance coverage, which helps ensure that treatments are processed correctly and covered by the insurer. This information typically encompasses:<br/><br/>

    <b className='text-orange-600'>Policy Information:</b> Basic details about the patient’s insurance policy, including the policy number, the name of the insurance provider, and the type of coverage (e.g., individual, family, or group insurance). This helps in verifying coverage and billing accurately.<br/><br/>

    <b className='text-orange-600'>Coverage Details:</b> Information on the specific benefits and limitations of the insurance plan, such as coverage for specific treatments, medications, and procedures. Understanding these details helps in planning and coordinating care.<br/><br/>

    <b className='text-orange-600'>Eligibility Verification:</b> Ensuring that the patient’s insurance is active and that they are eligible for the services provided. This often involves checking with the insurance company to confirm coverage before proceeding with treatment.<br/><br/>

    <b className='text-orange-600'>Billing Information:</b> Details related to the financial responsibilities of the patient, including co-pays, deductibles, and any out-of-pocket expenses. This information is essential for processing payments and handling claims.<br/><br/>

    <b className='text-orange-600'>Claims Processing:</b> Information on how to submit and track insurance claims. This includes understanding the process for filing claims, obtaining pre-authorizations, and addressing any issues with reimbursements.<br/><br/>

    <b className='text-orange-600'>Contact Information:</b> Contact details for the insurance provider’s customer service or claims department. This is useful for resolving any issues or answering questions related to coverage and billing.
  </p>
</div>


<div id="confirmation-calls" className="mt-16 mb-12">
  <h2 className="text-2xl poppins-bold text-gray-800 mb-4">Confirmation Calls</h2>
  <p className="text-gray-600 poppins-light text-lg">
    <b>Confirmation Calls</b> are an essential step in reducing appointment no-shows and ensuring patients are prepared for their visits. These calls or notifications are designed to remind patients of their scheduled appointments and confirm their attendance. The key aspects include:<br/><br/>

    <b className='text-orange-600'>Appointment Reminders:</b> Patients receive timely reminders about their upcoming appointments via phone calls, text messages, or emails. These reminders typically include the date, time, and location of the appointment, as well as any preparation instructions.<br/><br/>

    <b className='text-orange-600'>Attendance Confirmation:</b> During the confirmation call, patients are often asked to confirm their attendance or reschedule if they are unable to make the appointment. This helps the healthcare provider manage schedules efficiently.<br/><br/>

    <b className='text-orange-600'>Patient Preparedness:</b> The confirmation call also ensures that patients are informed about any required preparation, such as fasting, bringing insurance information, or arriving early for paperwork. This helps reduce delays and improves the overall appointment experience.<br/><br/>

    <b className='text-orange-600'>Reducing No-Shows:</b> By confirming appointments in advance, healthcare providers can significantly reduce the rate of no-shows, ensuring better utilization of time and resources.<br/><br/>

    <b className='text-orange-600'>Multiple Communication Channels:</b> Confirmation calls can be combined with text or email reminders for patients who prefer alternative methods of communication. Offering multiple channels ensures that patients are reached through their preferred method.<br/><br/>

    <b className='text-orange-600'>Follow-Up Options:</b> For patients who need to reschedule, the confirmation call allows for immediate rescheduling, helping to keep the patient engaged in their care and maintain efficient scheduling for the healthcare provider.
  </p>
</div>


<div id="prescription-management" className="mt-16 mb-12">
  <h2 className="text-2xl poppins-bold text-gray-800 mb-4">Prescription Management</h2>
  <p className="text-gray-600 poppins-light text-lg">
    <b>Prescription Management</b> is a critical aspect of patient care, ensuring that medications are prescribed, tracked, and fulfilled efficiently. It involves various processes that help in maintaining accurate and timely prescription records. The key components include:<br/><br/>

    <b className='text-orange-600'>Digital Prescriptions:</b> With the shift to electronic health records (EHR), prescriptions are now often managed digitally. This allows for easy access and quick transmission to pharmacies, reducing the risk of errors or misplaced prescriptions.<br/><br/>

    <b className='text-orange-600'>Medication Tracking:</b> Keeping track of prescribed medications is essential for ensuring that patients follow their treatment plans. Prescription management systems help monitor which medications have been prescribed, when refills are due, and if any adjustments are needed.<br/><br/>

    <b className='text-orange-600'>Refill Management:</b> Patients can request prescription refills easily, either through an online system or by contacting their healthcare provider. Refill management ensures that patients receive their medications on time without interruptions.<br/><br/>

    <b className='text-orange-600'>Interaction Alerts:</b> Prescription management systems often include alerts for potential drug interactions or allergies. These alerts help healthcare providers make informed decisions, reducing the risk of adverse effects.<br/><br/>

    <b className='text-orange-600'>Pharmacy Coordination:</b> Prescriptions are sent directly to pharmacies, streamlining the process for both the patient and the provider. This ensures that medications are ready for pickup or delivery, minimizing wait times.<br/><br/>

    <b className='text-orange-600'>Compliance Monitoring:</b> Ensuring that patients adhere to their prescribed medications is vital. Prescription management includes follow-ups and reminders to promote medication compliance and improve health outcomes.
  </p>
</div>


<div id="google-chats-emails" className="mt-16 mb-12">
  <h2 className="text-2xl poppins-bold text-gray-800 mb-4">Google Chats & Emails</h2>
  <p className="text-gray-600 poppins-light text-lg">
    <b>Google Chats & Emails</b> are essential communication tools in modern healthcare for maintaining seamless and prompt patient-provider interactions. These platforms provide flexible options to reach patients efficiently. Key aspects include:<br/><br/>

    <b className='text-orange-600'>Quick Communication:</b> Google Chats allow healthcare providers to quickly respond to patient inquiries in real-time. This platform supports instant messaging, providing patients with immediate answers to urgent questions or concerns.<br/><br/>

    <b className='text-orange-600'>Email Notifications:</b> Emails are used for more formal or detailed communication. This includes sending appointment reminders, health updates, test results, or important medical information, ensuring patients stay informed.<br/><br/>

    <b className='text-orange-600'>Appointment Scheduling:</b> Patients can schedule appointments through email or chat, streamlining the process and reducing the need for phone calls. Automated emails can also confirm appointments and send instructions.<br/><br/>

    <b className='text-orange-600'>Patient Records & Follow-Ups:</b> Google Emails can be used to send follow-up instructions, care plans, and prescription details directly to patients, ensuring they have access to necessary information post-visit.<br/><br/>

    <b className='text-orange-600'>Multi-Device Access:</b> Both Google Chats and Emails can be accessed on various devices, including phones, tablets, and computers. This ensures that patients and providers can communicate from anywhere at any time.<br/><br/>

    <b className='text-orange-600'>Security & Privacy:</b> Google’s robust encryption ensures that communications remain secure and confidential, safeguarding patient information in compliance with healthcare regulations.
  </p>
</div>
</motion.div>
<div className="text-center py-16 bg-gray-100">
            <h2 className="text-3xl font-semibold mb-12 text-gray-800">Our Pricing Plans</h2>
            <div className="flex justify-center gap-8 flex-wrap">
                {/* Hourly Plan */}
                <div className="bg-white shadow-lg rounded-lg p-6 w-80 transform transition-all hover:scale-105">
                    <h3 className="text-xl font-medium text-orange-600 mb-4">Hourly Plan</h3>
                    <p className="text-3xl font-semibold text-black-600 mb-6">$15/hour</p>
                    <ul className="text-left mb-6 text-gray-600 space-y-3">
                        <li>Flexible hours</li>
                        <li>Pay-as-you-go</li>
                        <li>24/7 support</li>
                    </ul>
                    <Link to="/contact">
                    <button className="bg-orange-600 text-white py-2 px-6 rounded-md hover:bg-orange-700 transition duration-300">
                        Contact Now
                    </button>
                    </Link>
                </div>

                {/* Weekly Plan */}
                <div className="bg-white shadow-lg rounded-lg p-6 w-80 transform transition-all hover:scale-105">
                    <h3 className="text-xl font-medium text-orange-600 mb-4">Weekly Plan</h3>
                    <p className="text-3xl font-semibold text-black-600 mb-6">$500/week</p>
                    <ul className="text-left mb-6 text-gray-600 space-y-3">
                        <li>40 hours/week</li>
                        <li>Dedicated coordinator</li>
                        <li>Priority support</li>
                    </ul>
                    <Link to="/contact">
                    <button className="bg-orange-600 text-white py-2 px-6 rounded-md hover:bg-orange-700 transition duration-300">
                        Contact Now
                    </button>
                    </Link>
                </div>

                {/* Monthly Plan */}
                <div className="bg-white shadow-lg rounded-lg p-6 w-80 transform transition-all hover:scale-105">
                    <h3 className="text-xl font-medium text-orange-600 mb-4">Monthly Plan</h3>
                    <p className="text-3xl font-semibold text-black-600 mb-6">$2000/month</p>
                    <ul className="text-left mb-6 text-gray-600 space-y-3">
                        <li>160 hours/month</li>
                        <li>Comprehensive support</li>
                        <li>Dedicated Account Manager</li>
                    </ul>
                    <Link to="/contact">
                    <button className="bg-orange-600 text-white py-2 px-6 rounded-md hover:bg-orange-700 transition duration-300">
                        Contact Now
                    </button>
                    </Link>
                </div>
            </div>
        </div>
        <section className=" py-10">
              {/* Heading at the top */}
              <h2 className="text-3xl poppins-bold text-gray-800 text-center mb-8">
                Schedule a Meeting with Our Remote Patient Coordination Team
              </h2>
              
              {/* Calendly Inline Widget */}
              <div className=" ">
                <InlineWidget url="https://calendly.com/contact-dentalcareconnects/30min" className=" w-full h-full " />
              </div>
              </section>

      <div className="text-center mt-10">
        <Link to="/contact">
          <button className="text-orange-600 border border-orange-600 py-2 px-6 rounded-full hover:bg-orange-600 hover:text-white transition">
            Schedule a Meeting
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Patient;
