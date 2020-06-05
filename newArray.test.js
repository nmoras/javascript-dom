const newArray = require('./newArray');


test('mapNewFn function exists', () =>{
    expect(newArray.mapNewFn).toBeDefined();
});

test('use map to multiply array by 2', () =>{
    
   let numbers = [1, 2, 3, 4, 5];
   let result = [2, 4, 6, 8, 10]

    expect(newArray.mapNewFn(numbers)).toEqual(result)
});
