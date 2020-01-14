// Multiple arguments
let add = function(a, b) {
    return a + b
}
let result = add(10, 1)
    console.log(result)

// Default arguments
let getScoreText = function(name = "Anonymous", score = 0) {
    //return "Name: " + name + " - Score: " + score
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 99)
    console.log(scoreText)

let getTip = function(total, tip = .2) {
    let percent = tip * 100
    let tipPercent = total * tip
    return `A ${percent}% on $${total} would be $${tipPercent}`
}

let tipPercent = getTip(40, .2)
    console.log(tipPercent)

    // this is a new comment
    // this is 