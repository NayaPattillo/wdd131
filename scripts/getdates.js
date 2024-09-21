const year = document.querySelector("#currentyear")
const today = new Date();
year.innerHTML = today.getFullYear();

const lastMod = document.querySelector("#lastModified")
const modDate = new Date(document.lastModified);
lastMod.innerHTML = ` - Last Modified: ${modDate}`;