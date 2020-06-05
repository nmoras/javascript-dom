let arr = [20, 30, 40, 50, 60]

function reduceFn(array){
    return array.reduce( (acc, curr) => acc + curr);
};

console.log('the sum is', reduceFn(arr));

