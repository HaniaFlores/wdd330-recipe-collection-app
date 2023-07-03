import recipeDetails from "./recipeDetails.mjs";
import { loadHeaderFooter, getParam } from "./utils.mjs";

loadHeaderFooter();

/* CALL RECIPE CONTENT FUNTION */
const recipeId = getParam("recipe");
recipeDetails(recipeId);