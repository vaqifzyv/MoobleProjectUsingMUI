import React from "react";
import CraftedCard from "./CraftedCard";
import "./craftedcards.css";

function CraftedCards() {
  const craftedCardInformation = [
    {
      id: 1,
      image: "src/assets/craftedcardsfirst.jfif",
      description: "Fabric Chair",
    },
    {
      id: 2,
      image: "src/assets/craftedcardssecond.jfif",
      description: "Fabric Chair",
    },
    {
      id: 3,
      image: "src/assets/craftedcardsthird.jfif",
      description: "Fabric Chair",
    },
    {
      id: 4,
      image: "src/assets/craftedcardsfourth.jfif",
      description: "Fabric Chair",
    },
    {
      id: 5,
      image: "src/assets/craftedcardsfifth.jfif",
      description: "Fabric Chair",
    },
    {
      id: 6,
      image: "src/assets/craftedcardssixth.jfif",
      description: "Fabric Chair",
    },
    {
      id: 7,
      image: "src/assets/craftedcardsseventh.jfif",
      description: "Fabric Chair",
    },
    {
      id: 8,
      image: "src/assets/craftedcardseigth.jfif",
      description: "Fabric Chair",
    },
  ];
  return (
    <div className="craftedcards">
      {craftedCardInformation.map((card) => (
        <CraftedCard
          key={card.id}
          image={card.image}
          cardDesc={card.description}
          cardId={card.id}
        />
      ))}
    </div>
  );
}

export default CraftedCards;
