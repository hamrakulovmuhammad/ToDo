let arr = []


let body = document.body
let overviewBottom = document.querySelector('.overview-bottom')
let form = document.forms.register

console.log(overviewBottom);
console.log(form);

function generate(arr) {
    overviewBottom.innerHTML = ''

    for (let item of arr) {
        let todoList = document.createElement('div')
        let headingTodo = document.createElement('p')
        let textTodo = document.createElement('p')
        let deleteElem = document.createElement('h1')

        console.log(item);
        todoList.classList.add('todolist')
        headingTodo.classList.add('heading-todo')
        textTodo.classList.add('text-todo')
        deleteElem.classList.add('h1')

        headingTodo.innerHTML = item.heading
        textTodo.innerHTML = item.text
        deleteElem.innerHTML = 'x'

        body.append(todoList)
        todoList.append(headingTodo)
        todoList.append(textTodo)
        overviewBottom.append(todoList)
        todoList.append(deleteElem)
        deleteElem.onclick = () => {
            removeItem()
        }
    }


}



form.onsubmit = (event) => {
    event.preventDefault()
    let inputs = form.querySelectorAll('input')

    let obj = {}
    obj.id = Math.random()

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        obj[key] = value
        let today = new Date();
        let now = today.toLocaleString();
        console.log(now);
    })

    arr.push(obj)

    inputs.forEach(input => {
        input.value = ''

    })
    generate(arr)
}

function removeItem(id) {
    let finded = arr.filter((item) => item.id === id)[0]
    let a = arr.indexOf(finded)
    console.log(a);
    arr.splice(a, 1)

    generate(arr)
}