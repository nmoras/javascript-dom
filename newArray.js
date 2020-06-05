
let num = [1, 2, 3, 4, 5]

//multiply the array by 2
num.map( el => el = el*2 )
//[2, 4, 6, 8, 10] 
//console.log(num) [1, 2, 3, 4, 5]

function mapFn(array){
    return array.map( el => el = el*2)
}
mapFn(num);
//[2, 4, 6, 8, 10]

const mapNewFn = array => array.map( el => el = el*2 )
mapNewFn(num)
//[2, 4, 6, 8, 10]

module.exports = {mapFn, mapNewFn};