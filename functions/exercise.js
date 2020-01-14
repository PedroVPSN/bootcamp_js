let car = {
    colour: "black",
    brand: "toyota",
    model: "yaris",
    year: 2019
}

let dealer = function (newCar) {
    return{
        stock: `${newCar.brand} ${newCar.model}`,
        available: `${newCar.brand} ${newCar.colour} ${newCar.year}`
    }
}

let dealerSummary = dealer(car)
let dealerAvai = dealer(car)

console.log(dealerSummary.stock)
console.log(dealerAvai.available)