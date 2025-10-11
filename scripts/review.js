const yearElement = document.querySelector("#currentyear");
const currentYear = new Date().getFullYear();
yearElement.textContent = `© ${currentYear}`;
const lastModifiedElement = document.querySelector("#lastmodified");
lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;


const submittedReviews = document.querySelector("#reviewcounter");
const reviewCount = localStorage.getItem("completedReviews") ?? 0;
submittedReviews.textContent = reviewCount;