const collapsibles = [...document.getElementsByClassName("type")];
collapsibles.forEach(el => {
    toggleCollapsible(el);
    el.children[0].addEventListener("click", () => toggleCollapsible(el));
});

function toggleCollapsible(e) {
    const children = [...e.children];
    children.shift();

    children.forEach(c => c.classList.toggle("collapsed"));
}