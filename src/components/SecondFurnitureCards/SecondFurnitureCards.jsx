import "./secondfurniturecards.css";
import SecondFurnitureCard from "./SecondFurnitureCard";
import "./secondfurniturecards.css";

function SecondFurnitureCards() {
  const secondFurnitureCards = [
    {
      id: 1,
      image: "src/assets/secondCardsFirst.png",
      description: "Sofa",
    },
    {
      id: 2,
      image: "src/assets/secondCardsSecond.png",
      description: "nightstand",
    },
    {
      id: 3,
      image: "src/assets/secondCardsThird.png",
      description: "Bedroom",
    },
  ];

  return (
    <div className="secondfurniturecards">
      {secondFurnitureCards.map((card) => (
        <SecondFurnitureCard
          key={card.id}
          image={card.image}
          cardDesc={card.description}
          cardId={card.id}
        />
      ))}
    </div>
  );
}

export default SecondFurnitureCards;
