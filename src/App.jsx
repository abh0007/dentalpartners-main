import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/Footer';
import Patient from './pages/Services/Dropdown/Patient';
import Bookkeeping from './pages/Services/Dropdown/Bookkeeping';
import Insurance from './pages/Services/Dropdown/Insurance';
import ITservices from './pages/Services/Dropdown/ITservices';
import Marketing from './pages/Services/Dropdown/Marketing';
import Pending from './pages/Services/Dropdown/Pending';
import Treatment from './pages/Services/Dropdown/Treatment';
import Scheduler from './pages/Contact/Scheduler';
import Recruitment from './pages/Services/Dropdown/Recruitment';
import Business from './pages/Services/Dropdown/Business';
 

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

                  <Route path="/services/bookkeeping" element={<Bookkeeping />} />
                  <Route path="/services/insurance" element={ <Insurance />} />
                  <Route path="/services/itservices" element={<ITservices /> } />
                  <Route path="/services/marketing" element={<Marketing /> } />
                  <Route path='/services/patient' element={<Patient />} />
                  <Route path="/services/pending" element={ <Pending />} />
                  <Route path="/services/treatment" element={ <Treatment />} />
                  <Route path="/services/recruitment" element={<Recruitment />} />
                  <Route path="/services/business" element={<Business />} />

          <Route path="/contact" element={<Scheduler />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
