// let button = document.getElementById("button");
// button.addEventListener("click", () => {
//   window.location.href = "http://127.0.0.1:5500/netflix%20clone/netflix5.html";
// });

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    document
      .querySelectorAll(".card")
      .forEach((c) => c.classList.remove("shadow"));
    card.classList.add("shadow");
  });
});

// document.addEventListener("DOMContentLoaded", () => {
//   const cards = document.querySelectorAll(".card");

//   cards.forEach((card) => {
//     card.addEventListener("click", () => {
//       cards.forEach((c) => c.classList.remove("selected"));
//       card.classList.add("selected");
//     });
//   });
// });

const cards = document.querySelectorAll(".card");
let selectedCard = null;

cards.forEach((card) => {
  card.addEventListener("click", () => {
    if (selectedCard) {
      selectedCard.classList.remove("selected");
    }
    card.classList.add("selected");
    selectedCard = card;
  });
});

document.getElementById("button").addEventListener("click", () => {
  if (selectedCard) {
    window.location.href =
      "http://127.0.0.1:5500/netflix%20clone/netflix5.html";
  } else {
    alert("Please select the plan before proceeding.");
  }
});
