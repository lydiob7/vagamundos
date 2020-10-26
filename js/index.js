let intervalId
let intervalLevel
let frames = 0
let keys = []
let countriesGuessed = []
let locationTraveller = 'Canadá'
let nextDestination
let lives = 5
const background = new Map()
let card
let imgTraveller1 = '../images/traveller1.png'
const traveller = new Traveller(imgTraveller1)
let countries = [{
    name: 'Canadá',
    capital: 'Ottawa',
    wrongAnswers: ['Montreal', 'Toronto'],
    level: 1,
    x: -400,
    y: 0
}, {
    name: 'Estados Unidos',
    capital: 'Washington DC',
    wrongAnswers: ['Nueva York', 'Chicago'],
    level: 1,
    x: -400,
    y: -100
}, {
    name: 'México',
    capital: 'Ciudad de México',
    wrongAnswers: ['Guadalajara', 'Monterrey'],
    level: 1,
    x: -80,
    y: -300
}, {
    name: 'Bahamas',
    capital: 'Nasáu',
    wrongAnswers: ['Ciudad de Bélice', 'Corozal', 'Buenos Aires', 'Medellin', 'Santiago'],
    level: 2,
    x: -350,
    y: -300
}, {
    name: 'Cuba',
    capital: 'La Habana',
    wrongAnswers: ['Ciudad de Bélice', 'Corozal', 'Buenos Aires', 'Medellin', 'Santiago'],
    level: 2,
    x: -350,
    y: -300
}, {
    name: 'Jamaica',
    capital: 'Kingston',
    wrongAnswers: ['Ciudad de Bélice', 'Corozal', 'Buenos Aires', 'Medellin', 'Santiago'],
    level: 2,
    x: -350,
    y: -300
}, {
    name: 'Haití',
    capital: 'Puerto Príncipe',
    wrongAnswers: ['Ciudad de Bélice', 'Corozal', 'Buenos Aires', 'Medellin', 'Santiago'],
    level: 2,
    x: -350,
    y: -300
}, {
    name: 'República Dominicana',
    capital: 'Santo Domingo',
    wrongAnswers: ['Ciudad de Bélice', 'Corozal', 'Buenos Aires', 'Medellin', 'Santiago'],
    level: 2,
    x: -350,
    y: -300
}, {
    name: 'Puerto Rico',
    capital: 'San Juan',
    wrongAnswers: ['Ciudad de Bélice', 'Corozal', 'Buenos Aires', 'Medellin', 'Santiago'],
    level: 2,
    x: -350,
    y: -300
}, {
    name: 'Bélice',
    capital: 'Belmopán',
    wrongAnswers: ['Ciudad de Bélice', 'Corozal', 'Buenos Aires', 'Medellin', 'Santiago'],
    level: 2,
    x: -200,
    y: -370
}, {
    name: 'Costa Rica',
    capital: 'San José',
    wrongAnswers: ['Alajuela', 'Cartago', '', '', ''],
    level: 2,
    x: -80,
    y: -300
}, {
    name: 'El Salvador',
    capital: 'San Salvador',
    wrongAnswers: ['Ahuachapán', 'San Miguel', '', '', ''],
    level: 2,
    x: -80,
    y: -300
}, {
    name: 'Guatemala',
    capital: 'Ciudad de Guatemala',
    wrongAnswers: ['Huehuetenango', 'Alta Verapaz', '', '', ''],
    level: 2,
    x: -80,
    y: -300
}, {
    name: 'Honduras',
    capital: 'Tegucigalpa',
    wrongAnswers: ['San Pedro Sula', 'La Ceiba', '', '', ''],
    level: 2,
    x: -80,
    y: -300
}, {
    name: 'Nicaragua',
    capital: 'Managua',
    wrongAnswers: ['León', 'Masaya', '', '', ''],
    level: 2,
    x: -80,
    y: -300
}, {
    name: 'Panamá',
    capital: 'Ciudad de Panamá',
    wrongAnswers: ['Chitre', 'Las Tablas', '', '', ''],
    level: 2,
    x: -80,
    y: -300
}, {
    name: 'Colombia',
    capital: 'Bogotá',
    wrongAnswers: ['Montreal', 'Toronto'],
    level: 3,
    x: -400,
    y: 0
}, {
    name: 'Venezuela',
    capital: 'Caracas',
    wrongAnswers: ['Montreal', 'Toronto'],
    level: 3,
    x: -400,
    y: 0
}, {
    name: 'Guyana',
    capital: 'Georgetown',
    wrongAnswers: ['Montreal', 'Toronto'],
    level: 3,
    x: -400,
    y: 0
}, {
    name: 'Surinam',
    capital: 'Paramaribo',
    wrongAnswers: ['Montreal', 'Toronto'],
    level: 3,
    x: -400,
    y: 0
}, {
    name: 'Guyana francesa',
    capital: 'Cayena',
    wrongAnswers: ['Montreal', 'Toronto'],
    level: 3,
    x: -400,
    y: 0
}, {
    name: 'Brasil',
    capital: 'Brasilia',
    wrongAnswers: ['Montreal', 'Toronto'],
    level: 3,
    x: -400,
    y: 0
}, {
    name: 'Ecuador',
    capital: 'Quito',
    wrongAnswers: ['Montreal', 'Toronto'],
    level: 3,
    x: -400,
    y: 0
}, {
    name: 'Perú',
    capital: 'Lima',
    wrongAnswers: ['Montreal', 'Toronto'],
    level: 3,
    x: -400,
    y: 0
}, {
    name: 'Chile',
    capital: 'Santiago',
    wrongAnswers: ['Montreal', 'Toronto'],
    level: 3,
    x: -400,
    y: 0
}, {
    name: 'Bolivia',
    capital: 'La Paz',
    wrongAnswers: ['Montreal', 'Toronto'],
    level: 3,
    x: -400,
    y: 0
}, {
    name: 'Paraguay',
    capital: 'Asunción',
    wrongAnswers: ['Montreal', 'Toronto'],
    level: 3,
    x: -400,
    y: 0
}, {
    name: 'Uruguay',
    capital: 'Montevideo',
    wrongAnswers: ['Montreal', 'Toronto'],
    level: 3,
    x: -400,
    y: 0
}, {
    name: 'Argentina',
    capital: 'Buenos Aires',
    wrongAnswers: ['Montreal', 'Toronto'],
    level: 3,
    x: -400,
    y: 0
}, {
    name: 'Fin del mundo',
    capital: 'Ushuaia',
    wrongAnswers: ['Montreal', 'Toronto'],
    level: 4,
    x: -400,
    y: 0
}]

function update() {
    frames += 1
    checkKeys()
    checkNextDestination()
    clearCanvas()
    background.draw()
    traveller.draw()
}

function clearCanvas() {
    ctx.fillRect(-$canvas.width, -$canvas.height * 2, $canvas.width * 3, $canvas.height * 5)
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
    if (lives === 1) gameOver()
    lives -= 1
    if (lives < 5 && lives >= 0) {
        $hearts[lives].style.display = 'none'
    }
}

function gameOver() {
    console.log('game over')
    clearInterval(intervalId)
}

function checkNextDestination() {
    countries.forEach((c, index) => {
        if (c.name === locationTraveller) {
            nextDestination = countries[index + 1].name
        }
    })
}

newCard(countries[0])

window.onload = start