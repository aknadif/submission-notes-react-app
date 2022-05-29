import React from "react";
import Card from "./Card";
import CardArchive from "./CardArchive";
function CardList({ cards, onDelete, onArchive, archived, onOutArchive }) {
  return (
    <div className="flex flex-wrap justify-center">
      {cards.map((card) => {
        if (card.archived === archived && card.archived === false) {
          return <Card key={card.id} id={card.id} onDelete={onDelete} onArchive={onArchive} {...card} />;
        } else if (card.archived === archived && card.archived === true) {
          return <CardArchive key={card.id} id={card.id} onDelete={onDelete} onOutArchive={onOutArchive} {...card} />;
        }
        return null;
      })}
    </div>
  );
}

export default CardList;
