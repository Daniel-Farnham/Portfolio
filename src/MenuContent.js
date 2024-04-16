import React, { useRef, useState, useEffect } from "react";
import "./MenuContent.scss";
import IntroductionText from "./IntroductionText";
import ContentBox from "./ContentBox";
import { ReactComponent as Arrow } from "./assets/arrow.svg";
import pgvLogo from "./assets/PGV_Logo.png";
import tediLogo from "./assets/TEDI_Logo.png";
import dijgtalLogo from "./assets/DIJGTAL_Logo.png";
import fullCirclelogo from "./assets/Full_Circle_Logo.png";
import blackMarketProject from "./assets/BlackMarketProject.png";
import blackMarketProject_2 from "./assets/BlackMarketProject2.png"
import waterCycleimage_1 from "./assets/WaterCycle_Construction.jpeg";
import sneakerDeximage_1 from "./assets/SneakerDex.png";
import sneakerDeximage_2 from "./assets/SneakerDex_image2.png"
import silkDriptheLabelImage_1 from "./assets/SilkDripTheLabel.png";
import silkDriptheLabelImage_2 from "./assets/SilkDripTheLabelimage_2.png"
import playgroundVintagewebsite_1 from "./assets/playgroundVintageWebsite.png";
import playgroundVintageWebsite_2 from "./assets/playgroundVintageWebsite_2.png";
import pgvStoreVideo from "./assets/PGV_Shop.mp4";


const experiences = [
  {
    id: 1,
    logo: dijgtalLogo,
    title: "Creative Development",
    content:
      "Bring your vision to life with a developer who understands the power of storytelling and creativity in the digital world. \n\n Ongoing development for your website or app. \n\n Identify ways to incorporate unique animations and design to create memorable user experiences. \n\n Framework specific development for more complex websites and apps - React.js, Svelte.js, Vue.js. \n\n Custom CMS Development - Shopify, Squarespace. \n\n API Integrations",
  },
  {
    id: 4,
    logo: fullCirclelogo,
    title: "Daniel Does Design",
    content:
      "Transform your digital presence with a designer who combines creativity, usability, and a deep understanding of user behavior to create interfaces that engage and convert. \n\n Comprehensive UI design services, from concept to delivery. \n\n Continuously iterate and refine designs based on user feedback and data-driven insights. \n\n Ongoing design support",
  },
  {
    id: 2,
    logo: pgvLogo,
    title: "Optimisation",
    content:
      "Unlock your website's full potential and increase conversions with data-driven optimization and iterative testing. \n\n Set up Google Analytics (GA4). \n\n Data analysis to identify opportunities for improvement. \n\n Set up A/B testing software such as VWO. \n\n Optimise for conversions through iterative testing. \n\n Ongoing conversion and testing support. \n\n Speed Optimisation",
  },
  {
    id: 3,
    logo: tediLogo,
    title: "A Bit Of Everything",
    content:
      "Have a project that needs to be built from start to finish? Or maybe you need a few different things done? Contact me to find out how I can help."
  },
];

