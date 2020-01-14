// Lexical Scope (Static scope)
// Global Scope - Defined outside of all code blocks
// Local Scope - Defined inside a code block

// In a scope you can acess variables defined in that scope, or in a parent/ancestor scope

//Global scope (varOne)
  // Local scope (varTwo)
    // Local scope (varFour)
 // Local scope (varThree)


let varOne = "varOne"

if (true) {
    console.log(varOne)
    let varTwo = "varTwo"
    console.log(varTwo)

    if (true) {
        let varFour = "varFour"
        
    }
}

if (true) {
    let varThree = "varThree"
}

console.log(varTwo)