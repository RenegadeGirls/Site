const resize = () => {
    const content = document.getElementById("content");
    content.style.height = `${innerHeight - content.offsetTop}px`;
};

onload = () => {
    resize();
    onresize = () => resize();

    if(!location.mobile) {
        const pages = [...document.getElementsByClassName("page")];
        pages.forEach(page => page.classList.add("pagebar"));
    }
};