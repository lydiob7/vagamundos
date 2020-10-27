const $canvas = document.querySelector('#canvas')
const ctx = $canvas.getContext('2d')

const $card = document.querySelector('#card')
const $country = document.querySelector('#country')
const $buttonsLevel1 = document.querySelector('#buttons-level1')
const $answer = document.querySelectorAll('.answer-level1')
const $buttonsLevel2 = document.querySelector('#buttons-level2')
const $answerLevel2 = document.querySelectorAll('.answer-level2')
const $hearts = document.querySelectorAll('#lives img')
const $arrowNext = document.querySelector('#arrow-next')
const $nextQuestion = document.querySelector('#next-question')
const $gameOver = document.querySelector('#game-over')

var $button = document.querySelector('#startbutton')
var $cover = document.querySelector('.container-cover')
var $rules = document.querySelector('.container-rules')
$button.onclick = changeSection

function changeSection() {
    $cover.style.display = 'none'
}
console.log('Hola')