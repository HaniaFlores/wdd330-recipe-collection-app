function loadTemplate(path) {
  return async function () {
    const res = await fetch(path);
    if (res.ok) {
      const html = await res.text();
      return html;
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

  const headerTemplateFn = loadTemplate("../dynamic/header.html");
  const footerTemplateFn = loadTemplate("../dynamic/footer.html");
  const headerEl = document.querySelector("#main__header");
  const footerEl = document.querySelector("#main__footer");

  renderWithTemplate(headerTemplateFn, headerEl); 
  renderWithTemplate(footerTemplateFn, footerEl);
}