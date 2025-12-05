import { useState } from "react";
import Calendar from "./components/Calendar";
import { days } from "./data/days";
import Modal from "./components/Modal";
import Snow from "./components/Snow";
import MusicToggle from "./components/MusicToggle";

function App() {
  const [selectedContent, setSelectedContent] = useState(null);

  const handleOpenDay = (dayNumber) => {
    const item = days.find((d) => d.day === dayNumber);
    setSelectedContent(item.content);
  };

  const closeModal = () => setSelectedContent(null);

  return (
    <div className="app">
      <Snow />
      <MusicToggle />
      <h1 className="title">🎄 Advent Calendar 2025 🎄</h1>

      <Calendar onOpenDay={handleOpenDay} />

      <Modal isOpen={!!selectedContent} content={selectedContent} onClose={closeModal} />
    </div>
  );
}

export default App;
