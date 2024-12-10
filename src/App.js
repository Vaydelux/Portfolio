import {useEffect} from 'react';
import { ToastContainer } from 'react-toastify';
import './App.scss';
import About from './components/About';
import Contact from './components/Contact';
import ParticlesComponent from './components/effects/ParticlesComponent';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import 'react-toastify/dist/ReactToastify.css';
import feather from 'feather-icons';


function App(){

  useEffect(() => {
    // Initialize Feather Icons
    feather.replace();
  }, []);

  return(
    <div>
      <div><ParticlesComponent id="particles"/></div>
      <header><Navigation /></header>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <ToastContainer />
    </div>
    
    
  );
};

export default App;
