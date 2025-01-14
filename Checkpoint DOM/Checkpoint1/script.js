

// Sélectionner tous les éléments nécessaires
let plus = document.querySelectorAll('.fa-plus-circle');
let moins = document.querySelectorAll('.fa-minus-circle');
let quantity = document.querySelectorAll('.quantity');
let total = document.querySelectorAll('.total');
let price = document.querySelectorAll('.unit-price');
let totalPrice = document.querySelector('.total-price .total');
let supprime = document.querySelectorAll ('.fa-trash-alt');
let like = document.querySelectorAll ('.fa-heart');

// Fonction de mise à jour du total global
function misAjourTotal() {
    let totalGlobal = 0;

    quantity.forEach((element, index) => {
        let currentQuantity = parseInt(element.innerText);
        let unitPrice = parseInt(price[index].innerText.replace(' $', '')); 
        let productTotal = currentQuantity * unitPrice;
        
        let productTotalElement = total[index]; 
        if (productTotalElement) {
            productTotalElement.innerText = productTotal + " $"; 
        }

        totalGlobal += productTotal;
    });

    totalPrice.innerText = totalGlobal + " $";
}
// Action sur le bouton plus
plus.forEach((element, index) => {
    element.addEventListener('click', function() {
        let currentQuantity = parseInt(quantity[index].innerText); 
        currentQuantity += 1; 
        quantity[index].innerText = currentQuantity; 

        misAjourTotal();
    });
});

// Action sur le bouton moins
moins.forEach((element, index) => {
    element.addEventListener('click', function() {
        let currentQuantity = parseInt(quantity[index].innerText);

        if (currentQuantity > 0) {
            currentQuantity -= 1;
        }

        quantity[index].innerText = currentQuantity;

        misAjourTotal();
    });
});

// Bouton supprimer
supprime.forEach((element, index) => {
    element.addEventListener('click', function(){
        let currentQuantity = parseInt(quantity[index].innerText);
        currentQuantity = 0 ;
        quantity[index].innerText = currentQuantity ;

        misAjourTotal();
    })
})

// Bouton like
like.forEach((element, index) => {
    element.addEventListener('click', function(){
        element.classList.toggle('liked');
    })
})