import React from "react";
import Card from "./Card";
import { getInitialData } from "../utils/data-card";
function CardList() {
  return (
    <div className="flex flex-wrap justify-center">
      {getInitialData().map((data, index) => (
        <Card key={index} {...data} />
      ))}
    </div>
  );
}

export default CardList;
