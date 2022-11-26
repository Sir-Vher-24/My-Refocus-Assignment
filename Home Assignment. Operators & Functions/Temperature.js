function convertCelciusToKelvin(tempCelcius){
    let tempKelvin = (tempCelcius + 273.15);
    return tempKelvin;
}
function convertFahrenheitToKelvin2(tempFahrenheit){
    let tempKelvin = (tempFahrenheit + 459.67) * 5/9;
    return tempKelvin;
}
console.log(convertCelciusToKelvin(75))
console.log(convertFahrenheitToKelvin2(32))
