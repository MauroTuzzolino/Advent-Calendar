import { useRef } from "react";

const DayCard = ({ day, isUnlocked, onOpenDay }) => {
  const cardRef = useRef(null);

  const handleClick = () => {
    if (!isUnlocked) return;

    const realCard = cardRef.current;
    const rect = realCard.getBoundingClientRect();

    // 1️⃣ Clona la card
    const clone = realCard.cloneNode(true);
    clone.style.position = "fixed";
    clone.style.top = rect.top + "px";
    clone.style.left = rect.left + "px";
    clone.style.width = rect.width + "px";
    clone.style.height = rect.height + "px";
    clone.style.margin = 0;
    clone.style.zIndex = 9999;
    clone.style.transition = "top 0.55s ease, left 0.55s ease, width 0.55s ease, height 0.55s ease";

    // Metti il clone nel DOM sopra tutto
    document.body.appendChild(clone);

    // Nascondi la card reale durante l’animazione
    realCard.style.opacity = "0";

    // 2️⃣ Forza repaint
    void clone.offsetWidth;

    // 3️⃣ Anima verso fullscreen
    requestAnimationFrame(() => {
      clone.style.top = "0px";
      clone.style.left = "0px";
      clone.style.width = "100vw";
      clone.style.height = "100vh";
    });

    // 4️⃣ Quando finisce → naviga + rimuovi clone
    setTimeout(() => {
      onOpenDay(day);
      clone.remove();
      realCard.style.opacity = "1";
    }, 600);
  };

  return (
    <div ref={cardRef} className={`day-card ${isUnlocked ? "unlocked" : "locked"}`} onClick={handleClick}>
      {day}
      {!isUnlocked && <div className="lock">🔒</div>}
    </div>
  );
};

export default DayCard;
