// Variables

let intervalId
let intervalLevel
let timerMaquina
let frames = 0
let keys = []
let countdown
let countriesGuessed = []
    // let countriesGuessed = ['Panamá']
let locationTraveller = 'Canadá'
    // let locationTraveller = 'Colombia'
let nextDestination
let lives = 5
let level = 1
$level.innerHTML = level
let backgroundCanvas = '#3b8ec3'
let background = new Map()
let card
const imgNaima = `../images/personajenaima.png`
const imgBernard = `../images/Bernard.png`
let traveller


// Events for the first sections

$startButton.onclick = changeSection
$instructionsButton.onclick = showInstructions
$secondButton.onclick = changeSection2
$thirdButton.onclick = changeSection3
$bernardButton.onclick = changeSection3
$naima.onclick = naimaCard
$bernard.onclick = bernardCard

function changeSection() {
    $cover.style.display = `none`
    $rules.style.display = `flex`
    $body.style.backgroundColor = ' #F5F0DA'
    maquina("#maquina-de-escribir", texto, 50)
}

function showInstructions() {
    $instructionsButton.style.display = 'none'
    $secondButton.style.display = 'block'
    clearInterval(timerMaquina)
    maquina("#maquina-de-escribir", texto2, 50)
}

function changeSection2() {
    $rules.style.display = `none`
    $players.style.display = `flex`
}

function naimaCard() {
    $players.style.display = `none`
    $containerNaima.style.display = 'flex'
    traveller = new Traveller(imgNaima)
    clearInterval(timerMaquina)
    maquina("#naima-description", textoNaima, 50)
}

function bernardCard() {
    $players.style.display = `none`
    $containerBernard.style.display = 'flex'
    traveller = new Traveller(imgBernard)
    clearInterval(timerMaquina)
    maquina("#bernard-description", textoBernard, 50)
}

function changeSection3() {
    $containerNaima.style.display = 'none'
    $containerBernard.style.display = 'none'
    $containerGame.style.display = 'flex'
    start()
    newCard(countries[0])

}

function maquina(contenedor, texto, intervalo) {
    longitud = texto.length;
    cnt = document.querySelector(contenedor);
    cnt.innerHTML = ''
    var i = 0;
    timerMaquina = setInterval(function() {
        cnt.innerHTML = cnt.innerHTML.substr(0, cnt.innerHTML.length - 1) + texto.charAt(i) + "_";
        if (i >= longitud) {
            return clearInterval(timerMaquina);
        } else {
            i++;
        }
    }, intervalo);
};

// UPDATE FUNCTION

function update() {
    frames += 1
    checkKeys()
    checkNextDestination()
    checkProgress()
    clearCanvas()
    background.draw()
    traveller.draw()
}

// General functions

function clearCanvas() {
    ctx.fillStyle = backgroundCanvas
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
    showArrowNext()
}

function nextCountry() {
    checkNextLevel()
}

function newCard(country) {
    card = new Card(country)
    card.show()
    timeLeft()
}

function timeLeft() {
    $reloj.style.display = 'block'
    $timeLeft.innerHTML = 10
    countdown = setInterval(() => {
        if ($timeLeft.innerHTML <= 0) {
            clearInterval(countdown)
            return looseLife()
        }
        $timeLeft.innerHTML -= 1
    }, 1000)
}

function hideClock() {
    $reloj.style.display = 'none'
    clearInterval(countdown)
}

function looseLife() {
    if (lives === 1) gameOver()
    lives -= 1
    if (lives < 5 && lives >= 0) {
        $hearts[lives].style.display = 'none'
    }
}

function gameOver() {
    $gameOver.style.display = 'flex'
    card.hide()
    clearInterval(intervalId)
    clearInterval(countdown)
    $tryAgain.style.display = 'block'
}

function checkNextDestination() {
    countries.forEach((c, index) => {
        if (c.name === locationTraveller) {
            nextDestination = countries[index + 1].name
        }
    })
}

function showArrowNext() {
    $arrowNext.style.display = 'block'
}

function hideArrowNext() {
    $arrowNext.style.display = 'none'
    $nextQuestion.style.display = 'block'
}

function hideNextQuestion() {
    $nextQuestion.style.display = 'none'
}

function checkProgress() {
    if (countriesGuessed[0] === 'México' && level !== 2) {
        backgroundCanvas = '#5dacdf'
        background.img.src = '../images/americacentral.png'
        background.x = -240
        background.y = -300
        background.height = 1440
        background.width = 2400
        traveller.x = 475
        traveller.y = 250
        level = 2
        $level.innerHTML = level
    } else if (countriesGuessed[0] === 'Panamá' && level !== 3) {
        background.img.src = '../images/americadelsur.jpg'
        background.x = 0
        background.y = 0
        background.height = 2400
        background.width = 2400
        traveller.x = 475
        traveller.y = 250
        level = 3
        $level.innerHTML = level
    }
}

function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

function tryAgain() {
    intervalId = null
    $gameOver.style.display = 'none'
    $tryAgain.style.display = 'none'
    $hearts.forEach((life) => life.style.display = 'inline-block')
    frames = 0
    countriesGuessed = []
    locationTraveller = 'Canadá'
    lives = 5
    level = 1
    $level.innerHTML = level
    background.img.src = '../images/americadelnorte.jpg'
    hideClock()
    start()
    hideArrowNext()
}

// Start game

// window.onload = 

// Try again event

$tryAgain.onclick = tryAgain