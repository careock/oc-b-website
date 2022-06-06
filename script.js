let addInCart = document.getElementById("addInCart");
addInCart.addEventListener("click", addincart);
let inCartLabel = document.getElementsByClassName('p-in-c-label')[0]
let valueInCartLabel = parseFloat(inCartLabel.value)
if (valueInCartLabel==0) {
    inCartLabel.style.display = "none"
}

function addincart () {
    inCartLabel.style.display = "flex"
    valueInCartLabel = valueInCartLabel + 1
    inCartLabel.value = valueInCartLabel
    console.log(valueInCartLabel)
    console.log('addedincart')
}

