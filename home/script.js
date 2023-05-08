const topContent = document.getElementById("top-content");

onresize = () => {
    topContent.style.height = `${innerHeight - topContent.offsetTop}px`;
};

ready(() => onresize());