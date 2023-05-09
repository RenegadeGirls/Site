const topContent = document.getElementById("top-content");

const resizeDots = () => {
    topContent.style.height = `${innerHeight - topContent.offsetTop}px`;
};

ready(() => resizeDots());
addEventListener("resize", () => resizeDots());