import { loadHeaderFooter, breadcrumbs } from "./utils.mjs";
import  renderFavoritesList from "./favoritesList.mjs";

loadHeaderFooter();
breadcrumbs("favorites");

renderFavoritesList();
