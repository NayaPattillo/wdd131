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
        dishName: "Honey Garlic Chicken",
        ingredients: "8 chicken thighs (skinless and boneless), 2tbsp cornflour (cornstarch) 1/2tsp salt, 1/2 tsp pepper, 2 tbsp vegetable oil, 1 tbsp unsalted butter, 4 cloves minced garlic, 1/3 cup honey, 1/3 cup chicken stock, 1 tbsp rice vinegar, 1 tbsp light soy sauce",
        instructions: "Place the chicken thighs in a bowl and add the cornflour (cornstarch), salt, and pepper. Toss the chicken in the cornflour until fully coated. Heat the oil in a large frying pan (skillet) over a high heat. Add the chicken thighs, and cook on one side until golden brown (about 4-5 minutes), then turn over and cook for a further 2 minutes. Add the butter to the pan, let it melt, then add the garlic and stir together. Turn the heat down to medium so the garlic doesn't burn, then make the sauce. To make the sauce, combine the honey, stock, rice vinegar, and light soy sauce in a bowl and stir together. Add the sauce to the pan. Turn the heat up and bring the sauce to the boil, then simmer for 4-5 minutes until the sauce reduces and thickens, and the chicken is cooked through (and no longer pink in the middle). Serve over rice.",
        servings: 4,
        imageUrl: "https://www.kitchensanctuary.com/wp-content/uploads/2019/11/Honey-Garlic-Chicken-tall4-71.webp"
    },
    {
        dishName: "Creamy Ravioli",
        ingredients: "1 (25 oz) package cheese ravioli, 2 tbsp butter, 3 tsp garlic (minced), 1 cup heavy cream, 1/2 tsp salt, 1/2 tsp black pepper, 1/2 tsp paprika, 1 tsp Italian seasoning, 1/4 cup parmesan cheese (shredded), 1 cup baby spinach (washed and chopped), 1/2 cup sun-dried tomatoes (drained and chopped)",
        instructions: "Cook the ravioli according to the directions on the package. Drain and set aside. In a large skillet over medium heat. Add butter and melt, then add garlic and cook of 30 seconds. Pour in heavy cream while whisking. Add salt, pepper, paprika, and Italian seasoning. Whisk until the sauce starts to bubble. Continue to whisk while slowly adding in parmesan cheese until cheese is fully incorporated. Add baby spinach and sun-dried tomatoes. Stir occasionally and cook until spinach is wilted. Pour the cooked ravioli into the sauce and toss to coat. Sprinkle with parmesan cheese",
        servings: 6,
        imageUrl: "https://www.thecookingduo.com/wp-content/uploads/2023/09/Creamy-Tuscan-Ravioli-9-300x300.jpg"
    },
    {
        dishName: "Beef Ramen Stir Fry",
        ingredients: "For the Sauce: 1/4 cup low-sodium soy sauce, 1 tablespoon cornstarch, 1/3 cup beef broth, 2 tablespoons honey, 2 tablespoons hoisin sauce, 1 tablespoon rice vinegar, 1 tablespoon sesame oil, 2 cloves garlic , minced, 1/2 tablespoon grated ginger, 1/8 teaspoon cracked red pepper flakes. For the Stir Fry: 2 (3 ounce) packages ramen noodles (seasoning packets discarded), 1 teaspoon sesame oil, 2 tablespoons extra-virgin olive oil, divided 1 pound sirloin steak, trimmed of fat and sliced into 1 1/2-inch strips (about 1/4-inch thickness), 1/2 teaspoon kosher salt, 1/2 teaspoon ground black pepper, 3 cups fresh broccoli florets, 1/2 cup water, Sesame seeds, garnish",
        instructions: "Make the sauce: in a medium bowl, whisk together the soy sauce and cornstarch until combined and no lumps remain. Add in the beef broth, honey, hoisin sauce, rice vinegar, sesame oil, garlic, ginger, cracked red pepper; whisk to incorporate everything. Set aside. Bring a medium pot of water to boil; cook ramen until just tender, 2-3 minutes. Drain and rinse under cold water to stop them from cooking longer. Drizzle with the 1 teaspoon sesame oil to prevent sticking. In a large nonstick skillet warm 1 tablespoon of the olive oil over medium-high heat. Once the skillet is glistening hot, season steak with the salt and pepper and add to the skillet. Cook for about 3 minutes, without moving, to allow them to brown well on one side. Then stir and continue to cook for 2 more minutes, until cooked through. Remove the steak from skillet and drain off any accumulated grease. Add the other tablespoon of olive oil to the skillet, along with the broccoli. Add 1/2 cup of water to the skillet and cover. Steam broccoli for 2 minutes. (Broccoli should be bright green and fork tender, but not mushy.) Transfer the steak back to the skillet, along with cooked noodles. Give the sauce a stir and pour into the skillet; using tongs, mix together the ingredients as the sauce cooks. Cook for another 1-2 minutes until everything is coated and warmed through. Serve immediately, garnished with sesame seeds.",
        servings: 5,
        imageUrl: "https://bellyfull.net/wp-content/uploads/2020/04/Beef-Broccoli-Stir-Fry-blog-3.jpg"
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

createMainDishCard(mainDishes);
createDessertCard(desserts);

function createMainDishCard(mainFilteredRecipe) {
    document.querySelector(".mainDishes").innerHTML = "";
    mainFilteredRecipe.forEach(mainDish => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let ingredients = document.createElement("p");
        ingredients.className = 'ingredients';
        let instructions = document.createElement("p");
        instructions.className = 'instructions';
        let servings = document.createElement("p");
        servings.className = 'servings';
        let img = document.createElement("img");

        name.textContent = mainDish.dishName;
        ingredients.innerHTML = `<span class="label">Ingredients:</span> ${mainDish.ingredients}`;
        instructions.innerHTML = `<span class="label">Instructions:</span> ${mainDish.instructions}`;
        servings.innerHTML = `<span class="label">Serving Size:</span> ${mainDish.servings}`;

        img.setAttribute("src", mainDish.imageUrl);
        img.setAttribute('alt', `${mainDish.dishName}`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(ingredients);
        card.appendChild(instructions);
        card.appendChild(servings);
        card.appendChild(img);

        document.querySelector(".mainDishes").appendChild(card);
    });
}

function createDessertCard(dessertFilteredRecipe) {
    document.querySelector(".dessertCards").innerHTML = "";
    dessertFilteredRecipe.forEach(dessert => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let ingredients = document.createElement("p");
        ingredients.className = 'ingredients';
        let instructions = document.createElement("p");
        instructions.className = 'instructions';
        let servings = document.createElement("p");
        servings.className = 'servings';
        let img = document.createElement("img");

        name.textContent = dessert.dishName;
        ingredients.innerHTML = `<span class="label">Ingredients:</span> ${dessert.ingredients}`;
        instructions.innerHTML = `<span class="label">Instructions:</span> ${dessert.instructions}`;
        servings.innerHTML = `<span class="label">Serving Size:</span> ${dessert.servings}`;

        img.setAttribute("src", dessert.imageUrl);
        img.setAttribute('alt', `${dessert.dishName}`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(ingredients);
        card.appendChild(instructions);
        card.appendChild(servings);
        card.appendChild(img);

        document.querySelector(".dessertCards").appendChild(card);
    });
}