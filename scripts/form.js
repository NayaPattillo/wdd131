//footer content
const year = document.querySelector("#currentyear")
const today = new Date();
year.innerHTML = today.getFullYear();

const lastMod = document.querySelector("#lastModified")
const modDate = new Date(document.lastModified);
lastMod.innerHTML = ` - Last Modified: ${modDate}`;

//product option dropdown
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

productList(products);

function productList(list) {
    prodList = document.getElementById('prodSelect');
    list.forEach(product => {
        let prodName = document.createElement('option');
        prodName.textContent = product.name;
        prodList.appendChild(prodName);
    });
}

//Review counter
function getCount() {
    const count = document.getElementById('reviewCount');
    return count ? parseInt(count) : 0;
}
function updateCount() {
    let count = getCount();
    count += 1;
    localStorage.setItem('reviewCount', count);
    document.getElementById('reviewCount').textContent = count;
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('reviewCount').textContent = getCount();
});
document.getElementById('submitReview').addEventListener('click', () => {
    updateCount();
});