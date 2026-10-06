function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

function showMessage() {
    const popup = document.getElementById("popup");
    popup.classList.add("active");
}

function closeMessage() {
    const popup = document.getElementById("popup");
    popup.classList.remove("active");
}

document.addEventListener("click", function(event) {
    const popup = document.getElementById("popup");

    if (event.target === popup) {
        closeMessage();
    }
});