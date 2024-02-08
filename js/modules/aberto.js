export default function initAberto() {
  const agora = new Date();
  const diaFunc = document.querySelector("[data-dia]");
  const dayOpen = diaFunc.dataset.dia.split(",").map(Number).indexOf(agora.getDay()) !== -1;
  const horasFunc = diaFunc.dataset.horas.split(",").map(Number);
  const hourOpen = horasFunc[0] <= agora.getHours() && agora.getHours() < horasFunc[1];
    if(hourOpen && dayOpen)diaFunc.classList.add("aberto")
}
