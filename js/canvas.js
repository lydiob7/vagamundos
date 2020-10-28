// All the elements from the HTML to be used in the game

const $canvas = document.querySelector('#canvas')
const ctx = $canvas.getContext('2d')

const $body = document.querySelector('body')
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

const $card = document.querySelector('#card')
const $country = document.querySelector('#country')
const $buttonsLevel1 = document.querySelector('#buttons-level1')
const $answer = document.querySelectorAll('.answer-level1')
const $buttonsLevel2 = document.querySelector('#buttons-level2')
const $answerLevel2 = document.querySelectorAll('.answer-level2')
const $hearts = document.querySelectorAll('#lives img')
const $arrowNext = document.querySelector('#arrow-next')
const $nextQuestion = document.querySelector('#next-question')
const $reloj = document.querySelector('#reloj')
const $timeLeft = document.querySelector('#reloj h3')
const $level = document.querySelector('#nivel span')
const $gameOver = document.querySelector('#game-over')
const $tryAgain = document.querySelector('#try-again')