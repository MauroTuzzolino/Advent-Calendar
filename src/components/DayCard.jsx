import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const DayCard = ({ day, isUnlocked }) => {
  const cardRef = useRef(null);
  const navigate = useNavigate();

  const handleClick = () => {
    if (!isUnlocked) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    // posizione iniziale esatta
    card.style.position = "fixed";
    card.style.top = rect.top + "px";
    card.style.left = rect.left + "px";
    card.style.width = rect.width + "px";
    card.style.height = rect.height + "px";

    // attiva la classe espansione
    card.classList.add("expand");

    // forza il repaint
    void card.offsetWidth;

    // destinazione fullscreen
    card.style.top = "0";
    card.style.left = "0";
    card.style.width = "100vw";
    card.style.height = "100vh";

    // quando tutte le transizioni finiscono → naviga
    const onAnimationEnd = (e) => {
      // vogliamo aspettare solo l'ULTIMA transizione legata all'espansione
      if (e.propertyName === "height") {
        card.removeEventListener("transitionend", onAnimationEnd);

        // navigazione alla pagina del giorno
        navigate(`/day/${day}`);
      }
    };

    card.addEventListener("transitionend", onAnimationEnd);
  };

  return (
    <div ref={cardRef} className={`day-card ${isUnlocked ? "unlocked" : "locked"}`} onClick={handleClick}>
      {day}
      {!isUnlocked && <div className="lock">🔒</div>}
    </div>
  );
};

export default DayCard;
