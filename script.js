// const containerEl = document.querySelector(".container");
const nameBoxEl = document.querySelector(".name-container");
const navEl = document.querySelector(".nav");
const navLinks = document.querySelector(".nav-links");
const navItemEls = document.querySelectorAll(".nav-item");
const sectionEls = document.querySelectorAll("section");

const obsCallback = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  const obsSectionNo = entry.target.id.slice(-1);
  if (!obsSectionNo) return;
  console.log(obsSectionNo);

  const obsNav = document.querySelector(`.nav-item[data-section="${obsSectionNo}"]`);

  navItemEls.forEach(el => el.classList.remove("nav-item--selected"));
  obsNav.classList.add("nav-item--selected");
};

const obsOptions = {
  root: null,
  threshold: [0.4, 1],
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
sectionEls.forEach(section => observer.observe(section));

// navLinks.addEventListener("mouseover", function (e) {
//   navItemEls.forEach(navItem => (navItem.style.opacity = 0.5));
//   e.target.closest(".nav-item").style.opacity = 1;
// });

// navLinks.addEventListener("mouseleave");

navLinks.addEventListener("click", function (e) {
  e.preventDefault();

  console.log(e.target);

  const id = e.target.getAttribute("href");
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
});
