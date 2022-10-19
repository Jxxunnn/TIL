/* main.js */
const container = document.querySelector(".container");
const prevButton = document.querySelector(".btn-prev");
const nextButton = document.querySelector(".btn-next");

let index = 0;

prevButton.addEventListener("click", () => {
  if (index === 0) return;
  index -= 1;
  container.style.transform = `translateX(-${500 * index}px)`;
});

nextButton.addEventListener("click", () => {
  if (index === 2) return;
  index += 1;
  container.style.transform = `translateX(-${500 * index}px)`;
});
