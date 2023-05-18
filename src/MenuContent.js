import React, { useState, useEffect } from 'react';
import './MenuContent.scss';
import pgvLogo from './assets/PGV_Logo.png'
import unswLogo from './assets/UNSW_Logo.png'
import tediLogo from './assets/TEDI_Logo.png'
import fullCirclelogo from './assets/Full_Circle_Logo.png'
import waterCycleimage_1 from './assets/WaterCycle_Construction.jpeg'
import pgvStoreVideo from './assets/PGV_Shop.mp4'
import wombatVideo from './assets/Wombat_Mange.mp4'
import waterCycle from './assets/WaterCycle.mp4'


function ExperienceDesign({ id, active, logo, title, content, onClick }) {
  const activeClass = active ? 'expandExperience' : 'hideExperience'; 

  const formattedContent = content.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

    return (
      <div onClick={() => onClick(id)} className={`content-box experience-design ${activeClass}`}>
        <div className="experience-image">
          <img src={logo} alt={title} />
        </div>
        <div className="experience-information">
          <h1>{title}</h1>
          <p>{formattedContent}</p>
        </div>
      </div>
    );
}

function ProjectDesign({ 
  id, 
  active, 
  title, 
  image, 
  video, 
  content, 
  onClick, 
  playing, 
  setPlaying,
  extraimage
  }) { 
  const activeClass = active ? 'expandExperience' : 'hideExperience'; 

  const formattedContent = content.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  const videoRef = React.useRef()

  useEffect(() => {
    if (videoRef.current) {
      if (active && playing === id) { 
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [playing, active, id]); 
  
  return (
    <div 
      onClick={() => {
        onClick(id);
        setPlaying(id); 
      }} 
      className={`content-box ${activeClass} project-design`}>
        <div className="project-content">
          <div className="content-wrapper">
            <Media
              type={video ? "video" : "image"}
              src={video ? video : image}
              title={title}
              videoRef={video ? videoRef : null}
            />
            <img className="extra-image" src={extraimage} alt={title} />
          </div>
        </div>
        <div className="project-information">
          <h1>{title}</h1>
          <p>{formattedContent}</p>
        </div>
        
      </div>
  );
}

function Media({ type, src, title, videoRef }) {
  if (type === "video") {
    return (
      <video ref={videoRef} autoPlay muted loop>
        <source src={src}></source>
      </video>
    );
  } else {
    return <img src={src} alt={title} />;
  }
}

function MenuContent({ activeDiv }) {
  const [activeExperienceId, setActiveExperienceId] = useState(null);
  const [playing, setPlaying] = useState(null); 
  const handleClick = (id) => {
    if (activeExperienceId === id) {
      setActiveExperienceId(null)
    } else {
      setActiveExperienceId(id); 
    }
  }

  const experiences = [
    {
      id: 1,
      logo: pgvLogo, 
      title: 'Co-Founder', 
      content: 'Playground Vintage was established in 2018 out of a desire to provide clothing that is cool, affordable and ultimately good for the environment. This was a business born out of naivety, frustration with the clothing industry and a willingness to do something about it.\n\n Originally this started as a process of designing and making my own clothing which did well to start with. However I became concerned with the environmental impact of clothes and pivoted to selling only remade or vintage pieces. Plus I felt like there wasn’t enough ‘fun’ for young people in Sydney, hence the name ‘Playground Vintage’. \n\nIn 2019, I opened up my first store and in 2021 my second which was difficult while balancing my degree and COVID-lockdowns. This experience was valuable because it really taught me a lot about building products for people and how to make things happen despite a lack of knowledge and resources.',
    },
    {
      id: 2,
      logo: tediLogo,
      title: 'Student Product Engineer',
      content: 'This was a spot within a cross functional team, multi-disciplinary team which required me to design, prototype and ultimately build a product from scratch. \n\nDuring this experience I led a lot of the work during the design and building process. This meant identifying user problems, writing a design brief, building a prototype and eventually the entire product within a short period. There was technical obstacles to overcome, design flaws to iterate over and financial constraints but it was immensely satisfying to build things for people.',
    },
    {
      id: 3, 
      logo: fullCirclelogo,
      title: 'Web Developer', 
      content: 'Leaning on my technical skills from my degree and my product management skills from running my own business I began offering up my time as a freelance web developer. This meant developing Figma prototypes all the way to actually coding the website. This has been as much about understanding what the client needs as it has been about writing code. Being able to put myself in my client’s shoes has helped me be a better web developer. ',
    },
    {
      id: 4,
      logo: unswLogo, 
      title: 'Bachelor of Environmental Engineering/Computer Science',
      content: 'Something to be completed in the next couple of months. My degree has taught me everything from biology, chemistry, physics, environmental systems thinking, plenty of complex mathematics and a suite of programming languages (C, C++, Javascript, React, Node.JS, Java) plus a whole host of other useful technical skills. \n\nArguably though the most valuable skill I have gained from this is the ability to break down and solve hard problems. I know that my degree will not teach me everything I will ever need to know. However being able to problem solve has meant that if I don’t know something I am comfortable that I can work it out and become good at it.\n\nIf you’re interested in my problem solving method: \n\nIt is a process of breaking down the problem into small chunks.  Testing a solution on a particular chunk. The solution doesn’t work. Find out why. Learn. Iterate a new solution. Repeat until you have a working solution and repeat for each chunk. ',
    },
  ]

  const projects = [
    {
      id: 7,
      title: 'Water Cycle',
      image: null,
      video: waterCycle,
      extraimage: waterCycleimage_1,
      content: 'blah blah test', 
    },
    {
      id: 5,
      title: 'Playground Vintage Shop', 
      image: null,
      video: pgvStoreVideo,
      extraimage: null,
      content: 'Made with a shoe string budge, gross inexperience and a feeling of being generally in over my head ',
    },
    {
      id: 9,
      title: 'Playground Vintage Website Development',
      image: null,
      video: wombatVideo,
      extraimage: waterCycleimage_1,
      content: 'blah blah test', 
    }, 
    {
      id: 6,
      title: 'WIRES',
      image: null,
      video: wombatVideo,
      extraimage: null,
      content: 'blah blah test', 
    }, 
    {
      id: 8,
      title: 'Black Market Project',
      image: pgvLogo,
      video: null,
      extraimage: null,
      content: 'blah blah test', 
    }, 
    {
      id: 10,
      title: 'BEANS',
      image: null,
      video: wombatVideo,
      extraimage: null,
      content: 'blah blah test', 
    }
  ]

  return (
    <div className="content-space">
      <div className = {`listContent ${activeDiv === 'div-1' ? 'showContent' : 'hideContent'}`}>
        {experiences.map((experience) => (
          <ExperienceDesign
          key={experience.id}
          id={experience.id}
          logo={experience.logo}
          title={experience.title}
          content={experience.content}
          active={activeExperienceId === experience.id}
          onClick={handleClick}
          />
        ))}
      </div>
      <div className = {`listContent ${activeDiv === 'div-2' ? 'showContent' : 'hideContent'}`}>
        {projects.map((project) => (
          <ProjectDesign
            key={project.id}
            id={project.id}
            title={project.title}
            image={project.image}
            video={project.video}
            content={project.content}
            active={activeExperienceId === project.id}
            onClick={handleClick}
            playing={playing} 
            setPlaying={setPlaying}
            extraimage={project.extraimage} 
          />
        ))}
      </div>
    </div>
  );
}


export default MenuContent