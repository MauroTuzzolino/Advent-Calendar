import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Calendar from "./components/Calendar";
import Snow from "./components/Snow";
import MusicToggle from "./components/MusicToggle";
import DayPage from "./pages/DayPage";

function App() {
  return (
    <div className="app">
      <Snow />
      <MusicToggle />
      <h1 className="title">🎄 Advent Calendar 2025 🎄</h1>
      <Router>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
                  <Calendar />
                </motion.div>
              }
            />

            <Route
              path="/day/:dayId"
              element={
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <DayPage />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
