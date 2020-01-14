let name = "  Pedro Silva  "


// length (property) 
console.log(name.length)

// convert to upper case (method)
console.log(name.toUpperCase())

// covert to lower case (method)

console.log(name.toLowerCase())

// incluedes (method)

let password = "123passwordasdf"
console.log(password.includes("password"))

// trim (method)

console.log(name.trim())

// challenge area
// isValidPassword
// length is more than 8 - and it doesnt contain the word password

let isValidPassword = function(password) {
    if (password > 8 && !password.includes("password")) {
        return true
    } else {
        return false
    }
    
}


console.log(isValidPassword("asdf"))
console.log(isValidPassword("asdf"))
console.log(isValidPassword("asdf"))