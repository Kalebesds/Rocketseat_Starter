let list = document.getElementById("ul")

var addUsername = function () {
  
  var username = document.getElementById("added")
  var nome = document.getElementById("nome")
  
  //kalebesds
  if (username.value.length == 0) {
    alert("[ERRO] Username inválido")
  } else {
    list.innerHTML = "Carregando..."
    nome.innerHTML = `<p>${username.value}</p>`
    axios.get(`https://api.github.com/users/${username.value}/repos`)
      .then(function (response) {
        list.innerHTML = ""
        for (users of response.data) {
        list.innerHTML += `<li>${users.name}</li>`  
      }
    })
      .catch(function (error) {
        if (error) {
          alert("[ERRO 404] Usuário não encontrado.")
        }
        console.log(error.status)
    })
  }
  username.value = ""
  username.focus()
}
    







function enter() {
  let tecla = event.keyCode;

  if (tecla === 13) {
    addUsername();
  }
}
document.addEventListener("keypress", enter)

