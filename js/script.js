const text = document.getElementById("landing");
const leaf = document.getElementById("leaf");
const hill1 = document.getElementById("hill1");
const hill4 = document.getElementById("hill4");
const hill5 = document.getElementById("hill5");

window.addEventListener("scroll", () => {
    leaf.style.top = window.scrollY * -2.5 + "px";
    hill1.style.top = window.scrollY * 1 + "px";
    hill1.style.top = window.scrollY * 1 + "px";
    hill4.style.left = window.scrollY * -1 + "px";
    hill5.style.left = window.scrollY * 1 + "px";
    text.style.marginTop = window.scrollY * 2 + "px";
});
