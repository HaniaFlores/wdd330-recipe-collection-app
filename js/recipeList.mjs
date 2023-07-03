import { getRecipeList } from "./getData.mjs";
import { renderListWithTemplate } from "./utils.mjs";

export default async function recipeList(
  selector,
  string
/*   orderAscDesc = "asc",
  idBtn = "sort-by-name" */
) {
  let el = document.querySelector(selector);
  const recipes = await getRecipeList(string);

/*   const orderedList = orderList(products, orderAscDesc, idBtn); */
  renderListWithTemplate(recipeCardTemplate, el, recipes);
}

export function recipeCardTemplate(recipe) {

  return `<li class="recipe__card">
  <a href="../index.html">
    <h2>${recipe.title}</h2>
    <h3>Servings #<span id="servingsNum">${recipe.servings}</span></h3>
  </a>
</li>
`;
}