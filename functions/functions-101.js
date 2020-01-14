// Function - input (argument), code, output (return value)
/*
let greetUser = function () {
    console.log("Welcome user!")
}

greetUser()
greetUser()
greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)

// Challenge Area

// ConvertFahrenheitToCelsius
let fahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * (5/9)
    return celsius
}

let temp1 = fahrenheitToCelsius(32)
let temp2 = fahrenheitToCelsius(0) 

console.log(temp1)
console.log(temp2)
// Print the convert value
*/
// Convert stone to kg

let stoneToKg = function (kilograms) {
    let stone = (kilograms * 1) * (6.35029318/1)
    return stone
}

let weight = stoneToKg(1)

console.log(weight)

let kgToStone = function (stones) {
    let kg = (stones * 1) * (1/6.35029318)
    return kg
}

let peso = kgToStone(1)

console.log(peso)