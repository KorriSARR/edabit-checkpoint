
function sevenBoom(arr, check){
    var nombreEnChaine = check.toString()
    return arr.filter(nombre => nombre.toString().includes(nombreEnChaine));

}

const liste = [22, 26, 57, 58, 98, 1, 7]
const check = 7;
const find = sevenBoom(liste, check);

if(find.length > 0){
    console.log(`Boom [${find}] contain the number ${check} .`)
}else {
    console.log(`there is no ${check} in the array.`);
}




