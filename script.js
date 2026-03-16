function flipCoin(){
    var coinElement = document.getElementById("coin");
    var result = Math.random() < 0.5 ? "heads" : "tails";

    coinElement.textContent = result;
}