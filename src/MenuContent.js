import React, { useRef, useState, useEffect } from 'react';
import './MenuContent.scss';
import IntroductionText from './IntroductionText';
import Media from './Media';
import ContentBox from './ContentBox';
import SkillsTable from './SkillsTable';
import { ReactComponent as Arrow } from './assets/arrow.svg'
import pgvLogo from './assets/PGV_Logo.png'
import unswLogo from './assets/UNSW_Logo.png'
import tediLogo from './assets/TEDI_Logo.png'
import fullCirclelogo from './assets/Full_Circle_Logo.png'
import blackMarketProject from './assets/BlackMarketProject.png'
import blackMarketProject_2 from './assets/BlackMarketProject2.png'
import waterCycleimage_1 from './assets/WaterCycle_Construction.jpeg'
import sneakerDeximage_1 from './assets/SneakerDex.png'
import sneakerDeximage_2 from './assets/SneakerDex_image2.png'
import silkDriptheLabelImage_1 from './assets/SilkDripTheLabel.png'
import silkDriptheLabelImage_2 from './assets/SilkDripTheLabelimage_2.png'
import portfolioImage from './assets/PortfolioImage.png'
import playgroundVintagewebsite_1 from './assets/playgroundVintageWebsite.png'
import playgroundVintageWebsite_2 from './assets/playgroundVintageWebsite_2.png'
import pgvShop_2 from './assets/pgvShop_2.jpg'
import pgvStoreVideo from './assets/PGV_Shop.mp4'
import wombatVideo from './assets/Wombat_Mange.mp4'
import waterCycle from './assets/WaterCycle.mp4'

