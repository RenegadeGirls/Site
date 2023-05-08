addEventListener("load", () => {
    const elements = [...document.getElementsByTagName("div")];
    elements.forEach(el => {
        if(el.hasAttribute("data-href")) {
            const href = el.getAttribute("data-href");
            fetch(href)
                .then(html => html.text())
                .then(text => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(text, "text/html");
                    el.parentElement.replaceChild(doc.body.children[0], el);
                })
                .catch(error => console.error(`Could not find ${href}`))
        }
    });
});