import { getLocalStorage, renderListWithTemplate, makeId } from "./utils.mjs";

export default function renderFavoritesList() {
  const list = getLocalStorage("favorites");

  if (
    localStorage.getItem("favorites") !== null &&
    Object.keys(list).length > 0
  ) {
    const el = document.querySelector(".recipeList");
    renderListWithTemplate(favoriteRecipeTemplate, el, list);
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

export function removeFromFavorites(list) {
  const favoritesList = document.getElementsByClassName("delete__btn");

  for (let i = 0; i < favoritesList.length; i++) {
    favoritesList[i].addEventListener("click", function (e) {
      const dataId = e.target.getAttribute("dataId");
      const recipesFiltered = list.filter(
        (item, index) => index !== i || dataId !== item.title
      );
      localStorage.setItem("favorites", JSON.stringify(recipesFiltered));
      window.location.reload();
    });
  }
}
