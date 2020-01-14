// create an array with five todos √
// you have x todos √
// print the first and second to last items -> todo: walk the dog √

// delete the 3rd item √
// add a new item onto the end √
// remove the first item from the list √

// 1. convert arrays to arrays of objects --> text, completed
// 2. creat function to remove a todo by text value

const todos = [{
    text: "Study",
    completed: false
}, {
    text: "Work",
    completed: true
}, {
    text: "Clean the car",
    completed: true
}, {
    text: "Play video games",
    completed: false
}, {
    text: "Watch a movie",
    completed: false
}]

/*
const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function(todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)
    }

}

deleteTodo(todos, "work")
//console.log(todos)

const getThingsTodo = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed
    })

}

console.log(getThingsTodo(todos))
*/

const sortTodos = function (todos) {
    todos.sort(function(a, b) {
        if (!a.completed && b.completed){
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)