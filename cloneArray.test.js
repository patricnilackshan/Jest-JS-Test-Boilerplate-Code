const cloneArray = require('./cloneArray');

test("Testing Clone Array Function",()=>{
    const array = [1,2,3];
    expect(cloneArray(array)).toEqual(array);
    expect(cloneArray(array)).not.toBe(array);
})