import outsideClick from "./outsideClick.js";

export default class initMenuMobile {
  constructor(menuButton, menuList, eventos) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.eventos = eventos;
    this.class = "active";
    if (eventos === undefined) this.eventos = ["touchstart", "click"];
    else this.eventos = eventos;
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.menuButton.classList.add(this.class);
    this.menuList.classList.add(this.class);
    outsideClick(this.menuList, this.eventos, () => {
      this.menuButton.classList.remove(this.class);
      this.menuList.classList.remove(this.class);
    });
  }

  adicionaEventos() {
    this.eventos.forEach((event) =>
      this.menuButton.addEventListener(event, this.openMenu)
    );
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.adicionaEventos();
    }
    return this;
  }
}
