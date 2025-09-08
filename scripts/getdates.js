const yearElement = document.querySelector("#currentyear");
const currentYear = new Date().getFullYear();
yearElement.textContent = `© ${currentYear}`;

const lastModifiedElement = document.querySelector("#lastmodified");
lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;