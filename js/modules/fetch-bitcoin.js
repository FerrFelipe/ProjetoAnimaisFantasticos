export default function fetchBitcoin(url,target) {
  const btcSpan = document.querySelector(target);
  async function bitcoinPrice() {
    const responseBitcoin = await fetch(url);
    const bitcoinJson = await responseBitcoin.json();
    btcSpan.innerText = (1000 / bitcoinJson.BRL.buy).toFixed(4);
  }
  bitcoinPrice(btcSpan);
}
