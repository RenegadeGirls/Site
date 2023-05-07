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