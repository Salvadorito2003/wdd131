const yearElement = document.querySelector("#currentyear");
const currentYear = new Date().getFullYear();
yearElement.textContent = `© ${currentYear}`;

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation")
menuButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	menuButton.classList.toggle("open");
});

const lastModifiedElement = document.querySelector("#lastmodified");
lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;


const container = document.getElementById("temple-container");
let temples = JSON.parse(localStorage.getItem("temples"));
if (temples) {
    temples = [
  {
  templeName: "Mendoza Argentina Temple",
    location: "Mendoza, Mendoza, Argentina",
    dedicated: "2018, October, 7",
    area: 21999,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/mendoza-argentina-temple/mendoza-argentina-temple-51731.jpg"
  },
  {
    templeName: "Buenos Aires Argentina Temple",
    location: "Ciudad Evita, Buenos Aires, Argentina",
    dedicated: "1986, January, 17–19",
    area: 30659,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-2970.jpg"
  },
  {
  templeName: "Córdoba Argentina Temple",
    location: "Córdoba, Córdoba, Argentina",
    dedicated: "2015, May, 17",
    area: 34369,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/cordoba-argentina-temple/cordoba-argentina-temple-11093.jpg"
  },
  {
  templeName: "Bahia Blanca Argentina Temple",
    location: "Bahia Blanca, Buenos Aires, Argentina",
    dedicated: "2025, Nov, 23",
    area: 19000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/bahia-blanca-argentina-temple/bahia-blanca-argentina-temple-60881.jpg"
  },
  {
  templeName: "Salta Argentina Temple",
    location: "Salta, salta, Argentina",
    dedicated: "2025, Jun, 16",
    area: 27000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salta-argentina-temple/salta-argentina-temple-48253.jpg"
  },
  {
  templeName: "Buenos Aires City Center Argentina Temple",
    location: "Buenos Aires, Buenos Aires, Argentina",
    dedicated: "Under Construction",
    area: 67900,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-city-center-argentina-temple/buenos-aires-city-center-argentina-temple-61078-main.jpg"
  },
  {
  templeName: "Rosario Argentina Temple",
    location: "Rosario, Santa Fe, Argentina",
    dedicated: "Under Planning and Design",
    area: "",
    imageUrl: ""
  }
  ];
  localStorage.setItem("temples", JSON.stringify(temples));
};
createTempleCard(temples);

function createTempleCard (temples) {
  document.querySelector("#temple-container").innerHTML = "";
  temples.forEach(temple => {
    const card = document.createElement("div");
    card.classList.add("temple-card");

    const name = document.createElement("h2");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.textContent = `Location: ${temple.location}`;

    const dedication = document.createElement("p");
    dedication.textContent = `Dedicated: ${temple.dedicated}`;

    const area = document.createElement("p");
    area.textContent = `Area: ${temple.area} sq ft`;

    const image = document.createElement("img");
    image.src = temple.imageUrl;
    image.alt = temple.templeName;
    image.loading = "lazy";

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);

    container.appendChild(card);
  });
};
