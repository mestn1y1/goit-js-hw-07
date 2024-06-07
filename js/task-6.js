function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = document.querySelector("[data-create]");
const destroyBoxes = document.querySelector("[data-destroy]");
const input = document.querySelector("input");
const boxesContainer = document.querySelector("#boxes");

boxesContainer.style.display = "flex";
boxesContainer.style.flexWrap = "wrap";

const addBox = (amount) => {
  destroyBox();
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.margin = `${20}px`;
    boxesContainer.appendChild(box);
  }
};

createBoxes.addEventListener("click", () => {
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100) {
    addBox(amount);
  } else {
    alert("Please enter a number between 1 and 100");
  }
});

const destroyBox = () => {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";
};

destroyBoxes.addEventListener("click", destroyBox);
