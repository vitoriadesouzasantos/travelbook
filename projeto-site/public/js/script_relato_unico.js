var relato_unico = JSON.parse(sessionStorage.getItem('relato_session'));
console.log(relato_unico);

var imagem_relato = document.getElementById('img_relato');
var titulo_relato = document.getElementById('h2_relato');
var relato_texto = document.getElementById('texto_relato');
for (var contador = 0; contador <= relato_unico.length; contador++) {
    titulo_relato.innerHTML = relato_unico[contador]['titulo'];
    relato_texto.innerHTML = relato_unico[contador]['texto'];
    imagem_relato.src = relato_unico[contador]['imagem'];
}