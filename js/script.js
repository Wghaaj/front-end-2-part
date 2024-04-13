const burger = document.querySelector('.burger');
const nav = document.querySelector(".navigation");
const ul = document.querySelector(".navigation ul");
const li = document.querySelectorAll("ul li");
const main = document.querySelector("main")
const footer = document.querySelector("footer")
let clickCounter = 0;

burger.addEventListener('click', () => {
    clickCounter++;
    burger.classList.add("burger-active");
    burger.classList.add("new");
    ul.classList.add("flex-active");
    ul.classList.add("menu");
    nav.classList.add("block");
    main.classList.add("none");
    footer.classList.add("none");

    li.forEach(item => {
        item.classList.add("menu-li");
    });
    
    if (clickCounter === 2) {
        clickCounter = 0;
        burger.classList.remove("burger-active");
        burger.classList.remove("new");
        ul.classList.remove("flex-active");
        ul.classList.remove("menu");
        nav.classList.remove("block");
        main.classList.remove("none");
        footer.classList.remove("none");

        li.forEach(item => {
            item.classList.remove("menu-li");
        });
    }
});
