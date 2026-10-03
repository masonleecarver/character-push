export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const character = urlParams.get(param)
  return character;
}

function renderWithTemplate(template, parentElement, data = null, callback = null) {
    parentElement.innerHTML = template;
    if (callback) {
        callback(data);
    }
}

async function loadTemplate(path) {
    const res = await fetch(path);
    const template = await res.text();
    return template;
}

export async function loadHeaderFooter() {
    const headtemp = await loadTemplate("../partials/header.html");
    const headelement = document.getElementById("main-header");

    const foottemp = await loadTemplate("../partials/footer.html");
    const footelement = document.getElementById("main-footer");

    renderWithTemplate(headtemp, headelement);
    renderWithTemplate(foottemp, footelement);

}

export function generateID() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    let id = "";

    for (let i = 0; i < 5; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return id;
}