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

const breads = [
    {
        dishName: "Garlic Bread Rolls",
        ingredients: "Rolls: 4 1/2 tablespoons unsalted butter, 2 tablespoons minced garlic,3 1/2 cups + 1 tablespoon all-purpose flour, 3 tablespoons chopped fresh parsley, 1 tablespoon granulated sugar, 2 1/4 teaspoons instant yeast, 1 teaspoon fine sea salt, 1 cup whole or 2% milk, warmed to 110°F, 1 large egg, room temperature. For the Garlic Butter: 2 tablespoons unsalted butter, 1 tablespoon minced garlic, 1 tablespoon chopped fresh parsley",
        instructions: "Preheat the oven to 350 F/180 C. Lightly butter the bottom and sides of a 9x13 pan and set it aside. In a small pot, melt the butter and add the minced garlic. Cook for 1-2 minutes or until the garlic is fragrant. Take off the heat and cool while you measure the other ingredients. In a stand mixing bowl, combine the flour, parsley, sugar, yeast, and salt. Then add the warmed milk, egg, and garlic butter. Knead on low speed with the dough hook until the dough looks smooth and feels soft and tacky, about 10-12 minutes. *If the dough is too sticky, add one tablespoon of flour at a time until you have a workable dough. Cut the kneaded dough into 12 equal portions (use a scale for accuracy- 67 grams each). Shape each piece of dough into a smooth ball with your hand. Pinch the bottom of the roll where the seam comes together to keep it tight. Then place the shaped dough balls into the prepared baking pan. Cover the top with plastic wrap or a clean kitchen towel and set them in a warm place to rise until doubled in size, about 1-2 hours. Brush the tops of the rolls with the beaten egg wash. Then bake the dinner rolls for 20-30 minutes, or until the tops are golden brown. While the rolls are baking, make the garlic butter. Melt the butter in a pot and add the minced garlic. Cook for 1-2 minutes until the garlic is fragrant. Then remove it from the heat and stir in the parsley. When the rolls come out of the oven, immediately brush them with the garlic butter.",
        servings: 12,
        imageUrl: "https://cambreabakes.com/wp-content/uploads/2024/04/garlic-rolls-post-2.jpg"
    },
    {
        dishName: "Fluffy French Bread",
        ingredients: "2 1/2 to 3 cups all purpose flour, 1 cup warm water, 1 Tablespoon olive oil or vegetable oil, 1 Tablespoon white granulated sugar, 1 teaspoon pink salt, 2 teaspoon active dry yeast, 1 egg beaten for top of bread",
        instructions: "Start by activating your yeast. In a small bowl, mix 1 teaspoon of the sugar with the warm water. Sprinkle the yeast on top and let it sit for about 10 minutes, until it's frothy. In a large mixing bowl, combine 2.5 cups of flour, the remaining sugar, and salt. Stir until well mixed. Make a well in the center of your dry mixture. Pour in the activated yeast mixture and the olive oil. Mix well until the dough starts to come together. Transfer the dough to a floured surface and knead for about 8-10 minutes, adding more flour if necessary. The dough should be smooth and elastic. Place the dough in a lightly oiled bowl, cover with a damp cloth, and let it rise in a warm place for about an hour, or until it has doubled in size. Punch down the dough and shape it into a loaf. Place it on a baking sheet lined with parchment paper, cover again, and let it rise for another 30 minutes. Preheat your oven to 375°F (190°C). Beat the egg and brush it over the top of your loaf for a beautiful golden crust. Bake the bread in the preheated oven for 25-30 minutes, or until golden brown and it sounds hollow when tapped on the bottom. Allow to cool",
        servings: 12,
        imageUrl: "https://bexskitchen.com/wp-content/uploads/2024/07/easy-soft-fluffy-french-bread-recipe-768x1365.webp?ezimgfmt=ng:webp/ngcb1"
    },
    {
        dishName: "Cinnamon Swirl Bread",
        ingredients: "3 cups all-purpose flour, 1/4 cup granulated sugar, 2 1/4 teaspoons active dry yeast, 1/2 teaspoon salt, 1 cup warm water, 2 tablespoons unsalted butter, softened, 2 tablespoons ground cinnamon, 1/2 cup granulated sugar",
        instructions: "Activate the yeast by dissolving it in warm water and a pinch of sugar. Let it sit for 5 minutes until frothy. In a large mixing bowl, combine the flour, sugar, salt, and softened butter. Pour the activated yeast mixture into the bowl with the dry ingredients. Mix until a soft dough forms. Transfer the dough to a floured surface and knead for 5-7 minutes until the dough is smooth and elastic. Place the dough in a greased bowl, cover it with a clean kitchen towel, and let it rise for 1 hour or until doubled in size. Roll out the risen dough into a rectangle on a lightly floured surface. In a small bowl, mix together the ground cinnamon and sugar. Sprinkle the cinnamon-sugar mixture evenly over the dough. Starting from one short end, roll the dough tightly into a log. Place the rolled dough into a greased loaf pan, cover it, and let it rise for another 30-45 minutes. Preheat the oven to 350°F (175°C). Bake the bread for 35-40 minutes or until golden brown and cooked through. Remove the bread from the pan and let it cool on a wire rack.",
        servings: 12,
        imageUrl: "https://i0.wp.com/chasety.com/wp-content/uploads/2023/12/realchasecurtis_Cinnamon_Swirl_Bread_sitting_on_a_napkin_on_dar_1867ba41-e580-4fce-a19a-9e6f5de59738.png?w=768&ssl=1"
    }
];

createBreadCard(breads);

function createBreadCard(breadFilteredRecipe) {
    document.querySelector(".breadCards").innerHTML = "";
    breadFilteredRecipe.forEach(bread => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let ingredients = document.createElement("p");
        ingredients.className = 'ingredients';
        let instructions = document.createElement("p");
        instructions.className = 'instructions';
        let servings = document.createElement("p");
        servings.className = 'servings';
        let img = document.createElement("img");

        name.textContent = bread.dishName;
        ingredients.innerHTML = `<span class="label">Ingredients:</span> ${bread.ingredients}`;
        instructions.innerHTML = `<span class="label">Instructions:</span> ${bread.instructions}`;
        servings.innerHTML = `<span class="label">Serving Size:</span> ${bread.servings}`;

        img.setAttribute("src", bread.imageUrl);
        img.setAttribute('alt', `${bread.dishName}`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(ingredients);
        card.appendChild(instructions);
        card.appendChild(servings);
        card.appendChild(img);

        document.querySelector(".breadCards").appendChild(card);
    });
}