var fila = []

const add = document.querySelector('#add')
const rm = document.querySelector('rm')

add.addEventListener("click", function(e){

    e.preventDefault()
    dado = document.querySelector('#numero').value
    fila.push(dado)
    console.log(fila)
    document.querySelector('#resp').innerHTML = fila
    return false
})

