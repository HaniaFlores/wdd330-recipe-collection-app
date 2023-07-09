import recipeDetails from "./recipeDetails.mjs";
import { loadHeaderFooter, getParam, breadcrumbs } from "./utils.mjs";

loadHeaderFooter();
breadcrumbs("recipe_page");

/* CALL RECIPE CONTENT FUNTION */
const recipeId = getParam("recipe");
recipeDetails(recipeId);