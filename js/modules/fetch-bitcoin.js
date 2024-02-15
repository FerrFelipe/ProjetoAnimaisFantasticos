export default function initFetchBitcoin() {
  const btcSpan = document.querySelector(".btc-preco");
  bitcoinPrice(btcSpan);
  async function bitcoinPrice() {
    const responseBitcoin = await fetch("https://blockchain.info/ticker");
    const bitcoinJson = await responseBitcoin.json();
    btcSpan.innerText = (1000 / bitcoinJson.BRL.buy).toFixed(4);
  }
}
