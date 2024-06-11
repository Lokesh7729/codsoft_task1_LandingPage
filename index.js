// STICKY NAVBAR
const section_hero = document.querySelector(".section-hero");
const nav_header = document.querySelector(".header");

const observer = new IntersectionObserver(
  function (entries, observer) {
    const ent = entries[0];
    ent.isIntersecting === false
      ? document.body.classList.add("sticky")
      : document.body.classList.remove("sticky");
  },
  {
    root: null,
    rootMargin: "-100px",
    threshold: 0,
  }
);

observer.observe(section_hero);

// mobile nav bar
const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

// smooth scrooling
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // close mobile navigation
    if (link.classList.contains("main-nav-link"))
      header.classList.toggle("nav-open");
  });
});
