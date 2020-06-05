const { reduceFn } = import( './functions' )

test('reduceFn function exists', () =>{
    expect(reduceFn).toBeDefined();
});

test('reducer fucntion gives the sum of the array', () =>{
    let arr = [30, 30, 40];
    let sum = 100

    expect( reduceFn(arr) ).toEqual(sum);
});