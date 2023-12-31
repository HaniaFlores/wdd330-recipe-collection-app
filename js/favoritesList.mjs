import { getLocalStorage, renderListWithTemplate, makeId } from "./utils.mjs";

export default function renderFavoritesList() {
  const list = getLocalStorage("favorites");
  const el = document.querySelector(".recipeList");

  if (
    localStorage.getItem("favorites") !== null &&
    Object.keys(list).length > 0
  ) {
    renderListWithTemplate(favoriteRecipeTemplate, el, list);
  } else {
    el.innerHTML = "<p>No recipes added</p>";
  }
}


function favoriteRecipeTemplate(recipe) {
  return `<li class="recipe__card" dataId="${recipe.title}">
  <a href="../recipe-pages/index.html?recipe=${makeId(recipe.title)}">
    <h2>${recipe.title}</h2>
    <p>${recipe.servings}</p>
  </a>
  <div dataId="${recipe.title}" id="delete__btn">&#128465;</div>
</li>
`;
}
