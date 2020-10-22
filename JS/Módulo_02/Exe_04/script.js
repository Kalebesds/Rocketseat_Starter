let lista = document.getElementById("list")
let nomes = ["Diego", "Gabriel", "Lucas"]

let listaNomes = document.createElement("p")
let txtLista = document.createTextNode("")

listaNomes.appendChild(txtLista)
lista.appendChild(listaNomes)

listaNomes.innerHTML = `<p><li>${nomes[0]}</li></p>`
listaNomes.innerHTML += `<p><li>${nomes[1]}</li></p>`
listaNomes.innerHTML += `<p><li>${nomes[2]}</li></p>`

function inLista(t, l) {
  if (l.indexOf(t) !== -1)
    return true
}

function adicionar() {
  let add = document.getElementById("add")
  
  if (add.value.length == 0 || inLista(add.value, nomes)) {
    alert("[ERRO] Nenhum nome adicionado ou nome já encontrado na lista.")
  } else {
    nomes.push(add.value)
    let tam = nomes.length
    let last = tam - 1
    
    listaNomes.innerHTML += `<p><li>${nomes[last]}</li></p>`
  }
  add.value = ""
  add.focus()
}
