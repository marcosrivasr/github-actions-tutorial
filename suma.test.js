const suma = require('./suma');

test('2 + 5 = 7', () =>{
    expect(suma(2,5)).toBe(7);
});

test('a + 5 = NaN', () =>{
    expect(suma('a',5)).toBe(NaN);
});

test('10 + 5 = 15', () =>{
    expect(suma(10,5)).toBe(15);
});


