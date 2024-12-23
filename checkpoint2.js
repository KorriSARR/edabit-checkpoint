// Reverse a string
function reverseString(str){
  var reversed = "";
    for( var i=str.length-1; i>=0; i--){
        reversed+= str[i]
    }
    return reversed;
} 

const mot = "abcde"
const solu = reverseString(mot)
console.log(solu)

// count Characters
function countCharacters(char){
    var count = 0
    for(var i in char){
        count++
    }
    return count
}

const mot = "gomycode"
const solu = countCharacters(mot)
console.log(solu) 


// capitalize Words

function capitalizeWords(wrd){
    var words = wrd.split(" ");
    for(var i=0; i<words.length; i++){
        words[i]= words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}

const phrase = "je suis le meilleur"
const solu = capitalizeWords(phrase)
console.log(solu) 

// Find max and min

function maxMin(arr){
    var max= arr[0]
    var min= arr[0]
    for(var i of arr){
        if(i>max) max = i;
        if(i<min) min = i;
        }
        return [max, min]
    }


const listeNombre = [1, 2, 3, 15, 4, 5]
const resultat = maxMin(listeNombre)
console.log(resultat) 

//sum of array

function sumOfArray(arr){
    var sum= 0
    for(var i of arr){
        sum= sum + i
    }
    return sum;
}

const listeNombre = [1, 2, 3, 4, 5]
const somme= sumOfArray(listeNombre)
console.log(somme) 


//Filter of Array

function filterArray(arr){

} 

// factorial

function factorial(x){
    if(x != 0){
        return x * factorial(x-1)
    } else{
        return 1
    }
}

const nombre = 0
const solution = factorial(nombre)
console.log(solution)  


// prime number check



