import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './App.scss';

import cloudImage from './assets/CloudImage.png';
import IntroductionText from './IntroductionText';
import TemporaryDrawer from './MobileDrawer';
import Menu from './Menu';
import MenuContent from './MenuContent';
import ContactForm from './ContactForm';
import CloudAnimation from './components/CloudAnimation';


gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isMobileDevice, setIsMobileDevice] = useState(window.innerWidth < 600);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const cloudRefs = useRef([]);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileDevice(window.innerWidth < 700);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.findIndex(ref => ref === entry.target);
          setActiveSectionIndex(index);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const handleSectionChange = (index) => {
    setActiveSectionIndex(index);
    if (isMobileDevice) {
      setIsDrawerOpen(false);
    }
    // Scroll to the corresponding section
    sectionRefs.current[index].scrollIntoView({ behavior: 'smooth' });
  };

  const handleAnimationComplete = () => {
    setShowContent(true);
  };

  return (
    <div className="App">
      <div className="scroll-container">
        <section ref={el => sectionRefs.current[0] = el} className="scroll-section first-section">
          <CloudAnimation 
            cloudImage={cloudImage}
            cloudHeight={400}
            direction="left"
            duration={200}
          />
          {/* </div> */}
          <IntroductionText 
            textType="introduction" 
            textContent="Hi there, my name is Daniel."
            onAnimationComplete={handleAnimationComplete}
          />
        </section>
        <div className={`${showContent ? 'visible' : 'hidden'}`}>
          <section ref={el => sectionRefs.current[1] = el} className="scroll-section content-section">
          <CloudAnimation 
            cloudImage={cloudImage}
            cloudHeight={200}
            direction="right"
            duration={300}
            parallaxAmount={200}
          />
          <CloudAnimation 
            cloudImage={cloudImage}
            cloudHeight={100}
            direction="right"
            duration={280}
            parallaxAmount={250}
          />
            <MenuContent section="whoAmI" />
          </section>
          <section ref={el => sectionRefs.current[2] = el} className="scroll-section content-section">
          <CloudAnimation 
            cloudImage={cloudImage}
            cloudHeight={100}
            direction="left"
            duration={280}
            parallaxAmount={150}
          />
          <CloudAnimation 
            cloudImage={cloudImage}
            cloudHeight={350}
            direction="left"
            duration={280}
            parallaxAmount={200}
          />
            <MenuContent section="myServices" />
          </section>
          <section ref={el => sectionRefs.current[3] = el} className="scroll-section content-section">
            <MenuContent section="coolProjects" />
          </section>
        </div>
      </div>
        {isMobileDevice ? (
          <TemporaryDrawer
          activeSection={activeSectionIndex}
          onSectionChange={handleSectionChange}
          isVisible={showContent}
        />
          
        ) : (
          <Menu
            activeSection={activeSectionIndex}
            onSectionChange={handleSectionChange}
            isVisible={showContent}
            isMobile={false}
        />
        )}
      <div className={`contact-form-wrapper ${showContent ? 'visible' : 'hidden'}`}>
        <ContactForm />
      </div>
    </div>
  );
}

export default App;