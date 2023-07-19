import { loadHeaderFooter, breadcrumbs } from "./utils.mjs";
import  renderFavoritesList, { removeFromFavorites } from "./favoritesList.mjs";

loadHeaderFooter();
breadcrumbs("favorites");

renderFavoritesList();

/* document.getElementById("delete__btn").addEventListener("click", removeFromFavorites); */
