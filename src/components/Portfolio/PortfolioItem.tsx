import React from "react";
import Links from "./Links";
import "../../css/fonts.css";

// Props
interface props {
  items: {
    image: string;
    imageAlt: string;
    title: string;
    description: string;
    links: {
      title: string;
      link: string;
    }[];
  }[];
}

const PortfolioItem = ({ items }: props) => {
  return (
    <>
      {items.map((item, index) => (
        <div className={"portfolioItemBox"} key={index}>
          <div className={"portfolioItemImage"} />
          <img
            src={item.image}
            alt={item.imageAlt}
            className={"portfolioItemImage"}
          />
          <div className={"portfolioItemTitle portfolio-roboto-bold"}>
            {item.title}
          </div>
          <div className={"portfolioItemDescription overpass"}>
            {item.description}
          </div>
          <div className={"links"}>
            <Links links={item.links} />
          </div>
        </div>
      ))}
    </>
  );
};

export default PortfolioItem;
