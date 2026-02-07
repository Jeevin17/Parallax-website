const parallax_el = document.querySelectorAll(".parallax")

let xValue = 0, yValue = 0;

let rotateDegree = 0;

// Optimization: Cache element data to avoid expensive getComputedStyle calls in the animation loop
let parallax_data = [];

function updateParallaxData() {
    parallax_data = [];
    parallax_el.forEach((el) => {
        const computedStyle = getComputedStyle(el);
        const leftVal = parseFloat(computedStyle.left);
        const dataset = el.dataset;

        parallax_data.push({
            el: el,
            speedx: Math.random() * 0.2 + 0.1,
            speedy: dataset.speedy ? parseFloat(dataset.speedy) : 0,
            left: leftVal,
            isInLeft: leftVal < window.innerWidth / 2 ? 1 : -1
        });
    });
}

updateParallaxData();
window.addEventListener("resize", updateParallaxData);

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

    if (rotateDegree < 0) xValue = Math.max(xValue, -400);
    if (rotateDegree > 0) xValue = Math.min(xValue, 400);

    parallax_data.forEach((item) => {
        let speedx = item.speedx * 0.4;
        let speedy = item.speedy * 0.4;
        let zValue = (e.clientX - item.left) * item.isInLeft * 0.1;

        item.el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px)) perspective(2300px) translateZ(${zValue * speedy}px)`;
    })

})

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("staggering")
            }
        })
    }, {
    threshold: 0.45,
}
);

parallax_el.forEach((el) => {
    observer.observe(el)

})

const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
    preloader.style.opacity = "0";
    setTimeout(() => {
        preloader.style.display = "none";
        document.body.classList.add("loaded");
    }, 500);
});

