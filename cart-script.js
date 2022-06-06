// cart
let deleteProd = document.getElementsByClassName("delete-prod");

updatecartTotal ()

for (var i =0; i<deleteProd.length; i++) {
    let button = deleteProd[i]
    button.addEventListener("click", function (event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.remove ()
        updatecartTotal()
    })
}

function updatecartTotal () {
    let cartItemContainer = document.getElementsByClassName('prods-in-cart')[0]
    let cartRows = cartItemContainer.getElementsByClassName('s-prod-in-cart')
    let total = 0
    for (var i=0; i<cartRows.length; i++) {
        var cartRow = cartRows [i]
        var priceElement = cartRow.getElementsByClassName('price-in-cart')[0]
        var quantityElement = cartRow.getElementsByClassName ('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('рублей',''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    document.getElementsByClassName ('total-price')[0].innerText = total + ' рублей'
}

    let cartItemContainer = document.getElementsByClassName('prods-in-cart')[0]
    let cartRows = cartItemContainer.getElementsByClassName('s-prod-in-cart')
    let plusOne = document.getElementsByClassName('plus')
    let minusOne = document.getElementsByClassName('minus')

    for (var i=0; i<cartRows.length; i++) {
        let buttonMinus = minusOne[i]
        let buttonPlus = plusOne [i]
        var cartRow = cartRows [i]
        var inputQuantity = document.getElementsByClassName('cart-quantity-input')
        buttonMinus.addEventListener("click", updateQuantity)
        
        function updateQuantity (event) {
            var buttonClickedMinus = event.target
            var quantityClicked = buttonClickedMinus.parentElement.parentElement


            condole.log(inputQuantity)
            console.log(buttonClickedMinus)
            console.log(quantityClicked)
        }
        
    }

