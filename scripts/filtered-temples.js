const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation")
const yearElement = document.querySelector("#currentyear");
const currentYear = new Date().getFullYear();
yearElement.textContent = `© ${currentYear}`;

menuButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	menuButton.classList.toggle("open");
});

const lastModifiedElement = document.querySelector("#lastmodified");
lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
const container = document.getElementById("templeContainer");
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
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
  templeName: "Mendoza Argentina Temple",
    location: "Mendoza, Mendoza, Argentina",
    dedicated: "2018, October, 7",
    area: 21999,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/mendoza-argentina-temple/mendoza-argentina-temple-51731.jpg"
  }
];
createTempleCard(temples);

const filterButtons = document.querySelectorAll("#home, #old, #large, #small, #new"); 

function setActiveButton(button) {
  filterButtons.forEach(btn => btn.classList.remove("active-link"));
  button.classList.add("active-link");
}

const homeTemplesLink = document.querySelector("#home");
homeTemplesLink.addEventListener("click", () => {
  setActiveButton(homeTemplesLink);
  createTempleCard(temples);
});

const oldTemplesLink = document.querySelector("#old");
oldTemplesLink.addEventListener("click", () => {
  setActiveButton(oldTemplesLink);
  createTempleCard(temples.filter (temple => {
    let splittedDedication = temple.dedicated.split(",");
    dedicationYear = parseInt(splittedDedication[0]);
    return dedicationYear < 1900;
  }));
});

const newTemplesLink = document.querySelector("#new");
newTemplesLink.addEventListener("click", () => {
  setActiveButton(newTemplesLink);
  createTempleCard(temples.filter (temple => {
    let splittedDedication = temple.dedicated.split(",");
    dedicationYear = parseInt(splittedDedication[0]);
    return dedicationYear > 2000;
  }));
});

const largeTemplesLink = document.querySelector("#large");
largeTemplesLink.addEventListener("click", () => {
  setActiveButton(largeTemplesLink);
  createTempleCard(temples.filter(temple => temple.area > 90000));
});

const smallTemplesLink = document.querySelector("#small");
smallTemplesLink.addEventListener("click", () => {
  setActiveButton(smallTemplesLink);
  createTempleCard(temples.filter(temple => temple.area < 10000));
});


function createTempleCard (filteredTemples) {
  document.querySelector("#templeContainer").innerHTML = "";
  filteredTemples.forEach(temple => {
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
