let intervalId
let frames = 0
let keys = []
let intervalLevel
let countries = [{
    name: 'canada',
    capital: 'ottawa',
    wrongAnswers: ['montreal', 'toronto']
}, {
    name: 'united states',
    capital: 'washington dc',
    wrongAnswers: ['new york', 'chicago']
}, {
    name: 'mexico',
    capital: 'mexico df',
    wrongAnswers: ['guadalajara', 'oaxaca']
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