import { loadHeaderFooter, getLocalStorage, breadcrumbs } from "./utils.mjs";
import recipeList from "./recipeList.mjs";

loadHeaderFooter();
breadcrumbs("recipe_list");

const searchValue = getLocalStorage("search");
recipeList(".recipeList", searchValue);
