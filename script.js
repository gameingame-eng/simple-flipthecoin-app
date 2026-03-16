function flipCoin() {
    var coinElement = document.getElementById("coin");
    var resultElement = document.getElementById("result");
    var result = Math.random() < 0.5 ? "heads" : "tails";

    if (coinElement.classList.contains("flipping")) {
        return;
    }

    resultElement.textContent = "Flipping...";
    coinElement.textContent = "";
    coinElement.classList.add("flipping");

    setTimeout(function () {
        coinElement.classList.remove("flipping");
        coinElement.textContent = result;
        resultElement.textContent = "Result: " + result;
    }, 1200);
}
