import React from "react";
import "../css/Industries.css";
import blockchain from "../images/blockchain.png";
import route from "../images/route.png";
import manufact from "../images/manufacture.png";
import electricvechicle from "../images/electric.png";

export default function Industries() {
  const cardDetails = [
    {
      img: blockchain,
      heading: "BlockChain",
      description:
        "It is a long established fact that a reader will be distracted by the readable content",
    },
    {
      img: route,
      heading: "Travel and Hospitality",
      description:
        "It is a long established fact that a reader will be distracted by the readable content",
    },
    {
      img: manufact,
      heading: "Manufacturing",
      description:
        "It is a long established fact that a reader will be distracted by the readable content",
    },
    {
      img: electricvechicle,
      heading: "Electric Vechicle",
      description:
        "It is a long established fact that a reader will be distracted by the readable content",
    },
  ];

  return (
    <div className="industries-section padding-lr padding-tb">
      INDUSTRIES
      <h1 className="text">
        Our <span className="colour">expertiese</span> and solution
      </h1>
      <div className="card-row">
        {cardDetails.map((cardDetails) => (
          <div className="card">
            <div className="image-details">
              <img src={cardDetails.img} alt="John" />
            </div>
            <div className="card-information">
              <h1 className="heading">{cardDetails.heading}</h1>
              <p class="description">{cardDetails.description}</p>
            </div>
          </div>
        ))}
        <div className="card-arrow">
          <i class="fa-solid fa-circle-arrow-right"></i>
        </div>
      </div>
    </div>
  );
}
