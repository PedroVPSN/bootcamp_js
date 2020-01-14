const notes = ["Note 1", "Note 2", "Note 3"]


// console.log(notes.pop())
// notes.push("new note 3")
// console.log(notes.shift())
// notes.unshift("new note 1")
//notes.splice(3, 0, "first item")
//console.log(notes)
// //console.log(notes)
// //console.log(notes.pop())
// //console.log(notes.pop())

for (let i = 0; i < notes.length; i++) {
    console.log(notes[i])
}

for (let i = notes.length -1; i >= 0; i--) {
    console.log(notes[i])

}

/*const notes = [{
    title: "My next trip",
    body: "I would like to go to spain"
},{
    title: "Habbits to work on",
    body: "Exercise. Eating a bit better"
},{
    title: "Office modification",
    body: "Get a new seat"
}]

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}
const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

console.log(findNotes(notes, "like"))

//const note = findNote (notes, "my next trip")
//console.log(note)

*/