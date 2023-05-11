const ready = func => {
    ready.waiting.push(func);
};

ready.waiting = [];
ready.run = () => ready.waiting.forEach(f => f());

addEventListener("load", () => {
    const elements = [...document.getElementsByTagName("div")];
    let loaded = 0;
    let total = 0;
    elements.forEach(el => {
        if(el.hasAttribute("data-href")) {
            const href = el.getAttribute("data-href");
            const parser = new DOMParser();
            fetch(href)
                .then(html => html.text())
                .then(text => {
                    const children = [...parser.parseFromString(text, "text/html").body.children];
                    loaded++;

                    if(loaded >= total) ready.run();

                    children.forEach(child => {
                        // Is there a better way to do this that makes the scripts reload?
                        const copy = document.createElement(child.tagName);
                        copy.innerHTML = child.innerHTML;
                        [...child.attributes].forEach(attr => copy.setAttribute(attr.name, attr.value));

                        el.parentNode.insertBefore(copy, el);
                    });

                    el.remove();
                })
                .catch(() => console.error(`Could not find ${href}`))

            total++;
        }
    });

    if(total == 0) ready.run();
});