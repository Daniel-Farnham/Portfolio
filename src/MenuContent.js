import React from 'react';
import './MenuContent.scss';
import IntroductionText from './IntroductionText';
import ContentBox from './ContentBox';
import Carousel from './components/Carousel';
import { experiences, projects } from './data'; // Assume we've moved the data to a separate file

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
        );
      case 'coolProjects':
        return (
          <div className="cool-projects">
            <Carousel 
              items={projects.map(project => project.media_1.src)}
              width="100%"
              height="500px"
              duration={60}
            />
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