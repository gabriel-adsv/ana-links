function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#change-img img")

  // substituir o ícone do skoob
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/icons/skoob-light.svg")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/icons/skoob.svg")
  }
}