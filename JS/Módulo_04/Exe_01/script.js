let checaIdade = function (idade) {
  return new Promise(function (resolve, reject) {
    if (idade > 18) {
      resolve(setTimeout(function () {
        console.log("Maior que 18")
      }, 2000))
    } else {
      reject(setTimeout(function () {
        console.log("Menor que 18")
      }, 2000))
    }
  })
}

checaIdade(20)
  .then(function (response) {
    console.log(response)
  })
  .catch(function (error) {
    console.log(error)
  })