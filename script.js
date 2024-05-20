const containerEl = document.querySelector(".container");
const navEl = document.querySelector(".nav");
const nameBoxEl = document.querySelector(".name-box");
const navLinks = document.querySelector(".nav-links");
const navItemEls = document.querySelectorAll(".nav-item");
const sectionEls = document.querySelectorAll("section");

const obsCallback = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  const obsSectionNo = entry.target.id.slice(-1);
  if (!obsSectionNo) return;

  const obsNav = document.querySelector(`.nav-item[data-section="${obsSectionNo}"]`);

  navItemEls.forEach(el => el.classList.remove("nav-item--selected"));
  obsNav.classList.add("nav-item--selected");
};

const obsOptions = {
  root: null,
  threshold: 0.5,
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
sectionEls.forEach(section => observer.observe(section));

const scrollIntoView = function (e) {
  e.preventDefault();

  const id = e.target.closest("a").getAttribute("href");
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
};

navLinks.addEventListener("click", scrollIntoView);
nameBoxEl.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});
