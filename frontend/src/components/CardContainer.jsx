import Card from "./Card";

import "./CardContainer.css";

const CardContainer = ({ cards }) => (
  <div className="cards-container">
    {cards.map((card) => (
      <Card
        key={card.id}
        title={card.title}
        content={card.content}
        imgUrl={card.imgUrl}
      />
    ))}
  </div>
);

export default CardContainer;
