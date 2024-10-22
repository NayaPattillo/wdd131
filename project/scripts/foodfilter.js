const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const year = document.querySelector("#currentyear")
const today = new Date();
year.innerHTML = today.getFullYear();

const lastMod = document.querySelector("#lastModified")
const modDate = new Date(document.lastModified);
lastMod.innerHTML = ` - Last Modified: ${modDate}`;

const mainDishes = [
    {
        dishName: "",
        ingredients: "",
        instructions: "",
        servings: 2,
        imageUrl: ""
    },
    {
        dishName: "",
        ingredients: "",
        instructions: "",
        servings: 2,
        imageUrl: ""
    },
    {
        dishName: "",
        ingredients: "",
        instructions: "",
        servings: 2,
        imageUrl: ""
    }
];

const desserts = [
    {
        dishName: "",
        ingredients: "",
        instructions: "",
        servings: 2,
        imageUrl: ""
    },
    {
        dishName: "",
        ingredients: "",
        instructions: "",
        servings: 2,
        imageUrl: ""
    },
    {
        dishName: "",
        ingredients: "",
        instructions: "",
        servings: 2,
        imageUrl: ""
    }
];

const breads = [
    {
        dishName: "",
        ingredients: "",
        instructions: "",
        servings: 2,
        imageUrl: ""
    },
    {
        dishName: "",
        ingredients: "",
        instructions: "",
        servings: 2,
        imageUrl: ""
    },
    {
        dishName: "",
        ingredients: "",
        instructions: "",
        servings: 2,
        imageUrl: ""
    }
];