function criar() {
  let sec1 = document.getElementById("sec")
  
  
  let cubo = document.createElement("div")
  cubo.setAttribute("id", "quadrado")
  sec1.appendChild(cubo)

  cubo.onmouseenter = function () {
    cubo.style.backgroundColor = getRandomColor()
  }
  cubo.onmouseout = function () {
    cubo.style.backgroundColor = "red"
  }

  let container = document.querySelector('#app')
  container.appendChild(cubo)
}
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}