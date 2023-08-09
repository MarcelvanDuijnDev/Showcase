document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".fall-fade-in");

    animatedElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
    });
});
