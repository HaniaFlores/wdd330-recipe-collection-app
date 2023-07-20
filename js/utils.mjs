import { findRecipeById, getRecipeList } from "./getData.mjs";

function loadTemplate(path) {
  return async function () {
    const res = await fetch(path);
    if (res.ok) {
      const html = await res.text();
      return html;
    } else {
      console.log("Error HEADER")
    }
  };
}

export async function renderWithTemplate(
  templateFn,
  parentElement,
  data,
  callback,
  position = "afterbegin",
  clear = true
) {
  if (clear) {
    parentElement.innerHTML = "";
  }
  const htmlString = await templateFn(data);
  parentElement.insertAdjacentHTML(position, htmlString);
  if (callback) {
    callback();
  }
}

export function renderListWithTemplate(
  templateFn,
  parentElement,
  list,
  position = "afterbegin",
  clear = true
) {
  if (clear) {
    parentElement.innerHTML = "";
  }
  const htmlString = list.map(templateFn);
  parentElement.insertAdjacentHTML(position, htmlString.join(""));
}

export async function loadHeaderFooter() {

  const headerTemplateFn = loadTemplate("/dynamic/header.html");
  const footerTemplateFn = loadTemplate("/dynamic/footer.html");
  const headerEl = document.querySelector("#main__header");
  const footerEl = document.querySelector("#main__footer");

  renderWithTemplate(headerTemplateFn, headerEl); 
  renderWithTemplate(footerTemplateFn, footerEl);
}

export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function makeId(string) {
  return string.replace(/\s+/g, '-');
}

export function idToString(string) {
  return string.replace(/-/g, ' ');
}

export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);
  return idToString(product);
}

export function breadcrumbs(page) {
  const breadcrumbList = document.getElementById("breadcrumb__list");

  switch (page) {
    case "home": {
      breadcrumbList.innerHTML = `<li class="breadcrumb__item"><a href="/">HOME</a></li>`;
      break;
    }
    case "recipe_page": {
      const recipeId = getParam("recipe");
      findRecipeById(idToString(recipeId)).then((data) => {
        const breadcrumbItem = `<li class="breadcrumb__item"><a href="../recipe-list/index.html">Search Results (10)</a></li><li class="breadcrumb__item"><a href="../recipe-pages/index.html?recipe=${recipeId}">Recipe - ${idToString(
          recipeId
        )}</a></li>`;
        breadcrumbList.innerHTML += breadcrumbItem;
      });
      break;
    }
    case "recipe_list": {
      let searchValue = getLocalStorage("search");
      getRecipeList(searchValue).then((data) => {
        const length = data.length;
        const breadcrumbItem = `<li class="breadcrumb__item"><a href="">Search Results (${length})</a></li>`;
        breadcrumbList.innerHTML += breadcrumbItem;
      });
      break;
    }
    default:
      break;
  }
}