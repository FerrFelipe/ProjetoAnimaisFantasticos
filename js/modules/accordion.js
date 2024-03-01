export default class initAccordion {

  constructor(list) {
    this.accordionlist = document.querySelectorAll(list);
    this.activeClass = "ativo";
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  addAccordionEvent() {
    this.accordionlist.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccordion(item));
    });
  }

  init() {
    if (this.accordionlist.length) {
      this.toggleAccordion(this.accordionlist[0]);
      this.addAccordionEvent();
    }
    return this;
  }
}
