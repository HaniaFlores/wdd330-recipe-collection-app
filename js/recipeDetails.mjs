/* REDER RECIPE CONTENTS */
import { findRecipeById } from "./getData.mjs";

let recipe = {};

export default async function recipeDetails(productId) {
  // recipe data
  recipe = await findRecipeById(productId);
  // Title
  document.title = recipe.title;

  renderRecipeDetails();
/*   setColorItems(); */
/*   document.getElementById("addToCart").addEventListener("click", addToCart); */
}

function renderRecipeDetails() {
  document.querySelector("#recipeTitle").innerText =
    recipe.title;
  document.getElementById("servingsNum").innerText = recipe.servings;

    const ingredientsArray = recipe.ingredients.split("|");
    const ingredients = ingredientsArray.map((ingredient) => {
        const ingredientEl = `<li>${ingredient}</li>`;
        return ingredientEl;
    }).join("");
    document.getElementById("ingredients__list").innerHTML = ingredients;
/*   document.getElementById("addToCart").setAttribute("data-id", product.Id); */
}

