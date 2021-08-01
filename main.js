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
  navbarMenu.classList.remove("open");
  scrollInotoView(link);
});

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

// Handle click on "contact me" button on home
const homeContactBtn = document.querySelector(".home__contact-btn");
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

// Show "arrow up" button when scrolling down
const arrowUpBtn = document.querySelector(".arrow-up-btn");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUpBtn.classList.add("visible");
  } else {
    arrowUpBtn.classList.remove("visible");
  }
});
arrowUpBtn.addEventListener("click", () => {});

// Handle click on the "arrow up" button
arrowUpBtn.addEventListener("click", () => {
  scrollInotoView("#home");
});

// Projects
const categoryBtnContainer = document.querySelector(".myWork__categories");
const projectContainer = document.querySelector(".myWork__projects");
console.log(projectContainer);
const projects = document.querySelectorAll(".project");

categoryBtnContainer.addEventListener("click", event => {
  const filter =
    event.target.dataset.filter || event.target.parentNode.dataset.filter;
  if (filter === undefined) {
    return;
  }

  //Remove selection from the previous item and select the new one
  const selected = document.querySelector(".category__btn.selected");
  selected.classList.remove("selected");
  const newSelect =
    event.target.tagName === "BUTTON" ? event.target : event.target.parentNode;
  newSelect.classList.add("selected");

  projectContainer.classList.add("anim-out");

  setTimeout(() => {
    projects.forEach(project => {
      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    projectContainer.classList.remove("anim-out");
  }, 300);
});

function scrollInotoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
