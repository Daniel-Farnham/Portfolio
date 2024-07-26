import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './App.css';

import cloudImage from './assets/CloudImage.png';
import IntroductionText from './IntroductionText';
import TemporaryDrawer from './MobileDrawer';
import Menu from './Menu';
import MenuContent from './MenuContent';
import ContactForm from './ContactForm';


gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isMobileDevice, setIsMobileDevice] = useState(window.innerWidth < 600);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const cloud1Ref = useRef(null);
  const cloud2Ref = useRef(null);
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
      threshold: 0.1,
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

  useEffect(() => {
    // Parallax effect for clouds
    gsap.to(cloud1Ref.current, {
      yPercent: 70,
      ease: "none",
      scrollTrigger: {
        trigger: ".first-section",
        start: "top top",
        end: "bottom top",
        scrub: 0.5
      }
    });

    gsap.to(cloud2Ref.current, {
      yPercent: 80,
      ease: "none",
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom top",
        scrub: 0.5
      }
    });
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
          <div className="clouds">
            <img ref={cloud1Ref} className="cloudImage" src={cloudImage} alt="cloudImage" />
            <img ref={cloud2Ref} className="cloudImage_1" src={cloudImage} alt="cloudImage" />
          </div>
          <IntroductionText 
            textType="introduction" 
            textContent="Hi there, my name is Daniel."
            onAnimationComplete={handleAnimationComplete}
          />
        </section>
        <div className={`content-wrapper ${showContent ? 'visible' : 'hidden'}`}>
          <section ref={el => sectionRefs.current[1] = el} className="scroll-section">
            <MenuContent section="whoAmI" />
          </section>
          <section ref={el => sectionRefs.current[2] = el} className="scroll-section">
            <MenuContent section="myServices" />
          </section>
          <section ref={el => sectionRefs.current[3] = el} className="scroll-section">
            <MenuContent section="coolProjects" />
          </section>
        </div>
      </div>
        {isMobileDevice ? (
          <p>hello place holder</p>
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