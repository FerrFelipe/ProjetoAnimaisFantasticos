function initTabNav() {
  const tabmenu = document.querySelectorAll(".js-tabmenu li");
  const tabcontent = document.querySelectorAll(".js-tabcontent section");

  if (tabmenu.length && tabcontent.length) {
    tabcontent[0].classList.add("ativo");
    function activetab(index) {
      tabcontent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabcontent[index].classList.add("ativo");
    }
    tabmenu.forEach((itemmenu, index) => {
      itemmenu.addEventListener("click", () => {
        activetab(index);
      });
    });
  }
}
initTabNav();
function initAccordion() {
  const accordionlist = document.querySelectorAll(".js-accordion dt");
  if (accordionlist.length) {
    accordionlist[0].classList.add("ativo");
    accordionlist[0].nextElementSibling.classList.add("ativo");
    function activeAccordion() {
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("ativo");
    }
    accordionlist.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();
function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
  if (linksInternos) {
    function scrollSuave(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    linksInternos.forEach((link) => {
      link.addEventListener("click", scrollSuave);
    });
  }
}
initScrollSuave();
function initAnimaScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.75;
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
        if (sectionTop < 0) section.classList.add("ativo");
        else section.classList.remove("ativo");
      });
    }
  }

  animaScroll();
  window.addEventListener("scroll", animaScroll);
}
initAnimaScroll();
