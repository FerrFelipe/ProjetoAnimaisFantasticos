function initTabNav() {
  const tabmenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabcontent = document.querySelectorAll('[data-tab="content"] section');

  if (tabmenu.length && tabcontent.length) {
    tabcontent[0].classList.add("ativo", tabcontent[0].dataset.anime);
    function activetab(index) {
      tabcontent.forEach((section) => {
        section.classList.remove("ativo");
      });
      const direcao = tabcontent[index].dataset.anime;
      tabcontent[index].classList.add("ativo", direcao);
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
  const accordionlist = document.querySelectorAll(
    '[data-anime="accordion"] dt'
  );
  console.log(accordionlist)
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
  const linksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]'
  );
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
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.85;
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
