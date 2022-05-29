import React from "react";
import Card from "./Card";
function CardList({ cards, onDelete }) {
  return (
    <div className="flex flex-wrap justify-center">
      {cards.map((card) => (
        <Card key={card.id} id={card.id} onDelete={onDelete} {...card} />
      ))}
    </div>
  );
}

export default CardList;
