import React, { useState, useEffect, useCallback } from "react";
import "./MenuContent.scss";
import IntroductionText from "./IntroductionText";
import ContentBox from "./ContentBox";
import Links from "./Links";
import { ReactComponent as Arrow } from "./assets/arrow.svg";
import pgvLogo from "./assets/PGV_Logo.png";
import tediLogo from "./assets/TEDI_Logo.png";
import dijgtalLogo from "./assets/DIJGTAL_Logo.png";
import fullCirclelogo from "./assets/Full_Circle_Logo.png";
import blackMarketProject from "./assets/BlackMarketProject.png";
import waterCycleimage_1 from "./assets/WaterCycle_Construction.jpeg";
import sneakerDeximage_1 from "./assets/SneakerDex.png";
import silkDriptheLabelImage_1 from "./assets/SilkDripTheLabel.png";
import playgroundVintagewebsite_1 from "./assets/playgroundVintageWebsite.png";
import playgroundVintageWebsite_2 from "./assets/playgroundVintageWebsite_2.png";
import pgvStoreVideo from "./assets/PGV_Shop.mp4";

function MenuContent({ activeDiv, isMobile }) {
  const [activeExperienceId, setActiveExperienceId] = useState(null);
  const [playing, setPlaying] = useState(null);
  const [contentHeight, setContentHeight] = useState("100vh");
  const [topOffset, setTopOffset] = useState(0);

  const handleClick = (id) => {
    if (activeExperienceId === id) {
      setActiveExperienceId(null);
    } else {
      setActiveExperienceId(id);
    }
  };

  const updateContentHeight = useCallback(() => {
    if (isMobile) {
      setContentHeight(`-webkit-fill-available`);
      return;
    }
    const menuItem = document.querySelector(".menu-item");
    const menuItemHeight = menuItem.offsetHeight;
    const availableHeight = window.innerHeight - menuItemHeight * 3;
    setContentHeight(`${availableHeight + 2 - 250}px`); // 100px is to account for the top padding of the content space
  }, [isMobile]);

  const updateContentPosition = useCallback(() => {
    if (isMobile) {
      // setTopOffset(`80px`)
      return;
    }
    const menuItem = document.querySelector(".menu-item");
    const menuItemHeight = menuItem.offsetHeight;
    let contentTopOffset = menuItemHeight - 1;
    if (activeDiv === "div-2") {
      contentTopOffset = contentTopOffset * 2;
    }
    if (activeDiv === "div-3") {
      contentTopOffset = contentTopOffset * 3;
    }

    setTopOffset(`${contentTopOffset}px`);
  }, [isMobile, activeDiv]);

  useEffect(() => {
    const updateLayout = () => {
      updateContentHeight();
      updateContentPosition();
    };

    updateLayout();

    window.addEventListener("resize", updateLayout);

    return () => {
      window.removeEventListener("resize", updateLayout);
    };
  }, [updateContentHeight, updateContentPosition]);
  const experiences = [
    {
      id: 1,
      logo: dijgtalLogo,
      title: "UI Developer",
      content:
        "Designer at Heart, Developer in Action: As a UI Developer, I've found my niche at the intersection of design and development. This role has led me to spearhead significant projects, like crafting a complete design system for a client and optimizing websites through A/B testing - each task a blend of art and science. \n\nEmpathy Meets Innovation: My approach is rooted in adaptability and empathy. Understanding the client's perspective is key to creating products that not only look and feel great but also function seamlessly. This mindset has been essential in developing solutions that resonate with users. \n\n Creative Problem-Solving: The journey hasn't been without its challenges. Tackling technical hurdles has been as much a part of my role as leveraging creativity. It's about finding that sweet spot where innovative design meets robust functionality, resulting in products that truly stand out.",
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
    },
    {
      id: 4,
      logo: fullCirclelogo,
      title: "Web Developer",
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
      content:
        "Combining Skills and Vision: At Full Circle Digital Marketing, I blend my technical knowledge from academia with practical product management experience from my own business ventures. This unique mix allows me to take projects from initial Figma designs to fully functional websites. \n\n Understanding Beyond Code: My role goes beyond coding; it is deeply rooted in understanding clients visions and needs. By putting myself in their shoes, I ensure that each website is not just a digital space but a true reflection of their goals and aspirations. \n\n A Personal Touch: Working with Full Circle Digital Marketing has reinforced my belief in empathetic web development. Here, I create not just websites, but meaningful digital experiences that resonate with clients and their audiences.",
    },
    {
      id: 2,
      logo: pgvLogo,
      title: "Co-Founder",
      content:
        "From Passion to Niche Brand: Started in 2018, Playground Vintage grew from a personal project into a brand loved for its sustainable fashion, resonating with the environmentally-aware community in Sydney. \n\n Adapting to Challenges: Despite juggling studies and pandemic disruptions, I opened two stores by 2021 and started a successful e-commerce brand. This part of my journey involved learning to navigate unexpected challenges and adapt strategies, skills relevant to the ever-evolving fields of web development and UI/UX design. \n\n Building Relationships, Building Brands: The essence of Playground Vintage lies in its ability to create connections. This mirrors my approach to creative work: understanding and valuing people, their stories, and their needs, which is fundamental to creating meaningful and engaging experiences.",
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
    },
    {
      id: 3,
      logo: tediLogo,
      title: "Product Engineer",
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
      content:
        "Dynamic Team Role: In my role as a Product Engineer within a cross-functional team, I led the journey from concept to creation. This involved identifying user needs, developing a design brief, and building prototypes, all within stringent timelines. \n\n Overcoming and Innovating: Facing technical challenges, design iterations, and budget constraints, I balanced problem-solving with creative innovation. The satisfaction came from not just overcoming obstacles but also in crafting solutions that truly resonated with users, reinforcing my commitment to empathetic and practical design.",
    },
    // {
    //   id: 4,
    //   logo: unswLogo,
    //   title: "Bachelor of Environmental Engineering/Computer Science",
    //   content:
    //     "Something to be completed in the next couple of months. My degree has taught me everything from biology, chemistry, physics, environmental systems thinking, plenty of complex mathematics and a suite of programming languages (C, C++, Javascript, React, Node.JS, Java) plus a whole host of other useful technical skills. \n\nArguably though the most valuable skill I have gained from this is the ability to break down and solve hard problems. I know that my degree will not teach me everything I will ever need to know. However being able to problem solve has meant that if I don’t know something I am comfortable that I can work it out and become good at it.\n\nIf you’re interested in my problem solving method: \n\nIt is a process of breaking down the problem into small chunks.  Testing a solution on a particular chunk. The solution doesn’t work. Find out why. Learn. Iterate a new solution. Repeat until you have a working solution and repeat for each chunk. ",
    //   skills: [
    //     "User Research",
    //     "Product Ideation",
    //     "Interaction Design",
    //     "Prototyping",
    //     "Project Management",
    //     "Product Development",
    //     "Mechanical Engineering",
    //     "Software Engineering",
    //   ],
    // },
  ];

  const projects = [
    {
      id: 15,
      title: "SneakerDex",
      media_1: { type: "image", src: sneakerDeximage_1 },
      //media_2: { type: "image", src: sneakerDeximage_2 },
      content:
        "User-Centered Design Approach: SneakerDex began with a clear focus: design an online marketplace tailored for sneaker collectors. We honed in on what mattered to our users - collectors who cherish sneakers for their cool factor, cultural significance, and the joy of sharing their passion with others. \n\n Digital Showcase and Social Interaction: The core of SneakerDex is its ability to let enthusiasts digitally showcase their sneaker collections. It's like a personal window shop, highlighting owned pairs and gray-scaling the ones they're still hunting for. But it's more than just display; it's about fostering a community. The platform encourages trading and socializing, connecting collectors not just with friends but with the wider sneaker-loving community. \n\n Encouraging Collector Connections: At its heart, SneakerDex is about celebrating and deepening the connections between collectors. It's a space where their passion for sneakers turns into shared experiences and new friendships",
      skills: ["UI/UX Design", "Wireframing", "Prototyping"],
      contentHeight: "tall",
    },
    {
      id: 9,
      title: "Playground Vintage Website",
      media_1: { type: "image", src: playgroundVintagewebsite_1 },
      media_2: { type: "image", src: playgroundVintageWebsite_2 },
      content:
        "Adapting to New Realities: When COVID-19 hit, I realized the need to shift Playground Vintage from a physical shop to an online presence. It was a step into the unknown but a necessary one to keep our dream alive. \n\n Learning and Building from Scratch: I dove headfirst into the world of e-commerce and web development with little prior knowledge. It was a steep learning curve, but through persistence and many iterations, the Playground Vintage website came to life. \n\n A Story of Resilience and Growth: This wasn't just about building a website; it was about adapting to keep our business afloat. And it worked - we started seeing an average of $10,000 in sales every week. This journey through the lockdown didn't just sustain us; it helped us grow stronger.",
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
      //media_2: { type: "image", src: blackMarketProject_2 },
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
      id: 14,
      title: "Silk Drip The Label",
      media_1: { type: "image", src: silkDriptheLabelImage_1 },
      //media_2: { type: "image", src: silkDriptheLabelImage_2 },
      content:
        "Silk Drip the Label: Enhancing User Experience on a Budget \n\n Client Collaboration and Technical Solutions: Working with Silk Drip the Label, the challenge was clear: solve technical issues without stretching the budget. My role was to navigate through coding puzzles, focusing on making the site more user-friendly. This meant tackling tasks like refining the responsiveness of slideshows and optimizing button placements for a smoother user journey. \n\n Budget-Friendly Improvements: Through close collaboration, we discovered innovative ways to upgrade their website. Each solution was designed not just to fix immediate problems but to significantly enhance the site's overall functionality and appeal, all while keeping costs low. \n\n Empowering the Client: Perhaps one of the most rewarding achievements was customizing their CMS to be more intuitive. This allowed the clients to make updates and edits on their own, with zero coding experience needed. It was about giving them control and flexibility over their content, ensuring they could adapt and grow without constant technical support.",
      skills: ["blah"],
      contentHeight: "tall",
    },
    // {
    //   id: 10,
    //   title: "BEANS",
    //   media_1: { type: "icon", src: "https://github.com/Daniel-Farnham/Beans" },
    //   media_2: { type: "null", src: null },
    //   content:
    //     "The simplest way of describing Beans is it is a bootleg Microsoft Teams but with all the perks of being built by a team of scrappy university students. \n\n On the Beans project I worked as backend engineer and was heavily involved in developing features for different team ‘channels’, ‘standups’ as well as the authentication of users upon logging in. Beans went through a process of iterative development with each stage involving new features and updated testing using Jest.",
    //   skills: [
    //     "Typescript",
    //     "Jest",
    //     "Node.js",
    //     "Express.js",
    //     "Git/Gitlab",
    //     "Agile Development",
    //   ],
    // },
    // {
    //   id: 11,
    //   title: "Dungeonmania",
    //   media_1: {
    //     type: "icon",
    //     src: "https://github.com/Daniel-Farnham/Dungeonmania",
    //   },
    //   media_2: { type: null, src: null },
    //   content:
    //     "Dungeonmania is as it sounds a ‘Dungeon’ style adventure game developed in Java where the user moves through different rooms completing goals, collecting items, fighting enemies and navigating obstacles. My role in this project involved adding some new features to the game such as new items and weapons. However as some of the game was already built this quickly evolved into a large refactoring process to untangle the web of tight coupling between classes in order to make the process of adding these new features easier as development went on.",
    //   skills: [
    //     "Java",
    //     "Object Oriented Programming",
    //     "Git/GitLab",
    //     "UML Diagrams",
    //     "Iterative Development",
    //   ],
    // },
    // {
    //   id: 12,
    //   title: "BattleMips",
    //   media_1: {
    //     type: "icon",
    //     src: "https://github.com/Daniel-Farnham/Battlemips",
    //   },
    //   media_2: { type: null, src: null },
    //   content:
    //     "BattleMips is perhaps one of my most straightforward (on paper) but most difficult and deeply-technical projects that I have completed. In short BattleMips is the game ‘BattleShip’ but coded in the Assembly language MIPS. \n\n For the non-technical people, Assembly is one of the lowest-languages you get in programming - it is hard to decipher and involves a lot of binary/hexadecimal (1’s and 0’s - like what you see in the Matrix’). This project tested my technical skills and more importantly helped refine my toolkit allowing me to break down and deal with difficult problems.",
    //   skills: [
    //     "C",
    //     "Assembly",
    //     "Memory Management",
    //     "Binary",
    //     "Software Testing",
    //     "Technical Problem Solving",
    //     "Time Management",
    //   ],
    // },
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
  ];

  return (
    <div
      className={`content-space ${activeDiv ? "showContent" : "hideContent"}`}
      style={{ height: contentHeight, top: topOffset }}
    >
      <div
        className={`listContent ${
          activeDiv === "div-2" ? "showContent" : "hideContent"
        }`}
      >
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
      <div
        className={`listContent ${
          activeDiv === "div-3" ? "showContent" : "hideContent"
        }`}
      >
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
      <div
        className={`listContent hireMe ${
          activeDiv === "div-1" ? "showContent" : "hideContent"
        }`}
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
          <br></br> If this sounds at least 1% useful to you or you just wanted to chat with me - contact me below.
        </p>
        <div className={"who-am-i-links"}>
          <Links showLinks={true}></Links>
        </div>
      </div>
    </div>
  );
}

export default MenuContent;
