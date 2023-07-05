import { loadHeaderFooter, setLocalStorage } from "./utils.mjs";

loadHeaderFooter();
let data = {};

function getInput() {
    const inputEl = document.getElementById("search__input");
    const searchValue = inputEl.value;
    inputEl.value = "";
    setLocalStorage("search", searchValue);
    location.assign("recipe-list/index.html");
}

document.getElementById("search__button").addEventListener("click", getInput);


