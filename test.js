const { fromEuroToDollar, fromDollarToYen,  fromYenToPound } = require('./app.js');
test("One euro should be 1.206 dollars", function(){
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})
test("One dollar should be 153.48 yens", function(){
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(3)).toBe(460.44); //1 dolar son 153.48 yenes, entonces 3.5 dólares deberian ser = (3.5 * 153.48)
})
test("One yen should be 0.006724 GBP", function(){
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(5000)).toBe(31.27); //1 yen son 0.0062548866301798 libras, entonces 5000 yenes deberian ser = (5000 / 0.0062548866301798)
})