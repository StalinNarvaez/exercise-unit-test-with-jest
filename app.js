// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
function fromDollarToYen(dollar){
    return Yen= oneEuroIs.USD*(dollar)*127.9
}
function fromEuroToDollar(euro){
    return dolar= euro*1.2
}
function fromYenToPound(yen){
    return libraEsterlina= (((yen*oneEuroIs.GBP)/oneEuroIs.JPY).toFixed(2))*1
}
module.exports = { fromEuroToDollar, fromDollarToYen,  fromYenToPound };
