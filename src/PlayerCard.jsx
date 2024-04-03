// PlayerCard.jsx
import React from "react";

const PlayerCard = ({ pup, onClick }) => {
  const handleClick = () => {
    onClick(pup);
  };

  return (
    <section className="playerCard" onClick={handleClick}>
      <h2>{pup.name}</h2>
      <img src={pup.imageUrl} alt={pup.name} />
    </section>
  );
};

export default PlayerCard;
