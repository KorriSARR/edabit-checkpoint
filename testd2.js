
function oddishOrEvenish(num) {
    var sum = 0;
    for (var i of String(num)) {
        sum += Number(i);
    }
    if(sum % 2 === 0){
        return "evenish"
    }else{
        return "oddish"
    }
}

function transformNumtoListOfNum(num) {
    return Array.from(String(num), Number);
}

const numero = 373;
const listoddEve = transformNumtoListOfNum(numero);
const oddEve = oddishOrEvenish(numero); 

console.log(oddEve);