const projects = [
  {
    id: 15,
    title: "SneakerDex",
    media_1: { type: "image", src: sneakerDeximage_1 },
    media_2: { type: "image", src: sneakerDeximage_2 },
    content:
      "SneakerDex: Transforming the way sneaker collectors showcase, connect, and trade, through a user-centric online marketplace that celebrates the passion and culture of the sneaker community. \n\n Crafted a visually stunning, user-centric interface that resonates with sneaker collectors, emphasizing coolness, culture, and community. \n\n Created engaging UI elements that encourage trading, socializing, and connecting with fellow enthusiasts" ,
    skills: ["UI/UX Design", "Wireframing", "Prototyping"],
    contentHeight: "tall",
  },
  {
    id: 9,
    title: "Playground Vintage Website",
    media_1: { type: "image", src: playgroundVintagewebsite_1 },
    media_2: { type: "image", src: playgroundVintageWebsite_2 },
    content:
      "Playground Vintage: Transforming a physical vintage shop into a thriving online store amidst the challenges of COVID-19, through resilient web development, adaptive design, and continuous optimization. \n\n Developed a robust e-commerce website from scratch with Shopify, quickly adapting to new technologies and best practices to bring Playground Vintage online. \n\n Optimized the checkout process to boost conversion rates and customer trust. \n\n Refined design and functionality based on user feedback to improve the online experience and drive sales \n\n Implemented effective SEO strategies to improve organic visibility and attract new customers",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "Shopify Liquid",
      "API Integrations",
      "UI/UX Design",
      "Project Management",
      "SEO",
      "Digital Marketing",
      "Product Design",
    ],
    contentHeight: "tall",
  },
  {
    id: 8,
    title: "Black Market Project",
    media_1: { type: "image", src: blackMarketProject },
    media_2: { type: "image", src: blackMarketProject_2 },
    content:
      "Project Overview: The Black Market Project, spearheaded by photographer Adam Oswell and journalist Ben Davies, with insights from Jane Goodall, delves into the intricate world of wildlife trade. This ongoing journalistic endeavor journeys from the caves of Laos to Australia's forests, aiming to uncover the impacts of human interactions on nature. \n\n My Contribution: Web Development with a Purpose: My role centered on bringing this vital narrative to the digital stage. I started with early prototyping using Figma, ensuring the website's design resonated with the project's depth and gravity. Close collaboration with the clients was key to understand their vision and the needs of their audience. \n\n Crafting a Digital Window: The development of the website was more than just technical execution; it was about creating a portal that invites users into these hidden stories, bridging the gap between people and wildlife. My work involved translating complex, global narratives into an accessible and engaging online experience.",
    skills: [
      "UI/UX Design",
      "User Journey Mapping",
      "Figma",
      "HTML",
      "CSS",
      "Javascript",
      "JSON",
      "Git",
      "Project Management",
    ],
    contentHeight: "tall",
  },
  {
    id: 7,
    title: "Water Cycle",
    media_1: { type: "image", src: waterCycleimage_1 },
    //media_2: { type: "video", src: waterCycle },
    extraimage: waterCycleimage_1,
    content:
      "Eco-Friendly Community Initiative: In the Water Cycle project, we merged kids' play with environmental care. Tasked with addressing Global Generation's water wastage issue without hefty resources, we crafted a playful yet practical solution. \n\n Interactive and Impactful Design: Our creation? Play equipment that doubles as a water recycling system for the community garden. 'Fun' was a big theme here so we added interactive lights and games that react to water usage, gamefying sustainability for kids. \n\n My Role: Juggling design and engineering, my focus was on the users - understanding their needs and crafting a solution that's as enjoyable as it is useful.",
    skills: [
      "User Research",
      "Product Ideation",
      "Interaction Design",
      "Prototyping",
      "Project Management",
      "Product Development",
      "Mechanical Engineering",
      "Software Engineering",
    ],
    contentHeight: "medium",
  },
  {
    id: 5,
    title: "Playground Vintage Shop",
    //media_1: { type: "image", src: pgvShop_2 },
    media_1: { type: "video", src: pgvStoreVideo },
    content:
      "Playground Vintage has operated across two different locations within Sydney with the first opening in September of 2019. \n\n I was part of the leadership of the opening of this store. Going into this process I had no idea how to open a physical business location so doing this involved a steep learning curve. The idea that I had was to develop a place for young people between the ages of 18-25 where they could not only find affordable clothing but be a place that was novel, childish and just fun and memorable - this was important in helping our customers feel comfortable in their own identity.",
    skills: [
      "Project Management",
      "Negotiation",
      "Interior Design",
      "Financial Planning",
      "Market Research",
      "Product Development",
      "Team Planning",
      "Leadership",
    ],
    contentHeight: "medium",
  },
  {
    id: 14,
    title: "Silk Drip The Label",
    media_1: { type: "image", src: silkDriptheLabelImage_1 },
    media_2: { type: "image", src: silkDriptheLabelImage_2 },
    content:
      "Silk Drip the Label: Enhancing User Experience on a Budget \n\n Client Collaboration and Technical Solutions: Working with Silk Drip the Label, the challenge was clear: solve technical issues without stretching the budget. My role was to navigate through coding puzzles, focusing on making the site more user-friendly. This meant tackling tasks like refining the responsiveness of slideshows and optimizing button placements for a smoother user journey. \n\n Budget-Friendly Improvements: Through close collaboration, we discovered innovative ways to upgrade their website. Each solution was designed not just to fix immediate problems but to significantly enhance the site's overall functionality and appeal, all while keeping costs low. \n\n Empowering the Client: Perhaps one of the most rewarding achievements was customizing their CMS to be more intuitive. This allowed the clients to make updates and edits on their own, with zero coding experience needed. It was about giving them control and flexibility over their content, ensuring they could adapt and grow without constant technical support.",
    skills: ["blah"],
    contentHeight: "tall",
  },
];

