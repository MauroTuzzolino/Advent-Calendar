import { useState, useRef } from "react";

const DayCard = ({ day, isUnlocked, onOpenDay }) => {
  const [isExpanding, setIsExpanding] = useState(false);
  const cardRef = useRef(null);

  const handleClick = () => {
    if (!isUnlocked) return;

    setIsExpanding(true);

    setTimeout(() => {
      onOpenDay(day);
    }, 600); // tempo dell'animazione
  };

  return (
    <div ref={cardRef} className={`day-card ${isExpanding ? "expand" : ""} ${!isUnlocked ? "locked" : ""}`} onClick={handleClick}>
      {day}
    </div>
  );
};

export default DayCard;
