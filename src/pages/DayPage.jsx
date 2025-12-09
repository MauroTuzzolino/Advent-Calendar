import { useParams, Link } from "react-router-dom";

export default function DayPage() {
  const { day } = useParams();

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
