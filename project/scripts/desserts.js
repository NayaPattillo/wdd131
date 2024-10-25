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

const desserts = [
    {
        dishName: "Fudgy Brownie Cookies",
        ingredients: "1/4 cup unsalted butter, 1/2 cup semi sweet chocolate, 2 large eggs, 1 cup granulated sugar, 1 teaspoon vanilla extract, 1 cup all purpose flour, 1/4 teaspoon salt, 3 tablespoons cocoa powder, 1/8 teaspoon baking soda",
        instructions: "Preheat your oven to 350°F and line 2 cookie sheets with parchment paper. In a microwave safe bowl, melt the 1/4 cup butter and 1/2 cup chocolate together 30 seconds at a time until melted. Set aside to cool. In another bowl, beat the 2 eggs, 1 cup of sugar, and teaspoon vanilla with a hand or stand mixer fitted with the whip attachment. Mix on high for at least 3-5 minutes. The mixture should look light and airy. I do not recommend mixing this by hand. The air incorporated by the mixer is what you need to create the crinkle brownie like tops. Add in the chocolate and butter mixture and mix until combined. You can use a spatula at this point or mix on low- medium speed with your mixer. Add in the 1 cup flour, 1/4 teaspoon kosher salt, 3 tablespoons of cocoa, and 1/8 tsp baking soda. Mix until combined on low, or by hand. The dough will be loose and look more like brownie batter than cookie dough. Using a mini ice cream scoop or a small spoon, spoon the cookie dough onto the sheet trays leaving 2 inches in between the cookies to allow them to spread. Bake the cookies for 10 minutes. They should have crinkles in them and the edges should look crisp. Cool on pan for 10 minutes then transfer to a wire rack.",
        servings: 24,
        imageUrl: "https://frostingandfettuccine.com/wp-content/uploads/2019/12/Brownie-Cookies-6-683x1024.jpg"
    },
    {
        dishName: "Cinnamon Spice Blondies",
        ingredients: "For the Blondies: 1 box spice cake mix, 1/4 cup vegetable oil, 1/3 cup milk, 1 egg, 1 cup cinnamon chips. For the Glaze: 1 cup powdered sugar, 1 tablespoon eggnog",
        instructions: "Preheat oven to 350°F. Prepare a 9 x 9 baking dish with crisscrossing sheets of parchment paper. In a large bowl, stir together dry cake mix, oil, milk, and egg until just combined. Fold in cinnamon chips. Pour batter into the prepared pan. Bake for 20 - 25 minutes, or until a toothpick inserted into the center of the pan comes out clean. Cool completely before cutting and glazing, about 2 hours or overnight. Make the glaze: Pour 1 tablespoon of eggnog into a small bowl. Slowly add powdered sugar, cutting in with a fork, until the glaze is thick, but will still drizzle off the end of the fork. Place cut blondies onto a cookie sheet or a counter prepared with wax or parchment paper. Make sure blondies are at least 1/2 to 1-inch apart. Using a fork, drizzle glaze over blondies with a long back-and-forth motion.",
        servings: 16,
        imageUrl: "https://playdatesparties.com/wp-content/uploads/2016/12/Cake-Mix-Blondies-Cinnamon-Spice-In1.jpg"
    },
    {
        dishName: "Salted Caramel Snickerdoodles",
        ingredients: "2 1/2 cups all-purpose flour, 1 teaspoon baking soda, 2 teaspoons cream of tartar, 1/2 teaspoon ground cinnamon, 1/2 teaspoon sea salt, 1 cup unsalted butter cut into tablespoon pieces, 1 1/4 cups brown sugar, 1/2 cup granulated sugar, 1 large egg, 1 egg yolk, 1 tablespoon vanilla extract, 1 tablespoon plain Greek yogurt, 18 caramels cut in half",
        instructions: "In a medium bowl, Whisk together the flour, baking soda, cream of tartar, cinnamon, and salt. Set aside. To brown the butter, heat a thick-bottomed skillet on medium heat. Add the sliced butter, whisking frequently. Continue to cook the butter until melted. The butter will start to foam and browned specks will begin to form at the bottom of the pan. The butter should have a nutty aroma. Watch the butter carefully because it can go from brown to burnt quickly. Remove butter from the heat and let cool to room temperature. In the bowl of a stand mixer, combine the brown butter and sugars. Mix until blended. Beat in the egg, egg yolk, vanilla extract, and Greek yogurt and mix until combined. Slowly add in the dry ingredients and mix until just combined. Form the dough in a ball and cover with plastic wrap. Chill in the refrigerator for at least 30 minutes. You can chill the dough overnight or for up to 2 days. When ready to bake, preheat the oven to 350 degrees F. Measure about 2 tablespoons of dough and roll into balls. Flatten the ball slightly with the palm of your hand and place a caramel piece in the center of the dough. Wrap the cookie dough around the caramel, making sure the caramel is completely covered with dough. In a small bowl, combine the cinnamon and sugar. Roll the balls in the cinnamon-sugar mixture. Place dough balls on a large baking sheet that has been lined with a Silpat baking mat or parchment paper. Make sure the cookies are about 2 inches apart. Sprinkle the cookie tops with sea salt. Bake the cookies 8-10 minutes or until the edges of the cookies begin to turn golden brown. The centers will still be soft. Don’t over bake. Cool the cookies on the baking sheet for 2-3 minutes, or until set. Transfer cookies to a wire cooling rack and cool completely.",
        servings: 36,
        imageUrl: "https://www.twopeasandtheirpod.com/wp-content/uploads/2018/12/Brown-Butter-Salted-Caramel-Snickerdoodles-1.jpg"
    }
];

createDessertCard(desserts);

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