
// total = document.getElementById("output").value

// CALCULATE
document.getElementById("equals").addEventListener('click', function() {
    let total = document.getElementById("output").innerHTML;
    let calculate = eval(total)
    document.getElementById("output").innerText = calculate
})

// CLEAR
document.getElementById("clear").addEventListener('click', function() {
    document.getElementById("output").innerText = " "
})


// NUMBERS
document.getElementById("1").addEventListener('click', function() {
    document.getElementById("output").innerText += "1"
})

document.getElementById("2").addEventListener('click', function() {
    document.getElementById("output").innerText += "2"
})

document.getElementById("3").addEventListener('click', function() {
    document.getElementById("output").innerText += "3"
})

document.getElementById("4").addEventListener('click', function() {
    document.getElementById("output").innerText += "4"
})

document.getElementById("5").addEventListener('click', function() {
    document.getElementById("output").innerText += "5"
})

document.getElementById("6").addEventListener('click', function() {
    document.getElementById("output").innerText += "6"
})

document.getElementById("7").addEventListener('click', function() {
    document.getElementById("output").innerText += "7"
})

document.getElementById("8").addEventListener('click', function() {
    document.getElementById("output").innerText += "8"
})

document.getElementById("9").addEventListener('click', function() {
    document.getElementById("output").innerText += "9"
})

document.getElementById("0").addEventListener('click', function() {
    document.getElementById("output").innerText += "0"
})

//OPERATORS


document.getElementById("+").addEventListener('click', function() {
    document.getElementById("output").innerText += "+"
})

document.getElementById("minus").addEventListener('click', function() {
    document.getElementById("output").innerText += "-"
})

document.getElementById("multiply").addEventListener('click', function() {
    document.getElementById("output").innerText += "*"
})

document.getElementById("divide").addEventListener('click', function() {
    document.getElementById("output").innerText += "/"
})

document.getElementById("decimel").addEventListener('click', function() {
    document.getElementById("output").innerText += "."
})

// document.getElementById("percent").addEventListener('click', function() {
//     document.getElementById("output").innerText += "%"
// })







// function className (){

//     let x = document.getElementsByClassName("new").addEventListener('click', )
//     document.getElementById("output").innerHTML += x
//     console.log("x")
// }

// className()
// funtion addToCalc(event) {
//     let numbers = querySelector(#numbers)

// }

// document.querySelector(#display-total).addEventListener('click', addToCalc)




// function addNewTodo (event) {
//     let todoField = q('#new-todo-field')
//     let newTodo = todoField.value
//     let todoList = q('#todo-list')
//     let newListItem = document.createElement('li')
//     newListItem.classList.add('todo')
//     newListItem.innerText = newTodo
   
    
//     todoField.value = ''
//   }