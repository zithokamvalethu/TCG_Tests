

var items = ['kamva', 'lethu', 'vuyo', 'lethu'];
function getTotal(array, names){

   const multiplesList = array.filter(element => element === names)
     return multiplesList.length
}
console.log(getTotal(items,"lethu"));



function getTotal(array, names) {
    var total=0
    for (let i in array) {
        if (array[i] === names) {
         total += 1   
        }

    }
    return total
}
console.log(getTotal(items, "lethu"));







