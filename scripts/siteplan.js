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

const container = document.querySelector("#provinces");

let provinces = JSON.parse(localStorage.getItem("provinces"));
if (!provinces) {
  provinces = [
    {
      provinceName: "Buenos Aires",
      population: 17569053,
      capital: "La Plata",
      area: 307571,
      imageUrl: 
    "images/buenos_aires.jpg"
    },
    {
      provinceName: "Chaco",
      population: 1129606,
      capital: "Resistencia",
      area: 99633,
      imageUrl: 
    "images/chaco.jpg"
    },
    {
      provinceName: "Tierra del Fuego",
      population: 185732,
      capital: "Ushuaia",
      area: 21571,
      imageUrl: 
    "images/tierra_del_fuego.jpg"
    },
    {
      provinceName: "Entre Rios",
      population: 1425578,
      capital: "Paraná",
      area: 78781,
      imageUrl: 
    "images/entre_rios.jpg"
    },
    {
      provinceName: "Misiones",
      population: 1278873,
      capital: "Posadas",
      area: 29801,
      imageUrl: 
    "images/misiones.jpg"
    },
    {
      provinceName: "La Pampa",
      population: 359193,
      capital: "Santa Rosa",
      area: 143440,
      imageUrl: 
    "images/la_pampa.jpg"
    },
    {
      provinceName: "Santa Cruz",
      population: 337226,
      capital: "Rio Gallegos",
      area: 243943,
      imageUrl: 
    "images/santa_cruz.jpg"
    },
    {
      provinceName: "Córdoba",
      population: 4019371,
      capital: "Córdoba",
      area: 165321,
      imageUrl: 
    "images/cordoba.jpg"
    },
    {
      provinceName: "Santa Fe",
      population: 3556522,
      capital: "Santa Fe de la Veracruz",
      area: 133007,
      imageUrl: 
    "images/santa_fe.jpg"
    },
    {
      provinceName: "Mendoza",
      population: 2043540,
      capital: "Mendoza",
      area: 148827,
      imageUrl: 
    "images/mendoza.jpg"
    },
    {
      provinceName: "Salta",
      population: 1440672,
      capital: "Salta",
      area: 155488,
      imageUrl: 
    "images/salta.jpg"
    },
    {
      provinceName: "Tucumán",
      population: 1731820,
      capital: "San Miguel de Tucumán",
      area: 22592,
      imageUrl: 
    "images/tucuman.jpg"
    },
    {
      provinceName: "Jujuy",
      population: 811611,
      capital: "San Salvador de Jujuy",
      area: 53219,
      imageUrl: 
    "images/jujuy.jpg"
    },
    {
      provinceName: "Corrientes",
      population: 1212696,
      capital: "Corrientes",
      area: 88199,
      imageUrl: 
    "images/corrientes.jpg"
    },
    {
      provinceName: "Rio Negro",
      population: 747697,
      capital: "Viedma",
      area: 203013,
      imageUrl: 
    "images/rio_negro.jpg"
    },
    {
      provinceName: "Neuquén",
      population: 710814,
      capital: "Neuquén",
      area: 94078,
      imageUrl: 
    "images/neuquen.jpg"
    },
    {
      provinceName: "Chubut",
      population: 509108,
      capital: "Rawson",
      area: 224686,
      imageUrl: 
    "images/chubut.jpg"
    },
    {
      provinceName: "Formosa",
      population: 606941,
      capital: "Formosa",
      area: 72066,
      imageUrl: 
    "images/formosa.jpg"
    },
    {
      provinceName: "Catamarca",
      population: 429562,
      capital: "San Fernando del Valle de Catamarca",
      area: 102602,
      imageUrl: 
    "images/catamarca.jpg"
    },
    {
      provinceName: "San Juan",
      population: 822853,
      capital: "San Juan",
      area: 89651,
      imageUrl: 
    "images/san_juan.jpg"
    },
    {
      provinceName: "Santiago del Estero",
      population: 1054028,
      capital: "Santiago del Estero",
      area: 136351,
      imageUrl: 
    "images/santiago_del_estero.jpg"
    },
    {
      provinceName: "San Luis",
      population: 542069,
      capital: "San Luis",
      area: 76748,
      imageUrl: 
    "images/san_luis.jpg"
    },
    {
      provinceName: "La Rioja",
      population: 383865,
      capital: "La Rioja",
      area: 89680,
      imageUrl: 
    "images/la_rioja.jpg"
    }
  ];
  localStorage.setItem("provinces", JSON.stringify(provinces));
};
createProvinceCard();
function createProvinceCard () {
  document.querySelector("#provinces").innerHTML = "";
  provinces.forEach(province => {
    const card = document.createElement("div");
    card.classList.add("province-card");

    const name = document.createElement("h2");
    name.textContent = province.provinceName;

    const population = document.createElement("p");
    population.textContent = `Population: ${province.population}`;

    const capital = document.createElement("p");
    capital.textContent = `Capital: ${province.capital}`;

    const area = document.createElement("p");
    area.textContent = `Area: ${province.area} km`;

    const image = document.createElement("img");
    image.src = province.imageUrl;
    image.alt = province.provinceName;
    image.loading = "lazy";

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(population);
    card.appendChild(capital);
    card.appendChild(area);

    container.appendChild(card);
  });
};