const topContent = document.getElementById("top-content");
const more = document.getElementById("more");

onresize = () => {
    topContent.style.height = `${innerHeight - topContent.offsetTop}px`;
};
/*onscroll = () => {
    more.style.opacity = `${(1.5 - scrollY / innerHeight * 2) * 100}%`;
};*/

onresize();

if(!location.mobile) {
    const pages = [...document.getElementsByClassName("page")];

    // Remove search bar & logo
    pages.shift(), pages.pop();

    pages.forEach(page => {
        page.classList.add("pagebar");

        const [icon, para] = page.children[0].children;
        icon.title = para.textContent;
    });
};