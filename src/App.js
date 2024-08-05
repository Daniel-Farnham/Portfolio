import React, { useRef, useState, useEffect } from 'react';
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
  const [showContent, setShowContent] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileDevice(window.innerWidth < 700);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const currentRefs = sectionRefs.current;

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const callback = (entries) => {
      const updatedVisibleSections = {...visibleSections};
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.findIndex(ref => ref === entry.target);
          updatedVisibleSections[index] = entry.isIntersecting;
          setActiveSectionIndex(index);
        }
      });
      setVisibleSections(updatedVisibleSections);
    };

    const observer = new IntersectionObserver(callback, options);

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleSections]);

  const handleSectionChange = (index) => {
    setActiveSectionIndex(index);
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
          <div className={`${showContent ? 'visible' : 'hidden'}`}>

            <CloudAnimation 
              cloudImage={cloudImage}
              cloudHeight={300}
              direction="left"
              duration={500}
            />
          </div>
          <IntroductionText 
            textType="introduction" 
            textContent="Hi there, my name is Daniel."
            onAnimationComplete={handleAnimationComplete}
            startAnimation={visibleSections[0]}
          />
        </section>
        <div className={`${showContent ? 'visible' : 'hidden'}`}>
          <section ref={el => sectionRefs.current[1] = el} className="scroll-section content-section">
          <CloudAnimation 
            cloudImage={cloudImage}
            cloudHeight={200}
            direction="right"
            duration={400}
            parallaxAmount={150}
          />
            <MenuContent section="whoAmI" isVisible={visibleSections[1]}/>
          </section>
          <section ref={el => sectionRefs.current[2] = el} className="scroll-section content-section">
          <CloudAnimation 
            cloudImage={cloudImage}
            cloudHeight={100}
            direction="left"
            duration={380}
            parallaxAmount={125}
          />
          <CloudAnimation 
            cloudImage={cloudImage}
            cloudHeight={350}
            direction="left"
            duration={380}
            parallaxAmount={150}
          />
            <MenuContent section="myServices" isVisible={visibleSections[2]}/>
          </section>
          <section ref={el => sectionRefs.current[3] = el} className="scroll-section content-section">
            <MenuContent section="coolProjects" isVisible={visibleSections[3]}/>
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