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

const billsContainer = document.querySelector("#bills");

let bills = JSON.parse(localStorage.getItem("bills"));
if (!bills) {
    bills = [
    {
        bill: "$2 pesos",
        description: "The design of the bill depicts the life of General Bartolomé Mitre (1821–1906).",
        imageUrl: "images/2pesos.jpg"
    },
    {
        bill: "$5 pesos",
        description: "The design of the bill depicts the life of General José de San Martín (1778–1850).",
        imageUrl: "images/5pesos.jpg"
    },
    {
        bill: "$10 pesos",
        description: "The design of the bill depicts the life of General Manuel Belgrano, creator of the national flag and a prominent figure in the struggles for Argentine independence (1770–1820).",
        imageUrl: "images/10pesos.jpg"
    },
    {
        bill: "$20 pesos",
        description: "The design of the bill depicts the life of Juan Manuel de Rosas (1793–1877).",
        imageUrl: "images/20pesos.jpg"
    },
    {
        bill: "$50 pesos",
        description: "The design of the bill depicts the life of Domingo Faustino Sarmiento (1811–1888).",
        imageUrl: "images/50pesos.jpg"
    },
    {
        bill: "$100 pesos",
        description: "The design of the bill depicts Mrs. María Eva Duarte de Perón (1919–1952).",
        imageUrl: "images/100pesos.jpg"
    },
    {
        bill: "$200 pesos",
        description: "The design of the bill depicts the Southern Right Whale, declared a National Natural Monument within Argentine jurisdictional waters in 1984.",
        imageUrl: "images/200pesos.jpg"
    },
    {
        bill: "$500 pesos",
        description: "The design of the bill depicts the jaguar, declared a National Natural Monument.",
        imageUrl: "images/500pesos.jpg"
    },
    {
        bill: "$1000 pesos",
        description: "The design of the bill depicts José de San Martín.",
        imageUrl: "images/1000pesos.jpg"
    },
    {
        bill: "$2000 pesos",
        description: "The $2000 commemorative bill features portraits of Grierson and Carrillo on the front, while the back shows the building of the Malbrán Institute.",
        imageUrl: "images/2000pesos.jpg"
    },
    {
        bill: "$10000 pesos",
        description: "Images of Manuel Belgrano and María Remedios del Valle.",
        imageUrl: "images/10000pesos.jpg"
    },
    {
        bill: "$20000 pesos",
        description: "The bill features the image of Juan Bautista Alberdi on the front and an artistic recreation of the birthplace of the Argentine lawyer, writer, journalist, philosopher, economist, diplomat, and politician on the back.",
        imageUrl: "images/20000pesos.jpg"
    }
    ];
    localStorage.setItem("bills", JSON.stringify(bills));
};
createBillCard();
function createBillCard () {
  document.querySelector("#bills").innerHTML = "";
  bills.forEach(bill => {
    const billCard = document.createElement("div");
    billCard.classList.add("bill-card");

    const name = document.createElement("h2");
    name.textContent = bill.bill;

    const description = document.createElement("p");
    description.textContent = bill.description;

    const image = document.createElement("img");
    image.src = bill.imageUrl;
    image.alt = bill.bill;
    image.loading = "lazy";

    

    billCard.appendChild(image);
    billCard.appendChild(name);
    billCard.appendChild(description);

    billCard.addEventListener("mouseenter", () => {
      description.style.display = "block";
    });

    billCard.addEventListener("mouseleave", () => {
      description.style.display = "none";
    });

    billsContainer.appendChild(billCard);
  });
};