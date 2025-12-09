// Import dinamico di tutti i file DayXX.jsx
const dayComponents = {};

const modules = import.meta.glob("./Day*.jsx", { eager: true });
console.log(modules);

for (const path in modules) {
  const fileName = path.split("/").pop(); // "Day01.jsx"

  // Estrai il numero dal nome file
  const num = parseInt(fileName.replace("Day", "").replace(".jsx", ""), 10);

  // Converte in stringa a 2 cifre: 1 → "01"
  const key = String(num).padStart(2, "0");

  // Salva il componente con la chiave corretta
  dayComponents[key] = modules[path].default;
}

export { dayComponents };
