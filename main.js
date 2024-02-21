
let p = document.querySelector(".button")
console.log(p)
window.onscroll = function () {
    if (window.scrollY >= 800) {
        p.style.display = " block";
    }
    else {
        p.style.display = "  none";

    }
};
console.log(location.href);
p.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",

    });

};
document.querySelectorAll(".portfolio .shuffle li").forEach((e) => {
    e.addEventListener("click", () => {
        document.querySelectorAll(".portfolio .shuffle li").forEach((e) => {
            e.classList.remove("active");
        })
        e.classList.add("active")
    })
})
console.log(document.querySelectorAll(".portfolio .shuffle li"))
