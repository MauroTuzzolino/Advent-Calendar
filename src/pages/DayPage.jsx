import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function DayPage() {
  const { day } = useParams();

  useEffect(() => {
    const overlay = document.getElementById("transition-overlay");

    if (overlay) {
      // Aspettiamo 50ms per dare il tempo alla pagina di renderizzare
      setTimeout(() => {
        overlay.classList.remove("visible"); // dissolve
      }, 50);
    }
  }, []);

  return (
    <div className="day-page">
      <h1>Giorno {day}</h1>

      <p>Qui puoi mettere una grafica speciale, una sorpresa o un messaggio natalizio ✨</p>

      <Link className="back-btn" to="/">
        Torna al calendario
      </Link>
    </div>
  );
}
