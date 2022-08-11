import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const cardComponent = robots.map((user, index) => {
    return (
      <Card
        key={index}
        name={robots[index].name}
        id={robots[index].id}
        email={robots[index].email}
      /> //this code creates an array of Card components and stores them in the cardComponent array
    );
  });
  return <div>{cardComponent}</div>;
};

export default CardList;
