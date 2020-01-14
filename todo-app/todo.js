const todos = [{
    text: "Study",
    completed: true
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

const filter = {
    searchText: " "
}

const redenTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })
    

    document.querySelector("#todos").innerHTML = " "

    const summary = document.createElement("h2")
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector("#todos").appendChild(summary)
    
    filteredTodos.forEach(function(todo){
        const p = document.createElement("p")
        p.textContent = todo.text
        document.querySelector("#todos").appendChild(p)
    })
}

redenTodos(todos, filters)

// Listen for new todo creation
document.querySelector("#add-todo").addEventListener("click", function (e) {
    console.log("Add a new to do")
})

document.querySelector("#new-todo-text").addEventListener("input", function (e) {
    console.log(e.target.value)
    redenTodos(todos, filters)
})

document.querySelector("#search-text").addEventListener("input", function (e) {
    filter.searchText = e.target.value
})