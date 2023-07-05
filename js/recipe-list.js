import { loadHeaderFooter, getLocalStorage } from "./utils.mjs";
import recipeList from "./recipeList.mjs";

loadHeaderFooter();

const searchValue = getLocalStorage("search");
recipeList(".recipeList", searchValue);
