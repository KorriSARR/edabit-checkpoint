//true, true, false, true, false

function countTrue(arr) {
    var count=0
    for(var i in arr){
      if(arr[i]===true){
        count++
      }
    }	
    return count
 }
 
 const mots = [true, true, false, true, false]
 const lesMots= countTrue(mots)
 
 console.log(lesMots)
