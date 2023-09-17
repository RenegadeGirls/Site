const defaultHover = Number(document.querySelector(`meta[property="static-page-id"`).getAttribute("content"));

let hover = defaultHover;

const pages = [...document.getElementsByClassName("page")];
const bar = document.getElementById("navbar");
const hoverStatus = new Array(pages.length).fill(false);

const moveNavBar = i => {
    const rect = pages[i].children[0].getBoundingClientRect();

    bar.style.left = `${rect.x}px`;
    bar.style.top = `calc(${rect.y + scrollY + rect.height / 2}px + 0.8em)`;
    bar.style.width = `${rect.width}px`;

    hover = i;
};
const resizeNavBar = () => {
    bar.classList.remove("trans-navbar");
    moveNavBar(hover);
    bar.offsetHeight; // Force trigger reload
    bar.classList.add("trans-navbar");
};

// Remove search bar & logo
pages.shift(), pages.pop();

if(!location.mobile) {
    document.fonts.ready
        .then(() => {
            pages.forEach((page, i) => {
                page.classList.add("pagebar");

                const [icon, para] = page.children[0].children;
                icon.title = para.textContent;

                page.addEventListener("mouseover", () => {
                    hoverStatus[i] = true;
                    moveNavBar(i);
                });
                page.addEventListener("mouseleave", () => {
                    hoverStatus[i] = false;

                    requestAnimationFrame(() => {
                        if(!hoverStatus.reduce((acc, cur) => acc || cur, false)) moveNavBar(defaultHover);
                    })
                });
            });

            addEventListener("resize", resizeNavBar);
            resizeNavBar();
        })
}