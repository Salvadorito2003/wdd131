const lastModifiedElement = document.querySelector("#lastmodified");
lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
const yearElement = document.querySelector("#currentyear");
const currentYear = new Date().getFullYear();
yearElement.textContent = `© ${currentYear}`;

let temperature = document.querySelector("#temperature");
let temperatureText = temperature.textContent.trim();
const myArray = temperatureText.split(" ");
let temperatureNumber = parseInt(myArray[1]);

let wind = document.querySelector("#wind");
let windText = wind.textContent.trim();
const myArray2 = windText.split(" ");
let windNumber = parseInt(myArray2[1]);

function GetWindChill(temperature, wind)
{
    let windChill = 13.12 + 0.6215 * temperature - 11.37 * (wind**0.16) + 0.3965 * temperature * (wind**0.16);
    return windChill
}

const windChill = document.querySelector("#windchill");
let windChillNumber = "N/A"
if (temperatureNumber <= 10 && windNumber > 4.8)
{
    windChillNumber = (GetWindChill(temperatureNumber, windNumber)).toFixed(1);
}
windChill.textContent = `${windChillNumber}°C`;