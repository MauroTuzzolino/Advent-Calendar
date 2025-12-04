import DayCard from "./DayCard";
import { days } from "../data/days";

const Calendar = ({ onOpenDay }) => {
  const today = new Date().getDate(); // es. 7

  return (
    <div className="calendar">
      {days.map((d) => (
        <DayCard key={d.day} day={d.day} isUnlocked={d.day <= today} onOpen={onOpenDay} />
      ))}
    </div>
  );
};

export default Calendar;
