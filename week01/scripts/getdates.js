const year = document.querySelector("currentyear");
const currentYear = new Date().getFullYear();
currentYear.innerHTML = <p>© ${currentYear} </p>;


const lastModified = document.querySelector("lastmodified");
alert(document.lastModified);