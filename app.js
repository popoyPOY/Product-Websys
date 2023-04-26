const Product = {
    "Laptop": {
        "stock": 10,
        "price": 52000.00
    }
}

let checkout = {
    "Product": {
        "Name": "Dell G5 15 5590 Laptop",
        "price": "",
        "quantity": "",
        "shippingFee": "",
        "total": ""
    }
}

const shippingFee = 50

let price = document.getElementById("price")

let quantity = 0

let Addbutton = document.getElementById("addButton")
let quantityP = document.getElementById("valueQuantity")
let subtractButton = document.getElementById("subtractButton")

let subTotal = document.getElementById("subtotal")
let itemQuantity = document.getElementById("quantity")
let shipping = document.getElementById("shippingFee")
let total = document.getElementById("total")

let productPrice = Product.Laptop.price
let stock = Product.Laptop.stock

function Add() {
        quantity = quantity + 1
        quantityP.innerText = quantity
        itemQuantity.innerText = "Quantity: " + quantity
    

        subTotal.innerText = "Subtotal: " + Product.Laptop.price
    
        shipping.innerText = "Shipping Fee: " + shippingFee
        total.innerText = "Total: " + productPrice * quantity 
    
        if (quantity == stock) {
            alert("We can't add anymore")
            Addbutton.disabled = true
        }
    
        subtractButton.disabled = false
}

function Subtract() {
    quantity -= 1
    quantityP.innerText = quantity

    itemQuantity.innerText = "Quantity: " + quantity
    

    subTotal.innerText = "Subtotal: " + Product.Laptop.price

    shipping.innerText = "Shipping Fee: " + shippingFee
    total.innerText = "Total: " + productPrice * quantity 


    if (quantity == 0) {
        subtractButton.disabled = true
        subTotal.innerText = "Subtotal: 0"
        shipping.innerText = "Shipping Fee: 0"
    }
    Addbutton.disabled = false

}


function Buy() {
    window.location.href = "/buy.html"
}

let h2 = document.getElementById("thankyou")
let checkoutBUtton = document.getElementById("checkoutBtn")

let box = document.getElementById("box")

let image = document.getElementById("image")

function Checkout() {

    if (quantity == 0){
        alert("You can't checkout without a product")
    }
    else {
    
    checkout.Product.price = subTotal.innerText
    checkout.Product.quantity = itemQuantity.innerText
    checkout.Product.shippingFee = shippingFee
    checkout.Product.total = total.innerText

    document.getElementById("idx").remove()

    image.style.height = "450px"
    image.style.width = "500px"
    image.style.opacity = "1"

    checkoutBUtton.remove()
    h2.innerText = "Thank you"
    }


}
