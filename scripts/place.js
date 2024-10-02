const year = document.querySelector("#currentyear")
const today = new Date();
year.innerHTML = today.getFullYear();

const lastMod = document.querySelector("#lastModified")
const modDate = new Date(document.lastModified);
lastMod.innerHTML = ` - Last Modified: ${modDate}`;

const temperature = 20;
const windSpeed = 18;

function calculateWindChill(temp, wind) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
}

if (temperature <= 10 && windSpeed > 4.8) {
    document.getElementById('windchill').innerText = calculateWindChill(temperature, windSpeed) + ' °C';
} else {
    document.getElementById('windchill').innerText = 'N/A';
}