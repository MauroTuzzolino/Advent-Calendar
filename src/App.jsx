import Calendar from "./components/Calendar";
import { days } from "./data/days";

function App() {
  const handleOpenDay = (dayNumber) => {
    const item = days.find((d) => d.day === dayNumber);
    alert(item.content);
  };

  return (
    <div className="app">
      <h1>🎄 Advent Calendar 2025 🎄</h1>
      <Calendar onOpenDay={handleOpenDay} />
    </div>
  );
}

export default App;
