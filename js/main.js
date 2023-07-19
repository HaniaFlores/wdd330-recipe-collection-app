import { loadHeaderFooter, setLocalStorage } from "./utils.mjs";

loadHeaderFooter();

function getInput() {
    const inputEl = document.getElementById("search__input");
    const searchValue = inputEl.value;
    inputEl.value = "";
    setLocalStorage("search", searchValue);
    location.assign("recipe-list/index.html");
}

document.getElementById("search__button").addEventListener("click", getInput);

/* If user press enter will call getInput() */
document
  .getElementById("search__input")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      getInput();
    }
  });


