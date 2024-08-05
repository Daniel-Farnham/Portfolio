import blackMarketProject from "./assets/BlackMarketProject.png";
import blackMarketProject_2 from "./assets/BlackMarketProject2.png"
import hanami from "./assets/Hanami.png"
import nucanon from "./assets/Nucanon.png"
import sneakerDeximage_1 from "./assets/SneakerDex.png";
import sneakerDeximage_2 from "./assets/SneakerDex_image2.png"
import silkDriptheLabelImage_1 from "./assets/SilkDripTheLabel.png";
import silkDriptheLabelImage_2 from "./assets/SilkDripTheLabelimage_2.png"
import playgroundVintagewebsite_1 from "./assets/playgroundVintageWebsite.png";
import playgroundVintageWebsite_2 from "./assets/playgroundVintageWebsite_2.png";
import it_crowd from "./assets/the-it-crowd-moss-the-it-crowd.gif"
import bob_ross from "./assets/painting-bob-ross.gif"

export const experiences = [
    {
      id: 1,
      title: "Development",
      content: [
        "custom landing pages",
        "animations + motion",
        "web app development",
        "ecommerce development",
        "analytics + A/B testing",
      ],
      media: { src: it_crowd }
    },
    {
      id: 2,
      title: "Design + Optimisation",
      content: [
        "wireframing",
        "visual identity",
        "user experience design",
        "site speed optimisation",
        "SEO development",
      ],
      media: { src: bob_ross }
    },
  ];
  
  export const projects = [
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
        "The Black Market Project: Bringing a crucial wildlife trade narrative to life through creating a digital window into the complex relationship between humans and nature. \n\n Built a website that serves as a platform for this ongoing journalistic project, making sure people can easily access and engage with the findings and insights. \n\n Crafted a visually compelling interface that draws users in, inviting them to explore the hidden stories and impacts of wildlife trade, and fostering a deeper connection between people and nature.",
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
      id: 14,
      title: "Silk Drip The Label",
      media_1: { type: "image", src: silkDriptheLabelImage_1 },
      media_2: { type: "image", src: silkDriptheLabelImage_2 },
      content:
        "Silk Drip the Label: Enhancing User Experience on a Budget \n\n Developed custom Shopify CMS components that are flexible and can be modified with no-code. \n\n Enhanced user experience through intuitive navigation, fast page loads, and a smooth checkout process, leading to increased customer satisfaction and conversions. \n\n Brought to life custom designs with code while acomodating for low budget and time constraints.",
      skills: ["blah"],
      contentHeight: "tall",
    },
    {
      id: 10,
      title: "Hanami",
      media_1: { type: "image", src: hanami },
      media_2: { type: "image", src: silkDriptheLabelImage_2 },
      content:
        "Silk Drip the Label: Enhancing User Experience on a Budget \n\n Developed custom Shopify CMS components that are flexible and can be modified with no-code. \n\n Enhanced user experience through intuitive navigation, fast page loads, and a smooth checkout process, leading to increased customer satisfaction and conversions. \n\n Brought to life custom designs with code while acomodating for low budget and time constraints.",
      skills: ["blah"],
      contentHeight: "tall",
    },
    {
      id: 11,
      title: "Nucanon",
      media_1: { type: "image", src: nucanon },
      media_2: { type: "image", src: silkDriptheLabelImage_2 },
      content:
        "Silk Drip the Label: Enhancing User Experience on a Budget \n\n Developed custom Shopify CMS components that are flexible and can be modified with no-code. \n\n Enhanced user experience through intuitive navigation, fast page loads, and a smooth checkout process, leading to increased customer satisfaction and conversions. \n\n Brought to life custom designs with code while acomodating for low budget and time constraints.",
      skills: ["blah"],
      contentHeight: "tall",
    }
  ];