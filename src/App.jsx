import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Calendar from "./components/Calendar";
import DayPage from "./pages/DayPage";
import Snow from "./components/Snow";
import MusicToggle from "./components/MusicToggle";

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

  const openDay = (day) => {
    navigate(`/day/${day}`);
  };

  return (
    <div className="app">
      <div id="transition-overlay"></div>
      <Snow />
      <MusicToggle />
      <h1 className="title">🎄 Advent Calendar 2025 🎄</h1>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.35 }}>
                <div className="calendar-container">
                  <Calendar onOpenDay={openDay} />
                </div>
              </motion.div>
            }
          />

          <Route
            path="/day/:dayId"
            element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
                <DayPage />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
