// Undefined for variables 

let name = "Jen"

//console.log(name)

if (name === undefined) {
    console.log("Please provide a name")
}
else{
    console.log(name)
}

// undefined for function arguments
// undefined as functions return default value

let square = function(num) {
    console.log(num)
}

let result = square(3)
console.log(result)

// Null as assigned value

let age = 27

age = null

console.log(age)