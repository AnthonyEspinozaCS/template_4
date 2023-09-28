const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryHeader = document.querySelector(".primary-header");
const headerLogo = document.querySelector(".header-logo");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

function myFunction(number) {
  const bio = document.getElementById(`bio-${number}`);
  const btn = document.getElementById(`btn-${number}`);
  bio.classList.toggle("expanded");
  btn.classList.toggle("expanded");
}

// after scrolling down 100px, add .scroll class to the #cs-navigation
window.addEventListener("scroll", () => {
  const scroll = document.documentElement.scrollTop;
  console.log(scroll);
  if (scroll >= 100) {
    primaryHeader.classList.add("loading");
  } else {
    primaryHeader.classList.remove("loading");
  }
});
