const yearElement = document.querySelector("#currentyear");
const currentYear = new Date().getFullYear();
yearElement.textContent = `© ${currentYear}`;
const lastModifiedElement = document.querySelector("#lastmodified");
lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;

const reviewForm = document.querySelector("form");

reviewForm.addEventListener("submit", function(event) {
    let reviewCount = parseInt(localStorage.getItem("completedReviews") ?? 0);
    reviewCount++;
    localStorage.setItem("completedReviews", reviewCount);
});

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const productList = document.querySelector("#product");
products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;


    productList.appendChild(option);
})





