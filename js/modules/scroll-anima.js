import debounce from "./debounce";

export default class initAnimacaoScroll {
  constructor(section) {
    this.sections = document.querySelectorAll(section);
    this.windowMetade = window.innerHeight * 0.7;
    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      console.log(offset);
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }

  checkDistance() {
    this.distance.forEach((item) => {
      if (window.scrollY > item.offset) {
        item.element.classList.add("ativo");
      } else if (item.element.classList.contains("ativo"))
        item.element.classList.remove("ativo");
    });
  }

  init() {
    if (this.sections.length) {
      debounce(this.getDistance(), 300);
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }

  stop() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
