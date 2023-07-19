import recipeDetails from "./recipeDetails.mjs";
import { loadHeaderFooter, getParam, breadcrumbs, setLocalStorage, getLocalStorage } from "./utils.mjs";

loadHeaderFooter();
breadcrumbs("recipe_page");
let list = [];

const recipeId = getParam("recipe");
setLocalStorage("Id", recipeId);
let data = await recipeDetails(recipeId);

document
  .getElementById("addToFavorites")
  .addEventListener("click", addToFavoritesList);

function addToFavoritesList() {
  list = JSON.parse(localStorage.getItem("favorites")) || [];
  list.push(data);
  localStorage.setItem("favorites", JSON.stringify(list));
}
