document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("burger").addEventListener("click", function () {
        document.querySelector("header").classList.toggle("open")
    })
})

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");
    const content = document.querySelector(".content");
    const scrollItems = document.querySelectorAll(".scroll-item")

    const scrollAnimation = () => {
        let windowCenter = (window.innerHeight / 1.5) + window.scrollY;
        scrollItems.forEach(el => {
            let scrollOffset = el.offsetTop + (el.offsetHeight / 4);
            if (windowCenter >= scrollOffset) {
                el.classList.add('animation-class');
            } else {
                el.classList.remove('animation-class');
            }
        });
    };



    const headerFixed = ()=> {
        let scrollTop = window.scrollY;
        let contentCenter = content.offsetHeight / 2;

        if (scrollTop >= contentCenter) {
            header.classList.add('fixed');
            content.style.marginTop = `${header.offsetHeight}px`;
        } else {
            header.classList.remove('fixed');
            content.style.marginTop = `0px`;
        }
    };

    headerFixed();
    scrollAnimation();
    window.addEventListener("scroll", () => {
        headerFixed();
        scrollAnimation();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const goTopBtn = document.getElementById("arrow-up");
    goTopBtn.addEventListener("click", goTop);
    function goTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -75);
            setTimeout(goTop, 10);
        }
    };
});