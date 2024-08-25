let textInput = document.querySelector("#input-texto")
let outPut = document.querySelector("output")
function criptografar() {
    let texto = textInput.value

    let resulCripto = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/u/g, 'ufat')

    document.getElementById('output').innerHTML = '<textarea readonly id = "input-texto">' + resulCripto + '</textarea>' + '<button class = "btn-copiar" id= "copiar" onclick= "copiar()">copiar</button>'
}

function descriptografar() {
    let texto = textInput.value

    let resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u")

    document.getElementById('output').innerHTML = '<textarea readonly id = "input-texto">' + resultDescripto + '</textarea>' + '<button class = "btn-copiar" id= "copiar" onclick= "copiar()">copiar</button>'
}
function copiar() {
    let textCop = document.getElementById('input-texto')

    textCop.select()
    document.execCommand('copy')
    alert('Texto Copiado')
}