let lista = document.getElementById("list")
let nomes = ["Diego", "Gabriel", "Lucas"]


let listaNomes = document.createElement("p")
let txtLista = document.createTextNode("")

listaNomes.appendChild(txtLista)
lista.appendChild(listaNomes)

listaNomes.innerHTML = `<p><li>${nomes[0]}</li></p>`
listaNomes.innerHTML += `<p><li>${nomes[1]}</li></p>`
listaNomes.innerHTML += `<p><li>${nomes[2]}</li></p>`