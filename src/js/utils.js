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
    const headtemp = await loadTemplate("./partials/header.html");
    const headelement = document.getElementById("main-header");

    const foottemp = await loadTemplate("./partials/footer.html");
    const footelement = document.getElementById("main-footer");

    renderWithTemplate(headtemp, headelement);
    renderWithTemplate(foottemp, footelement);

}