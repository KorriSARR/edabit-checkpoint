//99038475783957593

function num_of_digits(num){
    var nombreEnChaine = num.toString();  
    return nombreEnChaine.length;
}


const lot = 99038475783957593;
const decimal = num_of_digits(lot);
console.log(decimal);