//const || Let || 

const bt = document.querySelector("#enviar")

bt.addEventListener("click", function(e){

    //Não deixar atualizar o formulário || Página
    e.preventDefault()
    const numero = document.querySelector('#numero')
    const valor = numero.value
    console.log(valor)
    let resposta = document.querySelector("#resp").innerHTML = valor
})

