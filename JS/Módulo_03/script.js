let list = document.querySelector("#app ul")
let input = document.querySelector("#app input")
let btn = document.querySelector("#app button")
btn.setAttribute("onkeypress", "enter()")

let todos = JSON.parse(localStorage.getItem("list_todos")) || []

function renderTodos() {
  list.innerHTML = ""
  for (todo of todos) {
    let todoElement = document.createElement("li")
    let todoTxt = document.createTextNode(todo)

    let del = document.createElement("a")
    del.setAttribute("href", "#")
    del.setAttribute("id", "del")

    var pos = todos.indexOf(todo)
    del.setAttribute("onclick", `deleteTodo(${pos})`)
    
    let delTxt = document.createTextNode("Excluir")
    
    del.appendChild(delTxt)
    todoElement.appendChild(todoTxt)
    todoElement.appendChild(del)
    list.appendChild(todoElement)
  }
}
renderTodos()

function addTodos() {
  let addTxt = input.value;

  if (input.value.length == 0) {
    alert("Digite um To Do antes de adcionar.")
  } else {
    todos.push(addTxt)
    input.value = ""
    renderTodos();
    saveToStorage();
  }
  input.focus()
}

function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('list_todos', JSON.stringify(todos))
}

function enter() {
  let tecla = event.keyCode;

  if (tecla === 13) {
    addTodos();
  }
}
document.addEventListener("keypress", enter)