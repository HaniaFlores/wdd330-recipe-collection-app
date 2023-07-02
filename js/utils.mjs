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

export async function loadHeaderFooter() {

  const headerTemplateFn = loadTemplate("dynamic/footer.html");
  const footerTemplateFn = loadTemplate("../dynamic/footer.html");
  const headerEl = document.querySelector("#main__header");
  const footerEl = document.querySelector("#main__footer");

  renderWithTemplate(headerTemplateFn, headerEl); 
  renderWithTemplate(footerTemplateFn, footerEl);
}

/* export function breadcrumbs() {
  // Obtener los elementos del DOM
  var searchButton = document.getElementById("search__button");
  var searchBar = document.getElementById("search__bar");

  // Agregar un evento click al botón de búsqueda
  searchButton.addEventListener("click", function() {
    // Obtener el valor del input
    var searchQuery = searchBar.value;
    console.log(searchQuery);

    // Almacenar el valor en una variable o hacer lo que desees con él
    // Ejemplo:
    localStorage.setItem("searchQuery", searchQuery);

    // Redirigir a otra página
    window.location.href = "./recipe-list/index.html";
  });
} */