// Keys events within the game

function checkKeys() {
    if (keys["ArrowLeft"] && $card.style.display === 'none' && locationTraveller !== 'Estados Unidos') {
        return background.scrollLeft()
    }
    if (keys["ArrowRight"] && $card.style.display === 'none' && locationTraveller !== 'Estados Unidos') {
        return background.scrollRight()
    }
    if (keys["ArrowUp"] && $card.style.display === 'none' && locationTraveller !== 'Estados Unidos') {
        return background.scrollUp()
    }
    if (keys["ArrowDown"] && $card.style.display === 'none' && locationTraveller !== 'Estados Unidos') {
        return background.scrollDown()
    }
    if (keys["Enter"] && $card.style.display === 'none') {
        hideNextQuestion()
        let countriesNames = countries.map(c => c.name)
        countriesNames.forEach((name, index) => {
            if (locationTraveller === name && countriesGuessed[0] !== name) {
                newCard(countries[index])
            }
        })
    }

}

function checkNextLevel() {

    if (keys[" "]) {
        if (locationTraveller === 'Estados Unidos') return traveller.levelUp()
        traveller.x = 475
        traveller.y = 250
        traveller.levelUp()
    }
}

document.onkeydown = e => {
    keys[e.key] = true
}

document.onkeyup = e => {
    keys[e.key] = false
}