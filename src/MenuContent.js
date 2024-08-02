import React from 'react';
import './MenuContent.scss';
import IntroductionText from './IntroductionText';
import ContentBox from './ContentBox';
import Carousel from './components/Carousel';
import { experiences, projects } from './data'; 
import lowercaselogo from './assets/lowercase_club_logo.jpeg'
import dijgtallogo from './assets/dijgtal_logo.jpeg'
import fullcirclelogo from './assets/Full_Circle_Logo.png'

function MenuContent({ section }) {
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
              />
              <p className="text-content">
                I am a Front End Developer with a love for making things that are fun, friendly and memorable! For me building things which people absolute love has always been my ultimate goal. It could be a high converting landing page, perhaps some highly polished animation or maybe just a web app with a little bit more ✨ <a className="text-content-special"> spice</a> ✨ than normal. If people love it, then I love building it! 💻
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
            <h2>What I can do</h2>
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
            <h2>Portfolio</h2>
            <Carousel 
              items={projects.map(project => project.media_1.src)}
              height="600px"
              duration={90}
            />
            <div className='coolproject-partners-sections'>
              <p>Or find some of my other work with these agencies I have partnered with!</p>
              <div className='coolproject-partners'>
                <img src={lowercaselogo} alt="lowercase logo"/>
                <img src={dijgtallogo} alt="dijgtal logo"/>
                <img src={fullcirclelogo} alt="full circle logo"/>
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