const $button = document.querySelector(`#startbutton`)
const $cover = document.querySelector(`.container-cover`)
const $secondButton = document.querySelector(`#secondbutton`)
const $rules = document.querySelector(`.container-rules`)
const $instructionsButton = document.querySelector('#instructionsbutton')
const $thirdButton = document.querySelector(`#thirdbutton`)
const $players = document.querySelector(`.container-characters`)
const $containerGame = document.querySelector(`#container-game`)
const texto = "Con una superficie de más de 43 316 000 km², es la segunda masa de tierra más grande del globo, cubriendo el 8 % de la superficie total del planeta y el 28,4 % de la tierra emergida, y además concentrando cerca del 12,5 % de la población humana. Debido a su gran tamaño y sus características geográficas, en algunas culturas, América se divide tradicionalmente en América del Norte, América Central, y América del Sur.";
const texto2 = `Inspirad@s en historias de aventurer@s, nuestr@s vagamund@s quieren recorrer el continente americano y finalizar su periplo en el "fin del mundo". ¿Te animas a ayudarl@s? Sólo necesitan saber las capitales.`
let timerMaquin


$button.onclick = changeSection

function changeSection() {
    $cover.style.display = `none`
    $rules.style.display = `flex`
    maquina("#maquina-de-escribir", texto, 50);
}

$instructionsButton.onclick = showInstructions

function showInstructions() {
    $instructionsButton.style.display = 'none'
    $secondButton.style.display = 'block'
    clearInterval(timerMaquina)
    maquina("#maquina-de-escribir", texto2, 50)
}

$secondButton.onclick = changeSection2

function changeSection2() {
    $rules.style.display = `none`
    $players.style.display = `flex`
}

$thirdButton.onclick = changeSection3

function changeSection3() {
    $players.style.display = `none`

}

function maquina(contenedor, texto, intervalo) {
    longitud = texto.length;
    cnt = document.querySelector(contenedor);
    cnt.innerHTML = ''
    var i = 0;
    timerMaquina = setInterval(function() {
        cnt.innerHTML = cnt.innerHTML.substr(0, cnt.innerHTML.length - 1) + texto.charAt(i) + "_";
        if (i >= longitud) {
            return clearInterval(timer);
            cnt.innerHTML = cnt.innerHTML.substr(0, longitud);
            return true;
        } else {
            i++;
        }
    }, intervalo);
};