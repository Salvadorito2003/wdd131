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
        recipe: "Step 1: Season the meat. Sprinkle salt and black pepper, followed by chopped parsley and garlic, pressing them to adhere, on each piece of the meat. Stack them on a plate. \n Step 2: Coat in egg. Whisk the eggs with some salt in a deep plate that's big enough to fit the meat pieces. Place a piece of meat inside, then flip, making sure all the surface is covered with the eggs. \n Step 3: Coat with breadcrumbs. Pour the breadcrumbs into a deep plate. Coat the meat with the breadcrumbs, pressing as you go. \n Step 4: Stack. Stack the breaded steak on a plate while continuing with the rest. \n Step 5: Bake. Spray a baking tray with oil, place the breaded steaks on it without crowding them, and spray the top with oil. Broil in a preheated oven at 440ºF (225ºC), fan-assisted, on the highest rack, for 6 minutes and flipping them halfway through. \n Step 6: Serve. Remove them from the oven and place them on a plate or a cooling rack. Don't stack them while they're not, as that'll make the crispy skins go soggy. Enjoy!"
    },
    {
        foodName: "Locro",
        description: "Corn, beans, and pumpkin stew with a range of meats that includes sausage, pork, bacon, and beef. ",
        imageUrl: "images/locro.jpg",
        recipe: "Start by rinsing the corn and beans separately, then soak them overnight (8 to 12 hours) in plenty of water. Drain and rinse them before cooking. Pre-cook the corn in a large pot with enough water to cover it. Bring to a boil, then simmer for 1 to 2 hours until the kernels are soft but not mushy. \n While the corn is cooking, prepare the meats. Heat the lard or oil in a large heavy-bottomed pot. Brown the beef and pork, then remove and set aside. Fry the chorizo slices in the same pot to release their flavor. \n Next, sauté the aromatics in the remaining fat. Cook the onions, garlic, and bell pepper until they are soft and fragrant, about 5 to 7 minutes. Add the smoked paprika and cumin and cook for another minute to bring out the spices aroma. \n Return the browned meats to the pot and add the pre-cooked corn (and beans if using). Cover everything with water or broth, about 6 to 8 cups, and add the bay leaves, salt, and pepper. Bring the mixture to a boil, then reduce the heat to low and let it simmer gently. Cook uncovered for 1.5–2 hours, stirring occasionally. If you are adding potatoes, include them in the last 30 minutes of cooking. The stew should thicken as the corn and beans release starch. \n Once cooked, taste the locro and adjust the seasoning with more salt, pepper, or smoked paprika if necessary. Serve hot, garnished with crispy pancetta or chorizo bits and, if desired, chili sauce. Locro is often accompanied by bread and tastes even better when reheated the next day."
    },
    {
        foodName: "Choripan",
        description: "Grilled chorizo sausage served in a crusty bread roll, often a baguette",
        imageUrl: "images/choripan.jpg",
        recipe: ""
    },
    {
        foodName: "Asado",
        description: "South American barbecue",
        imageUrl: "images/asado.jpg",
        recipe: ""
    },
    {
        foodName: "Empanadas",
        description: "Hand-sized, savory pastries, typically baked or fried, and filled with a variety of ingredients like meat, cheese, or vegetables. ",
        imageUrl: "images/empanadas.jpg",
        recipe: ""
    },
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
    recipe.textContent = food.recipe || "No recipe available.";

    recipeContainer.appendChild(title);
    recipeContainer.appendChild(img);
    
    const steps = (food.recipe || "No recipe available.").split("\n");
    steps.forEach(step => {
        const p = document.createElement("p");
        p.textContent = step.trim();
        recipeContainer.appendChild(p);
    });
}
createFoodCard();