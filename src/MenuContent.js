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
            <IntroductionText
              textType="hireMe"
              textContent="I'm someone who builds things over the internet."
            />
            <p className="text-content">
              I am a developer + designer with years of experience. I design things, I build things and I work hard to make sure
              the people who use these things, love them.
            </p>
            <h3 className="text-content">Why does this matter?</h3>
            <p className="text-content">
              Because digital footprints matter. Websites, apps and everything in between is a big part of how
              customers interact with your brand, how they get to know you and how
              they know they can trust you.
            </p>
            <p>add in tech stack into here</p>

            {/* Add more content as needed */}
          </div>
        );
      case 'myServices':
        return (
          <div className="my-services">
            {experiences.map((experience) => (
              <ContentBox
                key={experience.id}
                isProjectContent={false}
                {...experience}
              />
            ))}
          </div>
          // <p>tech stack can go underneath with a bunch of logos?? </p>
        );
      case 'coolProjects':
        return (
          <div className="cool-projects">
            <Carousel 
              items={projects.map(project => project.media_1.src)}
              height="550px"
              duration={60}
            />
            <div className='coolproject-partners-sections'>
              <p>or check out some of the other agencies i have worked with!</p>
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