function MenuContent({ activeDiv, isMobile }) {
  const [activeExperienceId, setActiveExperienceId] = useState(null);
  const [playing, setPlaying] = useState(null);
  const [contentHeight, setContentHeight] = useState('100vh');
  const [topOffset, setTopOffset] = useState(0);
  
  const handleClick = (id) => {
    if (activeExperienceId === id) {
      setActiveExperienceId(null)
    } else {
      setActiveExperienceId(id); 
    }
  }
  
  const updateContentHeight = () => {
    if (isMobile) {
      setContentHeight(`-webkit-fill-available`)
      return;
    }
    const menuItem = document.querySelector('.menu-item');
      const menuItemHeight = menuItem.offsetHeight;
      const availableHeight = window.innerHeight - (menuItemHeight * 3);
      setContentHeight(`${availableHeight + 2 - 100}px`); //100px is to account for the top padding of the content space
  };

  const updateContentPosition = () => {
    if (isMobile) {
      // setTopOffset(`80px`)
      return; 
    }
    const menuItem = document.querySelector('.menu-item');
    const menuItemHeight = menuItem.offsetHeight;
    let contentTopOffset = menuItemHeight - 1;
    if (activeDiv === 'div-2') {
      contentTopOffset = contentTopOffset * 2; 
    }
    if (activeDiv === 'div-3') {
      contentTopOffset = contentTopOffset * 3;
    }
    
    setTopOffset(`${contentTopOffset}px`); // Use template literals
  }

  useEffect(() => {
    const updateLayout = () => {
      updateContentHeight();
      updateContentPosition();
    };

    updateLayout();

    // Add resize event listener
    window.addEventListener('resize', updateLayout);

    // Return a cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateLayout);
    };
  }, [activeDiv]);
  const experiences = [
    {
      id: 1,
      logo: pgvLogo, 
      title: 'Co-Founder', 
      content: 'Playground Vintage was established in 2018 out of a desire to provide clothing that is cool, affordable and ultimately good for the environment. This was a business born out of naivety, frustration with the clothing industry and a willingness to do something about it.\n\n Originally this started as a process of designing and making my own clothing which did well to start with. However I became concerned with the environmental impact of clothes and pivoted to selling only remade or vintage pieces. Plus I felt like there wasn’t enough ‘fun’ for young people in Sydney, hence the name ‘Playground Vintage’. \n\nIn 2019, I opened up my first store and in 2021 my second which was difficult while balancing my degree and COVID-lockdowns. This experience was valuable because it really taught me a lot about building products for people and how to make things happen despite a lack of knowledge and resources.',
      skills: ['User Research', 'Product Ideation', 'Interaction Design', 'Prototyping', 'Project Management', 'Product Development', 'Mechanical Engineering', 'Software Engineering'],
    },
    {
      id: 2,
      logo: tediLogo,
      title: 'Student Product Engineer',
      skills: ['User Research', 'Product Ideation', 'Interaction Design', 'Prototyping', 'Project Management', 'Product Development', 'Mechanical Engineering', 'Software Engineering'],
      content: 'This was a spot within a cross functional team, multi-disciplinary team which required me to design, prototype and ultimately build a product from scratch. \n\nDuring this experience I led a lot of the work during the design and building process. This meant identifying user problems, writing a design brief, building a prototype and eventually the entire product within a short period. There was technical obstacles to overcome, design flaws to iterate over and financial constraints but it was immensely satisfying to build things for people.',
    },
    {
      id: 3, 
      logo: fullCirclelogo,
      title: 'Web Developer',
      skills: ['User Research', 'Product Ideation', 'Interaction Design', 'Prototyping', 'Project Management', 'Product Development', 'Mechanical Engineering', 'Software Engineering'], 
      content: 'Leaning on my technical skills from my degree and my product management skills from running my own business I began offering up my time as a freelance web developer. This meant developing Figma prototypes all the way to actually coding the website. This has been as much about understanding what the client needs as it has been about writing code. Being able to put myself in my client’s shoes has helped me be a better web developer. ',
    },
    {
      id: 4,
      logo: unswLogo, 
      title: 'Bachelor of Environmental Engineering/Computer Science',
      content: 'Something to be completed in the next couple of months. My degree has taught me everything from biology, chemistry, physics, environmental systems thinking, plenty of complex mathematics and a suite of programming languages (C, C++, Javascript, React, Node.JS, Java) plus a whole host of other useful technical skills. \n\nArguably though the most valuable skill I have gained from this is the ability to break down and solve hard problems. I know that my degree will not teach me everything I will ever need to know. However being able to problem solve has meant that if I don’t know something I am comfortable that I can work it out and become good at it.\n\nIf you’re interested in my problem solving method: \n\nIt is a process of breaking down the problem into small chunks.  Testing a solution on a particular chunk. The solution doesn’t work. Find out why. Learn. Iterate a new solution. Repeat until you have a working solution and repeat for each chunk. ',
      skills: ['User Research', 'Product Ideation', 'Interaction Design', 'Prototyping', 'Project Management', 'Product Development', 'Mechanical Engineering', 'Software Engineering'],
      
    },
  ]

  const projects = [
    {
      id: 7,
      title: 'Water Cycle',
      media_1: {type: 'image', src: waterCycleimage_1},
      media_2: {type: 'video', src: waterCycle},
      extraimage: waterCycleimage_1,
      content: 'A water recycling system built for a community garden powered by one of the great renewable energy resources - kids. \n\n Water Cycle is a proof of concept that combines energy produced from kids play equipment to power the water recycling system of a community garden. The community garden was operated by Global Generation who had issues with water wastage in their project but had neither the finances, resources or the power connection to install their own water recycling system. Upon talking to the wider community we found that due to new developments many local kids were worried about a loss of play equipment. Our solution was to develop play equipment that powered a water recycling system, resulting in the prototype called ‘Water Cycle’. \n\n The aim here was to make something that was ‘fun’, and should encourage ‘play’ as well as recycle water. To achieve this we added interactive light systems, miniature games that changed based on the amount of water pumped and the saturation of the soil. \n\n My role in this project flirted between being the Product Designer as well as an Engineer of many different hats but it could be neatly described as putting myself in the shoes of the users, designing a solution that fits their needs and applying technical know-how to make it real.', 
      skills: ['User Research', 'Product Ideation', 'Interaction Design', 'Prototyping', 'Project Management', 'Product Development', 'Mechanical Engineering', 'Software Engineering'],
      contentHeight: "tall"
    },
    
    {
      id: 15,
      title: 'SneakerDex',
      media_1: {type: 'image', src: sneakerDeximage_1},
      media_2: {type: 'image', src: sneakerDeximage_2},
      content: 'A water recycling system built for a community garden powered by one of the great renewable energy resources - kids. \n\n Water Cycle is a proof of concept that combines energy produced from kids play equipment to power the water recycling system of a community garden. The community garden was operated by Global Generation who had issues with water wastage in their project but had neither the finances, resources or the power connection to install their own water recycling system. Upon talking to the wider community we found that due to new developments many local kids were worried about a loss of play equipment. Our solution was to develop play equipment that powered a water recycling system, resulting in the prototype called ‘Water Cycle’. \n\n The aim here was to make something that was ‘fun’, and should encourage ‘play’ as well as recycle water. To achieve this we added interactive light systems, miniature games that changed based on the amount of water pumped and the saturation of the soil. \n\n My role in this project flirted between being the Product Designer as well as an Engineer of many different hats but it could be neatly described as putting myself in the shoes of the users, designing a solution that fits their needs and applying technical know-how to make it real.', 
      skills: ['UI/UX Design', 'Wireframing', 'Prototyping'],
      contentHeight: "tall"
    },
    {
      id: 5,
      title: 'Playground Vintage Shop', 
      media_1: {type: 'image', src: pgvShop_2},
      media_2: {type: 'video', src: pgvStoreVideo},
      content: 'Playground Vintage has operated across two different locations within Sydney with the first opening in September of 2019. \n\n I was part of the leadership of the opening of this store. Going into this process I had no idea how to open a physical business location so doing this involved a steep learning curve. The idea that I had was to develop a place for young people between the ages of 18-25 where they could not only find affordable clothing but be a place that was novel, childish and just fun and memorable - this was important in helping our customers feel comfortable in their own identity.',
      skills: ['Project Management', 'Negotiation', 'Interior Design', 'Financial Planning', 'Market Research', 'Product Development', 'Team Planning', 'Leadership'],
      contentHeight: "short"
    },
    {
      id: 9,
      title: 'Playground Vintage Website',
      media_1: {type: 'image', src: playgroundVintagewebsite_1},
      media_2: {type: 'image', src: playgroundVintageWebsite_2},
      content: 'The Playground Vintage website was developed during the early stages of COVID as part of a pivot in my business from physical retail sales to online sales. \n\n My role was to rapidly develop this website from scratch with at the time little knowledge of ecommerce and web development principles. Through a period of significant learning and iteration I not only created this website but turned it into a thriving ecommerce business with sales that averaged $10,000/week. Through this our business not only survived the COVID lockdowns but came out of it stronger.', 
      skills: ['HTML', 'CSS', 'Javascript', 'Shopify Liquid', 'API Integrations', 'UI/UX Design', 'Project Management', 'SEO', 'Digital Marketing', 'Product Design'],
      contentHeight: "short"
    },
    /* 
    {
      id: 6,
      title: 'WIRES Wombat Mange Treatment',
      media_1: {type: 'video', src: wombatVideo},
      media_2: {type: 'null', src: null},
      content: 'blah blah test', 
      skills: ['blah']
    },
    */ 
    {
      id: 8,
      title: 'Black Market Project',
      media_1: {type: 'image', src: blackMarketProject},
      media_2: {type: 'image', src: blackMarketProject_2},
      content: 'A project aimed at lifting the lid on the characters, impacts and hidden networks that fuel the global wildlife trade and ultimately the decline in our natural world. \n\n Led by photographer Adam Oswell, journalist Ben Davies With foreword from Jane Goodall, Black Market Project explores the connection between humans and the natural world by journeying through the bat-filled caves of Laos, the burnt black forests of Australia, the isolated mountains of Mongolia and the wilds of Uganda. It is an ongoing journalistic project which seeks to highlight the stories between people and wildlife as they emerge. \n\n My role was mainly in the development of the website. This included early prototyping with Figma, consultation with the clients to understand their needs, an understanding of their users and also the development of the website.', 
      skills: ['UI/UX Design', 'User Journey Mapping', 'Figma', 'HTML', 'CSS', 'Javascript', 'JSON', 'Git', 'Project Management'],
      contentHeight: "medium"
    }, 
    {
      id: 14,
      title: 'Silk Drip The Label',
      media_1: {type: 'image', src: silkDriptheLabelImage_1},
      media_2: {type: 'image', src: silkDriptheLabelImage_2},
      content: 'blah blah test', 
      skills: ['blah']
    },
    /*
    {
      id: 16, 
      title: 'This Website',
      media_1: {type: 'image', src: portfolioImage},
      media_2: {type: 'image', src: silkDriptheLabelImage_2},
      content: 'blah blah test', 
      skills: ['blah']
    }, 
    */
    {
      id: 10,
      title: 'BEANS',
      media_1: {type: 'icon', src: "https://github.com/Daniel-Farnham/Beans"},
      media_2: {type: 'null', src: null},
      content: 'The simplest way of describing Beans is it is a bootleg Microsoft Teams but with all the perks of being built by a team of scrappy university students. \n\n On the Beans project I worked as backend engineer and was heavily involved in developing features for different team ‘channels’, ‘standups’ as well as the authentication of users upon logging in. Beans went through a process of iterative development with each stage involving new features and updated testing using Jest.',
      skills: ['Typescript', 'Jest', 'Node.js', 'Express.js', 'Git/Gitlab', 'Agile Development'] 
    },
    {
      id: 11,
      title: 'Dungeonmania', 
      media_1: {type: 'icon', src: 'https://github.com/Daniel-Farnham/Dungeonmania'},
      media_2: {type: null, src: null},
      content: 'Dungeonmania is as it sounds a ‘Dungeon’ style adventure game developed in Java where the user moves through different rooms completing goals, collecting items, fighting enemies and navigating obstacles. My role in this project involved adding some new features to the game such as new items and weapons. However as some of the game was already built this quickly evolved into a large refactoring process to untangle the web of tight coupling between classes in order to make the process of adding these new features easier as development went on.',
      skills: ['Java', 'Object Oriented Programming', 'Git/GitLab', 'UML Diagrams', 'Iterative Development'],
    }, 
    {
      id: 12,
      title: 'BattleMips', 
      media_1: {type: 'icon', src: 'https://github.com/Daniel-Farnham/Battlemips'},
      media_2: {type: null, src: null},
      content: 'BattleMips is perhaps one of my most straightforward (on paper) but most difficult and deeply-technical projects that I have completed. In short BattleMips is the game ‘BattleShip’ but coded in the Assembly language MIPS. \n\n For the non-technical people, Assembly is one of the lowest-languages you get in programming - it is hard to decipher and involves a lot of binary/hexadecimal (1’s and 0’s - like what you see in the Matrix’). This project tested my technical skills and more importantly helped refine my toolkit allowing me to break down and deal with difficult problems.',
      skills: ['C', 'Assembly', 'Memory Management', 'Binary', 'Software Testing', 'Technical Problem Solving', 'Time Management'],
    },
    /*
    {
      id: 13, 
      title: 'SatelliteTransferSystem', 
      media_1: {type: 'icon', src: 'https://github.com/Daniel-Farnham/SatelliteTransferSystem'},
      media_2: {type: null, src: null},
      content: 'blah blah', 
      skills: ['Java']
    },
    */
  ]

  return (
    <div className={`content-space ${activeDiv ? 'showContent' : 'hideContent'}`} style={{height: contentHeight, top: topOffset}}>
      <div className = {`listContent ${activeDiv === 'div-2' ? 'showContent' : 'hideContent'}`}>
        {experiences.map((experience) => (
          <ContentBox
          key={experience.id}
          id={experience.id}
          logo={experience.logo}
          svg={Arrow}
          title={experience.title}
          content={experience.content}
          skills={experience.skills}
          active={activeExperienceId === experience.id}
          onClick={handleClick}
          />
        ))}
      </div>
      <div className = {`listContent ${activeDiv === 'div-3' ? 'showContent' : 'hideContent'}`}>
        {projects.map((project) => (
          <ContentBox
            key={project.id}
            id={project.id}
            title={project.title}
            media_1={project.media_1}
            media_2={project.media_2}
            skills={project.skills}
            content={project.content}
            contentHeight={project.contentHeight}
            active={activeExperienceId === project.id}
            onClick={handleClick}
            playing={playing} 
            setPlaying={setPlaying}
            extraimage={project.extraimage} 
          />
        ))}
      </div>
      <div className = {`listContent hireMe ${activeDiv === 'div-1' ? 'showContent' : 'hideContent'}`}>
        
          <IntroductionText textType={"hireMe"} textContent={"I'm someone who does things over the internet."} /> 
          
          <p className={"text-content"}> <br></br>I design things, I build things and I work hard to make sure the user LOVE the things that I have built. The happy marriage of design and development is where I like to live. </p>    
          <h3 className={"text-content"}>Why does this matter? </h3>
          <p className={"text-content"}> Because digital footprints matter; website, apps, your little cousins hand-me-down iPad and everything in between is a big part of how customers interact with your brand, how they get to know you and how they know you can trust you.  </p>    
          <p className={"text-content"}>And on that we can have the best design in the world but without the tech skills to match it can never come to life. Similarly our code can look pretty and do the job but if the design is poor no one will use it. </p>
          <p className={"text-content"}>I am interested in bridging these two worlds.</p>
          <h3 className={"text-content"}>How can I help?</h3>
          <p className={"text-content"}>I can be your developer + designer living in your pocket. Need a minor update in your code? I can do that. Need a full website redesign and rebuild? I can also do that. Need someone to be on call for an ongoing basis to handle anything digital related? I can also do that. </p>
          <p> <br></br> If you're interested in getting to know me - contact me below!</p>
      </div>
    </div>
  );
}


export default MenuContent