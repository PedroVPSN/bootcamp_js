/*let temp = 28

// Logical (&&)AND operator - True if both sides are true. False otherwise.
// Logical (||)OR operator - True if atleast one side is true. false otherwise.

if(temp >= 1 && temp <=10) {
    console.log("It is cold outside!")
}
else if(temp <= 0 || temp >= 28){
    console.log("Do not go outside!")
}
else{
    console.log("Well, do what you want!")
}
*/

// Challenge area
// Are both vegan? Only offer up vegan dishes.
// At least one vegan? Make sure to offer up some vegan options.
// Else, offer up anything on the menu.

let isGuestOneVegan = true
let isGuestTwoVegan = true

if(isGuestOneVegan && isGuestTwoVegan) {
    console.log("Please, have a look on our vegan menu.")
}
else if(isGuestOneVegan || isGuestTwoVegan){
    console.log("Please, have a look on our menu.")
}
else{
    console.log("Please, have a look on our mix menu.")
}