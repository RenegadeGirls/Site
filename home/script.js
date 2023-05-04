const resize = () => {
    const content = document.getElementById("content");
    content.style.height = `${innerHeight - content.offsetTop}px`;
};

onload = () => {
    resize();
    onresize = () => resize();

    if(!location.mobile) {
        const pages = [...document.getElementsByClassName("page")];
        pages.shift();
        pages.forEach(page => {
            page.classList.add("pagebar");

            let [icon, para] = page.children[0].children;

            icon.title = para.textContent;
        });
    }
};