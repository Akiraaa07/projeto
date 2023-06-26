function toggleMode() {
  console.log("salve")
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.getElementById("salve")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.src = "./assets/avatar-light.png"
  } else {
    console.log("salve")
    // se tiver sem light mode, manter a imagem normal
    img.src = "./assets/avatar.png"
  }
}
