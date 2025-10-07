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
      imageUrl: "images/buenos_aires.jpg",
      stakes: "Bahia Blanca - Adrogué - Aldo Bonzi - Avellaneda - Banfield - Belgrano - Caseros - Castelar - Chacabuco - Congreso - Escobar - Florencio Varela - González Catán - La Plata - La Plata Este - La Plata Sur - Liniers - Litoral - Longchamps - Lujan - Marcos Paz - Mar del Plata - Mar del Plata Norte - Merlo - Monte Grande - Moreno - Buenos Aires Norte - Buenos Aires Oeste - Pergamino - Quilmes - Ramos Mejía - San Nicolás - Sarmiento - Zárate - Olavarria - Villa Mitre"
    },
    {
      provinceName: "Chaco",
      population: 1129606,
      capital: "Resistencia",
      area: 99633,
      imageUrl: "images/chaco.jpg",
      stakes: "Resistencia - Resistencia Sur"
    },
    {
      provinceName: "Tierra del Fuego",
      population: 185732,
      capital: "Ushuaia",
      area: 21571,
      imageUrl: "images/tierra_del_fuego.jpg",
      stakes: "Tierra del Fuego"
    },
    {
      provinceName: "Entre Rios",
      population: 1425578,
      capital: "Paraná",
      area: 78781,
      imageUrl: "images/entre_rios.jpg",
      stakes: "Paraná"
    },
    {
      provinceName: "Misiones",
      population: 1278873,
      capital: "Posadas",
      area: 29801,
      imageUrl: "images/misiones.jpg",
      stakes: "Posadas"
    },
    {
      provinceName: "La Pampa",
      population: 359193,
      capital: "Santa Rosa",
      area: 143440,
      imageUrl: "images/la_pampa.jpg",
      stakes: "Santa Rosa"
    },
    {
      provinceName: "Santa Cruz",
      population: 337226,
      capital: "Rio Gallegos",
      area: 243943,
      imageUrl: "images/santa_cruz.jpg",
      stakes: ""
    },
    {
      provinceName: "Córdoba",
      population: 4019371,
      capital: "Córdoba",
      area: 165321,
      imageUrl: "images/cordoba.jpg",
      stakes: "Bell Ville - Cordoba Este - Chacabuco - Cordoba Oeste - Patricios - Rio Cuarto - Sierras - Cordoba Sur"
    },
    {
      provinceName: "Santa Fe",
      population: 3556522,
      capital: "Santa Fe de la Veracruz",
      area: 133007,
      imageUrl: "images/santa_fe.jpg",
      stakes: "Santa Fe - Santa Fe Norte - Rosario - Rosario Norte - Rosario Oeste"
    },
    {
      provinceName: "Mendoza",
      population: 2043540,
      capital: "Mendoza",
      area: 148827,
      imageUrl: "images/mendoza.jpg",
      stakes: "Mendoza - Godoy Cruz - Guaymallén - Maipú de Cuyo - San Rafael"
    },
    {
      provinceName: "Salta",
      population: 1440672,
      capital: "Salta",
      area: 155488,
      imageUrl: "images/salta.jpg",
      stakes: "Salta - Salta Oeste"
    },
    {
      provinceName: "Tucumán",
      population: 1731820,
      capital: "San Miguel de Tucumán",
      area: 22592,
      imageUrl: "images/tucuman.jpg",
      stakes: "Tucuman - Tucuman Oeste"
    },
    {
      provinceName: "Jujuy",
      population: 811611,
      capital: "San Salvador de Jujuy",
      area: 53219,
      imageUrl: "images/jujuy.jpg",
      stakes: "Jujuy"
    },
    {
      provinceName: "Corrientes",
      population: 1212696,
      capital: "Corrientes",
      area: 88199,
      imageUrl: "images/corrientes.jpg",
      stakes: "Corrientes"
    },
    {
      provinceName: "Rio Negro",
      population: 747697,
      capital: "Viedma",
      area: 203013,
      imageUrl: "images/rio_negro.jpg",
      stakes: "General Roca"
    },
    {
      provinceName: "Neuquén",
      population: 710814,
      capital: "Neuquén",
      area: 94078,
      imageUrl: "images/neuquen.jpg",
      stakes: "Neuquén - Neuquén Oeste - Zapala"
    },
    {
      provinceName: "Chubut",
      population: 509108,
      capital: "Rawson",
      area: 224686,
      imageUrl: "images/chubut.jpg",
      stakes: "Comodoro Rivadavia - Trelew Norte - Trelew Sur"
    },
    {
      provinceName: "Formosa",
      population: 606941,
      capital: "Formosa",
      area: 72066,
      imageUrl: "images/formosa.jpg",
      stakes: "Formosa"
    },
    {
      provinceName: "Catamarca",
      population: 429562,
      capital: "San Fernando del Valle de Catamarca",
      area: 102602,
      imageUrl: "images/catamarca.jpg",
      stakes: ""
    },
    {
      provinceName: "San Juan",
      population: 822853,
      capital: "San Juan",
      area: 89651,
      imageUrl: "images/san_juan.jpg",
      stakes: "Chimbas - Nuevo Cuyo"
    },
    {
      provinceName: "Santiago del Estero",
      population: 1054028,
      capital: "Santiago del Estero",
      area: 136351,
      imageUrl: "images/santiago_del_estero.jpg",
      stakes: "Santiago del Estero"
    },
    {
      provinceName: "San Luis",
      population: 542069,
      capital: "San Luis",
      area: 76748,
      imageUrl: "images/san_luis.jpg",
      stakes: "San Luis"
    },
    {
      provinceName: "La Rioja",
      population: 383865,
      capital: "La Rioja",
      area: 89680,
      imageUrl: "images/la_rioja.jpg",
      stakes: "La Rioja"
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

    card.addEventListener("click", () => {
    const stakesContainer = document.querySelector("#stakes");
    stakesContainer.classList.toggle("visible");
    createStakesCard(province);
});

    container.appendChild(card);
  });
};
const provinceStakesContainer = document.querySelector("#stakes")

function createStakesCard(province) {
  provinceStakesContainer.innerHTML ="";
  const title = document.createElement("h2");
  title.textContent = province.name;

  const stakes = document.createElement("p");
  stakes.textContent = province.stakes;

  provinceStakesContainer.appendChild(title);
  provinceStakesContainer.appendChild(stakes);
}