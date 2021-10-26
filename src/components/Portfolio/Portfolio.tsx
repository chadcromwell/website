import "../../css/Portfolio/Portfolio.css";
import React from "react";
import HorizontalLine from "../HorizontalLine/HorizontalLine";
import audioOverlapImage from "../../images/audioOverlap.jpg";
import antsImage from "../../images/ants.jpg";
import felixImage from "../../images/felix.jpg";
import tcgImage from "../../images/tcg.jpg";
import ufoImage from "../../images/ufo.jpg";
import pathfinderImage from "../../images/pathfinder.jpg";
import antAIImage from "../../images/antAI.jpg";
import openGLImage from "../../images/openGL.jpg";
import tcsImage from "../../images/tcs.jpg";
import posSystemImage from "../../images/posSystem.jpg";
import invasionImage from "../../images/invasion.jpg";
import PortfolioItem from "./PortfolioItem";

const items = [
  {
    image: audioOverlapImage,
      imageAlt: "audio overlap image",
    title: "audioOverlap",
    description:
      "A simple JavaScript solution for overlapping HTML5 Audio object.",
    links: [
      {
        title: "Git repository",
        link: "https://github.com/chadcromwell/audioOverlap",
      },
    ],
  },
  {
    image: antsImage,
      imageAlt: "ants image",
    title: "Ants!",
    description: "An HTML5 tower defence game.",
    links: [
      {
        title: "Video demo",
        link: "https://youtu.be/RqYTKjAFJuA",
      },
      {
        title: "Play online",
        link: "http://www.chadcromwell.com/ants/",
      },
    ],
  },
    {
        image: felixImage,
        imageAlt: "felix image",
        title: "Felix",
        description: "An Android mobile game.",
        links: [
            {
                title: "Video demo",
                link: "https://youtu.be/WppWLFkWk4M",
            },
            {
                title: "Demo reel",
                link: "https://youtu.be/NSaewl4mlSE",
            },
        ],
    },
    {
        image: tcgImage,
        imageAlt: "TCG image",
        title: "TCG",
        description: "A rewards-based learning research project.",
        links: [
            {
                title: "Collection book demo",
                link: "https://youtu.be/K7L0iyEquvc",
            },
            {
                title: "Dashboard demo",
                link: "https://youtu.be/ckfmcX3HCA8",
            },
            {
                title: "Leaderboard demo",
                link: "https://youtu.be/TGuT2UpTmzw",
            }
        ],
    },
    {
        image: ufoImage,
        imageAlt: "UFO image",
        title: "UFO",
        description: "A C++ arcade game.",
        links: [
            {
                title: "Video demo",
                link: "https://youtu.be/DdbmEWUg7Ro",
            },
        ],
    },
    {
        image: pathfinderImage,
        imageAlt: "pathfinder image",
        title: "Pathfinder",
        description: "A Java A* algorithm pathfinder program.",
        links: [
            {
                title: "Download program",
                link: "http://www.chadcromwell.com/portfolio/Pathfinder.zip",
            },
        ],
    },
    {
        image: antAIImage,
        imageAlt: "ant AI image",
        title: "Ant AI",
        description: "A Java finite state machine AI program.",
        links: [
            {
                title: "Download program",
                link: "http://www.chadcromwell.com/portfolio/Ants.zip",
            },
        ],
    },
    {
        image: openGLImage,
        imageAlt: "open GL image",
        title: "OpenGL Projects",
        description: "A few early OpenGL projects.",
        links: [
            {
                title: "See more",
                link: "https://www.artstation.com/artwork/Z5ZKXZ",
            },
        ],
    },
    {
        image: tcsImage,
        imageAlt: "temperature control system image",
        title: "TCS",
        description: "An Arduino PID temperature control system.",
        links: [
            {
                title: "Video demo",
                link: "https://youtu.be/Ms3NO7-9edw",
            },
            {
                title: "Documentation",
                link: "http://www.chadcromwell.com/portfolio/PID/Project.pdf",
            },
        ],
    },
    {
        image: posSystemImage,
        imageAlt: "point of sale system image",
        title: "POS System",
        description: "A Java POS system for a coffee shop.",
        links: [
            {
                title: "Video demo",
                link: "https://youtu.be/lJaQT3fFXFg",
            },
            {
                title: "Download program",
                link: "http://www.chadcromwell.com/Crema.zip",
            },
        ],
    },
    {
        image: invasionImage,
        imageAlt: "invasion image",
        title: "Invasion",
        description: "A short I created, storyboarded, and pitched.",
        links: [
            {
                title: "Video demo",
                link: "https://youtu.be/RqYTKjAFJuA",
            },
            {
                title: "Play online",
                link: "http://www.chadcromwell.com/ants/",
            },
        ],
    },
];
const Portfolio = () => {
  return (
    <div className={"portfolio"}>
      <div className={"sectionHeader"}>
        <div className={"titleNumber roboto-thin"}>03.</div>
        <div className={"sectionTitle roboto-bold"}>A Few Things I've Made</div>
        <HorizontalLine />
      </div>
      <div className={"itemsFlex"}>
        <PortfolioItem items={items} />
      </div>
    </div>
  );
};

export default Portfolio;
