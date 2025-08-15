const yearElement = document.querySelector("#currentyear");
const currentYear = new Date().getFullYear();
yearElement.textContent = `© ${currentYear}`;

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation")
menuButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	menuButton.classList.toggle("open");
});

const lastModifiedElement = document.querySelector("#lastmodified");
lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;

const foodContainer = document.querySelector("#typical_foods");

let typical_foods = JSON.parse(localStorage.getItem("typical_foods"));
if (!typical_foods) {
    typical_foods = [
    {
        foodName: "Milanesas",
        description: "Thin slices of meat, typically beef or chicken, that have been breaded and fried",
        imageUrl: "images/milanesas.jpg",
        recipe: `Step 1: Season the meat. Sprinkle salt and black pepper, followed by chopped parsley and garlic, pressing them to adhere, on each piece of the meat. Stack them on a plate.

            Step 2: Coat in egg. Whisk the eggs with some salt in a deep plate that's big enough to fit the meat pieces. Place a piece of meat inside, then flip, making sure all the surface is covered with the eggs.

            Step 3: Coat with breadcrumbs. Pour the breadcrumbs into a deep plate. Coat the meat with the breadcrumbs, pressing as you go.

            Step 4: Stack. Stack the breaded steak on a plate while continuing with the rest.

            Step 5: Bake. Spray a baking tray with oil, place the breaded steaks on it without crowding them, and spray the top with oil. Broil in a preheated oven at 440ºF (225ºC), fan-assisted, on the highest rack, for 6 minutes, flipping them halfway through.

            Step 6: Serve. Remove them from the oven and place them on a plate or a cooling rack. Don't stack them while they're hot, as that'll make the crispy skins go soggy. Enjoy!`
    },
    {
        foodName: "Locro",
        description: "Corn, beans, and pumpkin stew with a range of meats that includes sausage, pork, bacon, and beef. ",
        imageUrl: "images/locro.jpg",
        recipe: `Start by rinsing the corn and beans separately, then soak them overnight (8 to 12 hours) in plenty of water. Drain and rinse them before cooking. Pre-cook the corn in a large pot with enough water to cover it. Bring to a boil, then simmer for 1 to 2 hours until the kernels are soft but not mushy.

            While the corn is cooking, prepare the meats. Heat the lard or oil in a large heavy-bottomed pot. Brown the beef and pork, then remove and set aside. Fry the chorizo slices in the same pot to release their flavor.

            Next, sauté the aromatics in the remaining fat. Cook the onions, garlic, and bell pepper until they are soft and fragrant, about 5 to 7 minutes. Add the smoked paprika and cumin and cook for another minute to bring out the spices aroma.

            Return the browned meats to the pot and add the pre-cooked corn (and beans if using). Cover everything with water or broth, about 6 to 8 cups, and add the bay leaves, salt, and pepper. Bring the mixture to a boil, then reduce the heat to low and let it simmer gently. Cook uncovered for 1.5–2 hours, stirring occasionally. If you are adding potatoes, include them in the last 30 minutes of cooking. The stew should thicken as the corn and beans release starch.

            Once cooked, taste the locro and adjust the seasoning with more salt, pepper, or smoked paprika if necessary. Serve hot, garnished with crispy pancetta or chorizo bits and, if desired, chili sauce. Locro is often accompanied by bread and tastes even better when reheated the next day.`
    },
    {
        foodName: "Choripan",
        description: "Grilled chorizo sausage served in a crusty bread roll, often a baguette",
        imageUrl: "images/choripan.jpg",
        recipe: `Step 1: Prepare the grill. Preheat your grill or barbecue to medium-high heat. Make sure the grates are clean and lightly oiled to prevent sticking.

            Step 2: Grill the chorizo. Place the chorizo sausages on the grill and cook for about 8-10 minutes, turning occasionally, until they are browned and cooked through.

            Step 3: Prepare the bread. While the chorizo is grilling, slice the bread rolls open lengthwise, leaving a hinge so they stay together.

            Step 4: Assemble the choripán. Place the grilled chorizo inside the bread roll. Optionally, add toppings like chimichurri sauce, salsa criolla, or your favorite condiments.

            Step 5: Serve. Serve immediately while hot. Enjoy your choripán as a snack or meal!`
    },
    {
        foodName: "Asado",
        description: "South American barbecue",
        imageUrl: "images/asado.jpg",
        recipe: `Step 1: Prepare the grill. Light charcoal or wood in a parrilla (grill) and let it burn until you have medium-hot embers. Spread the coals evenly.

            Step 2: Prepare the meat. Season beef ribs, short ribs, flank steak, sausages, and other cuts with coarse salt. Some cuts can be lightly brushed with oil, but the traditional method is just salt.

            Step 3: Grill the meat. Place the meat on the grill over indirect heat for larger cuts or direct heat for sausages. Cook slowly to allow even cooking and smoke flavor. Turn occasionally.

            Step 4: Check doneness. Meat should be tender, juicy, and slightly charred on the outside. Sausages should be fully cooked and slightly crispy.

            Step 5: Serve. Slice the meat and serve hot with classic accompaniments like chimichurri sauce, grilled vegetables, and crusty bread. Enjoy the asado with family and friends!`
    },
    {
        foodName: "Empanadas",
        description: "Hand-sized, savory pastries, typically baked or fried, and filled with a variety of ingredients like meat, cheese, or vegetables. ",
        imageUrl: "images/empanadas.jpg",
        recipe: `Step 1: Prepare the filling. In a pan, heat some oil and sauté 1 chopped onion until translucent. Add 250g of minced beef (or chicken) and cook until browned. Season with salt, pepper, paprika, and a pinch of cumin. Optional: add chopped boiled eggs, olives, or raisins.

            Step 2: Prepare the dough. Use store-bought empanada dough discs or make your own. Keep the discs covered to prevent drying out.

            Step 3: Fill the empanadas. Place a spoonful of filling in the center of each dough disc. Fold the dough over to form a half-moon shape and press the edges with a fork to seal.

            Step 4: Cook the empanadas. For baked empanadas, preheat the oven to 200°C (390°F), brush the empanadas with an egg wash, and bake for 20–25 minutes until golden. For fried empanadas, heat oil in a deep pan and fry until golden brown, then drain on paper towels.

            Step 5: Serve. Let them cool slightly before serving. Enjoy your empanadas warm as a snack or appetizer!`
    }
    ];
    localStorage.setItem("typical_foods", JSON.stringify(typical_foods));
};

function createFoodCard () {
  document.querySelector("#typical_foods").innerHTML = "";
  typical_foods.forEach(food => {
    const foodCard = document.createElement("div");
    foodCard.classList.add("food-card");

    const name = document.createElement("h2");
    name.textContent = food.foodName;

    const description = document.createElement("p");
    description.textContent = food.description;

    const image = document.createElement("img");
    image.src = food.imageUrl;
    image.alt = food.foodName;
    image.loading = "lazy";

    

    foodCard.appendChild(image);
    foodCard.appendChild(name);
    foodCard.appendChild(description);
    foodCard.addEventListener("click", () => {
      createFoodRecipeCard(food);
    });

    foodContainer.appendChild(foodCard);
  });
};
const recipeContainer = document.querySelector("#recipes");

function createFoodRecipeCard (food) {
    recipeContainer.innerHTML ="";
    const title = document.createElement("h2");
    title.textContent = food.foodName;

    const img = document.createElement("img");
    img.src = food.imageUrl;
    img.alt = food.foodName;
    const recipe = document.createElement("p");
    recipe.textContent = food.recipe;

    recipeContainer.appendChild(title);
    recipeContainer.appendChild(img);
    recipeContainer.appendChild(recipe)
    
    
}
createFoodCard();