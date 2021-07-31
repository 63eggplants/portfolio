"use strict";

// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  const scrollValue = window.scrollY;
  if (scrollValue > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", event => {
  const target = event.target;
  const link = target.dataset.link;
  if (link === undefined) {
    return;
  }
  scrollInotoView(link);
});

// Handle click on "contact me" button on home
const homeContactBtn = document.querySelector(".home__contactBtn");
homeContactBtn.addEventListener("click", () => {
  scrollInotoView("#contact");
});

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home.style.opacity = `${1 - window.scrollY / homeHeight}`;
  console.log();
});

function scrollInotoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
