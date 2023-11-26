import "./firstfurniturecards.css";
import FirstFurnitureCard from "./FirstFurnitureCard";
function FirstFurnitureCards() {
  const firstFurnitureCards = [
    {
      id: 1,
      image: "src/assets/firstCardsFirst.png",
      description: "Dining Tables",
    },
    {
      id: 2,
      image: "src/assets/firstCardsSecond.png",
      description: "Chairs",
    },
    {
      id: 3,
      image: "src/assets/firstCardsThird.png",
      description: "Office Desks",
    },
  ];

  return (
    <div className="firstfurniturecards">
      {firstFurnitureCards.map((card) => (
        <FirstFurnitureCard
          key={card.id}
          image={card.image}
          cardDesc={card.description}
          cardId={card.id}
        />
      ))}
    </div>
  );
}

export default FirstFurnitureCards;
