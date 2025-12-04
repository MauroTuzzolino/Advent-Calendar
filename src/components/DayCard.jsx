const DayCard = ({ day, isUnlocked, onOpen }) => {
  return (
    <div className={`day-card ${isUnlocked ? "unlocked" : "locked"}`} onClick={() => isUnlocked && onOpen(day)}>
      <div className="number">{day}</div>
      {!isUnlocked && <div className="lock">🔒</div>}
    </div>
  );
};

export default DayCard;
