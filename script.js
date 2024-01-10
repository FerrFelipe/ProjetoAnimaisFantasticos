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