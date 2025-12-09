import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { dayComponents } from "./days";

export default function DayPage() {
  const { day } = useParams();

  useEffect(() => {
    const overlay = document.getElementById("transition-overlay");

    if (overlay) {
      setTimeout(() => {
        overlay.classList.remove("visible");
      }, 50);
    }
  }, []);

  const Component = dayComponents[day];

  if (!Component) {
    return (
      <div className="day-page">
        <h1>Giorno non trovato</h1>
        <Link className="back-btn" to="/">
          Torna al calendario
        </Link>
      </div>
    );
  }

  return (
    <div className="day-page">
      <Component />

      <Link className="back-btn" to="/">
        Torna al calendario
      </Link>
    </div>
  );
}
