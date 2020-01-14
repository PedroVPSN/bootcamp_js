let myBook = {
    title: "1984",
    author: "George Orwell",
    pageCount: 326
}

let otherBook = {
    title: "A Pleople History",
    author: "Haward Zinn",
    pageCount: 723
}

let getSummary = function (book) {
   return {
       summary: `${book.title} by ${book.author}`,
       pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
   }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)
console.log(otherBookSummary.summary)

// challenge area

// create a function - take fahrenheit in - return object with all three

let convertFah = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32) * (5/9),
        kelvin: (fahrenheit + 459.67) * (5/9)
    }
}

let temps = convertFah(32)

console.log(temps)
