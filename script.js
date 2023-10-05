function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //if(html.classList.contains('light')) {
  // html.classList.remove('light')
  //} else {
  //  html.classList.add('light')
  //}

  // Pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  // se tiver light mode, adicionar a imagem light
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Avatar-light.png")
    // se não, manter a imagem normal
  } else {
    img.setAttribute("src", "./assets/Avatar1.png")
  }
}
