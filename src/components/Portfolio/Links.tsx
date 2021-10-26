import React from "react";
import "../../css/Portfolio/Links.css"

// Props
interface props {
  links: {
    title: string;
    link: string;
  }[];
}

const Links = ({ links }: props) => {
  return (
    <>
      {links.map((link, index) => (
          <a href={link.link} className={"portfolioLink overpass"} style={{textDecoration: "none"}} key={index}>{link.title}</a>
      ))}
    </>
  );
};

export default Links;
