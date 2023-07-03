import { getRecipeList } from "./getData.mjs";
import { makeId, renderListWithTemplate } from "./utils.mjs";

export default async function recipeList(
  selector,
  string
/*   orderAscDesc = "asc",
  idBtn = "sort-by-name" */
) {
    let el = document.querySelector(selector);
    const recipes = await getRecipeList(string);
    console.log(recipes);
    

/*   const orderedList = orderList(products, orderAscDesc, idBtn); */
  renderListWithTemplate(recipeCardTemplate, el, recipes);
}

export function recipeCardTemplate(recipe) {

  return `<li class="recipe__card" dataId="${recipe.title}">
  <a href="../recipe-pages/index.html?recipe=${makeId(recipe.title)}">
    <h2>${recipe.title}</h2>
    <p>${recipe.servings}</p>
  </a>
</li>
`;
}