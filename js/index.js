let intervalId
let frames = 0
let keys = []
let intervalLevel
let countries = [{
    name: 'Canadá',
    capital: 'Ottawa',
    wrongAnswers: ['Montreal', 'Toronto'],
    x: -400,
    y: 0
}, {
    name: 'Estados Unidos',
    capital: 'Washington DC',
    wrongAnswers: ['Nueva York', 'Chicago'],
    x: -400,
    y: -100
}, {
    name: 'México',
    capital: 'Ciudad de México',
    wrongAnswers: ['Guadalajara', 'Monterrey'],
    x: -80,
    y: -300
}, {
    name: 'Bélice',
    capital: 'Belmopán',
    wrongAnswers: ['Ciudad de Bélice', 'Corozal']
}, {
    name: 'costa rica',
    capital: 'San José',
    wrongAnswers: ['Alajuela', 'Cartago']
}, {
    name: 'El Salvador',
    capital: 'San Salvador',
    wrongAnswers: ['Ahuachapán', 'San Miguel']
}, {
    name: 'Guatemala',
    capital: 'Ciudad de Guatemala',
    wrongAnswers: ['Huehuetenango', 'Alta Verapaz']
}, {
    name: 'Honduras',
    capital: 'Tegucigalpa',
    wrongAnswers: ['San Pedro Sula', 'La Ceiba']
}, {
    name: 'Nicaragua',
    capital: 'Managua',
    wrongAnswers: ['León', 'Masaya']
}, {
    name: 'Panamá',
    capital: 'Ciudad de Panamá',
    wrongAnswers: ['Chitre', 'Las Tablas']
}]
let countriesGuessed = []
let lives = 5
const background = new Map()
let card
const $card = document.querySelector('#card')
const $country = document.querySelector('#country')
const $answer = document.querySelectorAll('.answer')
let imgTraveller1 = '../images/traveller1.png'
const traveller = new Traveller(imgTraveller1)

function update() {
    frames += 1
    checkKeys()
    clearCanvas()
    background.draw()
    traveller.draw()
}

function clearCanvas() {
    ctx.fillRect(0, 0, $canvas.width, $canvas.height)
}

function start() {
    if (intervalId) return
    intervalId = setInterval(update, 1000 / 60)
}

function next() {
    if (intervalLevel) return
    intervalLevel = setInterval(nextCountry, 1000 / 60)
    card.hide()
}

function nextCountry() {
    checkNextLevel()
}

function newCard(country) {
    card = new Card(country)
    card.show()
}

function looseLife() {
    lives -= 1
}

newCard(countries[0])

window.onload = start