/**
 * MenuContent component displays the content for each section of the menu.
 *
 * @param {Object} props - The props object.
 * @param {function} props.onContentHeightChange - Callback function to pass the heights of each section to the parent component.
 * @returns {JSX.Element} The rendered MenuContent component.
 */
function MenuContent({ onContentHeightChange, contentSpacing }) {
  const [playing, setPlaying] = useState(null);

  const hireMeRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);

  const isMobile = window.innerWidth <= 768;

  // Get the heights of each content section on each render
  useEffect(() => {
    const contentSectionHeights = {
      hireMe: hireMeRef.current ? hireMeRef.current.offsetHeight : 0,
      experience: experienceRef.current ? experienceRef.current.offsetHeight : 0,
      projects: projectRef.current ? projectRef.current.offsetHeight : 0,
    };

    onContentHeightChange(contentSectionHeights);
  }, [onContentHeightChange]);

  return (
    <div
      className={`content-space`}
    >
      <div
        className={`hireMe showContent`}
        style={{ marginTop: contentSpacing }}
        ref={hireMeRef}
      >
        <IntroductionText
          textType={"hireMe"}
          textContent={
            "I'm someone who does things over the internet."
          }
        />

        <p className={"text-content"}>
          {" "}
          <br></br>I design things, I build things and I work hard to make sure
          the people who use these things, love them. The
          happy marriage of design and development is where I live.{" "}
        </p>
        <h3 className={"text-content"}>Why does this matter? </h3>
        <p className={"text-content"}>
          {" "}
          Because digital footprints matter; website, apps, your little cousins
          hand-me-down iPad and everything in between is a big part of how
          customers interact with your brand, how they get to know you and how
          they know you can trust you.{" "}
        </p>
        <p className={"text-content"}>
          And being able to design well is hugely important for this - design is the window through which our users can poke, prod and feel our brand. Unfortunately even the most spectacular design can only ever come to life with the tech skills to make it. If design is the window, development is the carpenter who built the window, maintains it and make sure it doesn't collapse in on itself. You need to have both. 
         {" "}
        </p>
        <p className={"text-content"}>
          Luckily, I can be both. 
        </p>
        <h3 className={"text-content"}>How can I help?</h3>
        <p className={"text-content"}>
          I can be your developer + designer living in your pocket. Need a minor
          update for your site? A full website redesign and
          rebuild? Someone to be on call for an ongoing
          basis to handle anything digital related? I can help.
        </p>
        <p className={"text-content"}>
          <br></br> If this sounds at least 1% useful to you or you just wanted to chat with me - contact me below!
        </p>
      </div>
      <div
        className={`showContent`} style={{ marginTop: contentSpacing }} ref={experienceRef}
      >
        {experiences.map((experience) => (
          <ContentBox
            isProjectContent={false}
            key={experience.id}
            id={experience.id}
            logo={experience.logo}
            svg={Arrow}
            title={experience.title}
            content={experience.content}
            skills={experience.skills}
            // active={activeExperienceId === experience.id}
          />
        ))}
      </div>
      <div
        className={`showContent`} style={{ marginTop: contentSpacing }} ref={projectRef}
      >
        {projects.map((project) => (
          <ContentBox
            isProjectContent={true}
            key={project.id}
            id={project.id}
            title={project.title}
            media_1={project.media_1}
            media_2={project.media_2}
            skills={project.skills}
            content={project.content}
            isMobile={isMobile}
            // active={activeExperienceId === project.id}
            playing={playing}
            setPlaying={setPlaying}
            extraimage={project.extraimage}
          />
        ))}
      </div>
    </div>
  );
}

export default MenuContent;
