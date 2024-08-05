import React from 'react';
import './MenuContent.scss';
import IntroductionText from './IntroductionText';
import ContentBox from './ContentBox';
import Carousel from './components/Carousel';
import { experiences, projects } from './data'; 
import lowercaselogo from './assets/lowercase_club_logo.jpeg'
import dijgtallogo from './assets/dijgtal_logo.jpeg'
import fullcirclelogo from './assets/Full_Circle_Logo.png'

function MenuContent({ section, isVisible }) {
  const renderContent = () => {
    switch(section) {
      case 'whoAmI':
        return (
          <div className="who-am-i">
            <div className="text-content-container">
              <IntroductionText
                textType="hireMe"
                textContent="I'm someone who builds for people over the internet."
                className="text-content"
                startAnimation={isVisible}
              />
              <p className="text-content">
                I am a Front End Developer with a love for making things that are fun, friendly and memorable! For me building things which people absolutely love has always been my ultimate goal. It could be a high converting landing page, perhaps some highly polished animation or maybe just a web app with a little bit more ✨ <span className="text-content-special"> spice</span> ✨ than normal. If people love it, then I love building it! 💻
              </p>
            </div>
            <div className="text-content-container">
              <div className="text-content">
                <h2>Why does this matter?</h2>
                <p>
                  Because digital footprints are a reflection on a business's brand! Users who love your online presence - who are captivated and excited by it are more likely to remember you and comeback to your business.
                </p>
              </div>
            </div>
            <div className="text-content-container">
              <div className="text-content">
                <h2>What do I build with? </h2>
                <p>Next.js, React, Svelte, Tailwind.css, Shopify Liquid, PHP, C + plenty of other tools and frameworks </p>
              </div>
            </div>
          </div>
        );
      case 'myServices':
        return (
          <div className="my-services">
            <IntroductionText
              textType="other"
              textContent="Soooo what can I do specifically?"
              className="text-content"
              startAnimation={isVisible}
            />
            <div className="my-services-content">
              {experiences.map((experience) => (
                <ContentBox
                  key={experience.id}
                  isProjectContent={false}
                  {...experience}
                />
              ))}
            </div>
          </div>
        );
      case 'coolProjects':
        return (
          <div className="cool-projects">
            <div className='cool-projects-main'>
              <IntroductionText
                textType="hireMe"
                textContent="And here is some of the work I am most proud of."
                className="text-content"
                startAnimation={isVisible}
              />
              <Carousel 
                items={projects.map(project => project.media_1.src)}
                direction="right"
                duration={40}
              />
              {/* <Carousel 
                items={projects.map(project => project.media_1.src)}
                direction="left"
                duration={20}
              /> */}
            </div>
            <div className='coolproject-partners-sections'>
              <p>Or find some of my other work through these agencies I have partnered with!</p>
              <div className='coolproject-partners'>
                <a href="https://www.lowercase.club/">
                  <img src={lowercaselogo} alt="lowercase logo"/>
                </a>
                <a href="https://dijgtal.com/">
                  <img src={dijgtallogo} alt="dijgtal logo"/>
                </a>
                <a href="https://www.fullcircledigitalmarketing.com.au/">
                  <img src={fullcirclelogo} alt="full circle logo"/>
                </a>
              </div>
            </div>

          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="menu-content">
      {renderContent()}
    </div>
  );
}

export default MenuContent;