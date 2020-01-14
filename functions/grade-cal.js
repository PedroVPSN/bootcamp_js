// Project - Student Grade Calculator
// Student score, total possible score
// 15/20 --> You got a C (75%)!
// A 90 - 100, B 80 - 89, C 70 - 79, D 60 - 69, F 0 - 59

let gradeCalc = function (score, totalScore){
    let percent = (score / totalScore) * 100
    let letterGrade = " "

    if (percent >= 90){
        letterGrade = "A"
    }
    else if (percent >= 80) {
        letterGrade = "B"
    }
    else if (percent >= 70) {
        letterGrade = "C"
    }
    else if (percent >= 60) {
        letterGrade = "D"
    }
    else {
        letterGrade = "F"
    } 

    return `You got a ${letterGrade} (${percent}%)`
}

let result = gradeCalc(17, 20)
console.log(result)


/*let totalScore = 20

if (studentScore >= 90 && studentScore <= 100) {
    percScore = (studentScore/totalScore) * 100
    studentScore = "A"
    console.log(`You got grade ${studentScore}`)
}
else if (studentScore >= 80 && studentScore <= 89) {
    studentScore = "B"
    console.log(`You got grade ${studentScore}`)
}
else if (studentScore >= 70 && studentScore <= 79) {
    studentScore = "C"
    console.log(`You got grade ${studentScore}`)
}
else if (studentScore >= 60 && studentScore <= 69) {
    studentScore = "D"
    console.log(`You got grade ${studentScore}`)
}
else {
    console.log("You got grade F")
}
*/