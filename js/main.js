[...document.querySelectorAll(".item")].forEach(item => {
    item.addEventListener("click", (event) => {
        [...document.querySelectorAll(".item")].forEach(item => item.classList.remove("active"));
        event.target.classList.add("active");
    });
});