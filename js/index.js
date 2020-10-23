const background = new Map()
let intervalId
let frames = 0
const imgTraveler1 = 'https://previews.123rf.com/images/mansum007/mansum0071402/mansum007140200004/25602419-cartoon-traveler-illustration.jpg'
const imgTraveler2 = ''
const imgTraveler3 = ''
const traveler1 = new Traveler(imgTraveler1)
let keys = []

function update() {
    frames += 1
    checkKeys()
    clearCanvas()
    background.draw()
    traveler1.draw()
}

function clearCanvas() {
    ctx.fillRect(0, 0, $canvas.width, $canvas.height)
}

function start() {
    if (intervalId) return
    intervalId = setInterval(update, 1000 / 60)
}

window.onload = start