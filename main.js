const cellElements = document.querySelectorAll("[data-cell]");

for (const cell of cellElements) {
  cell.addEventListener("click", handleClick, { onde: true });
}

const handleClick = () => {
  // Colocar o símbolo (X ou Círculo)
  // Verificar por vitória
  // Verificar por empate
  // Trocar de símbolo
};
