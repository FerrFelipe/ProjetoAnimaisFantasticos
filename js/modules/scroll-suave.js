export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]'
  );
  function scrollSuave(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  if (linksInternos) {
    linksInternos.forEach((link) => {
      link.addEventListener("click", scrollSuave);
    });
  }
}