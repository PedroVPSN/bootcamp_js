let myBook = {
    title: "1984", 
    author: "Geoge Orwell",
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = "Animal Farm"

console.log(`${myBook.title} by ${myBook.author}`)

// Challenge area
// Create Object
// name, age, location
// increase age by 1 and print the message again

let myInfo = {
    name: "Pedro",
    age: 33,
    location: "Sale"
}

console.log(`${myInfo.name}, ${myInfo.age} from ${myInfo.location}.`)

myInfo.age = myInfo.age +1

console.log(`${myInfo.name}, ${myInfo.age} from ${myInfo.location}.`)
