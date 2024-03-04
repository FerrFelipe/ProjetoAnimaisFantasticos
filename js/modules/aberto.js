export default class initAberto {
  constructor(funcionamento, classe) {
    this.funcionamento = document.querySelector(funcionamento);
    this.classe = classe;
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(",").map(Number);
    this.horarioSemana = this.funcionamento.dataset.horas
      .split(",")
      .map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto() {
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    const horarioAberto =
      this.horarioAgora >= this.horarioSemana[0] &&
      this.horarioAgora < this.horarioSemana[1];
    return semanaAberto && horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      console.log(this.estaAberto());
      this.funcionamento.classList.add(this.classe);
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}
