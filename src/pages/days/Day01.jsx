export default function Day01() {
  return (
    <div className="day-content">
      <h2>🎁 Giorno 1</h2>

      <p style={{ marginTop: "12px" }}>Benvenuto nel primo giorno del calendario dell’Avvento! Oggi ti attende una piccola sorpresa ✨</p>

      <div
        style={{
          marginTop: "25px",
          padding: "20px",
          background: "rgba(255,255,255,0.15)",
          borderRadius: "12px",
          backdropFilter: "blur(6px)",
          border: "1px solid rgba(255,255,255,0.3)",
          textAlign: "center",
        }}
      >
        <img src="https://cdn-icons-png.flaticon.com/512/763/763812.png" alt="gift" style={{ width: "120px", marginBottom: "15px" }} />
        <p>Un piccolo regalo virtuale per iniziare questo viaggio 🎄✨</p>
      </div>
    </div>
  );
}
