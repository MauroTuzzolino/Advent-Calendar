import { useEffect } from "react";

const Snow = () => {
  useEffect(() => {
    const snowContainer = document.createElement("div");
    snowContainer.className = "snow-container";
    document.body.appendChild(snowContainer);

    const createSnowflake = () => {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      snowflake.textContent = "❄";

      // posizione casuale
      snowflake.style.left = Math.random() * 100 + "vw";

      // dimensione casuale
      const size = Math.random() * 1.5 + 0.8;
      snowflake.style.fontSize = size + "rem";

      // durata caduta casuale
      snowflake.style.animationDuration = Math.random() * 3 + 3 + "s";

      snowContainer.appendChild(snowflake);

      // rimuovi fiocco dopo l’animazione
      setTimeout(() => snowflake.remove(), 6000);
    };

    const interval = setInterval(createSnowflake, 200);

    return () => {
      clearInterval(interval);
      snowContainer.remove();
    };
  }, []);

  return null;
};

export default Snow;
