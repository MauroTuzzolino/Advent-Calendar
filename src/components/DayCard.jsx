import { motion } from "framer-motion";

const DayCard = ({ day, isUnlocked, onOpen }) => {
  return (
    <motion.div
      className={`day-card ${isUnlocked ? "unlocked" : "locked"}`}
      onClick={() => isUnlocked && onOpen(day)}
      whileHover={isUnlocked ? { scale: 1.05 } : {}}
      whileTap={isUnlocked ? { rotateY: 180 } : {}}
      transition={{ duration: 0.4 }}
    >
      <div className="number">{day}</div>
      {!isUnlocked && <div className="lock">🔒</div>}
    </motion.div>
  );
};

export default DayCard;
