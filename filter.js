// let newArray = arr.filter(callback(element[, index, [array]])[, thisArg])

let arr = [ 2, 3, 4, 5, 6];

let newArr = arr.filter( el => el = el%2 == 0 )
//newArr [2, 4, 6]
//arr [ 2, 3, 4, 5, 6];

function filterArr(array){
    let newArr = array.filter( el => el = el%2 == 0 )
    return newArr
}
filterArr(arr) //[2, 4, 6]

const newFilterArr = array => {
    let newArr = array.filter(el => el = el % 2 == 0)
    return newArr
}
newFilterArr(arr) // [2, 4, 6]   
    
