import { useState } from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Experience from './components/Sections/Experience';
import Projects from './components/Sections/Projects';
import TechStack from './components/Sections/TechStack';
import Contact from './components/Sections/Contact';
import Footer from './components/Layout/Footer';
import Cursor from './components/Layout/Cursor';
import Modal from './components/UI/Modal';
import Certifications from './components/Sections/Certifications';

function App() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className="App">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects onProjectClick={setActiveModal} />
        <TechStack />
         <Certifications />
        <Contact />
      </main>
      <Footer />
      <Modal 
        isOpen={!!activeModal} 
        project={activeModal} 
        onClose={() => setActiveModal(null)}
        onProjectChange={setActiveModal} // Add this line
      />
    </div>
  );
}

export default App;