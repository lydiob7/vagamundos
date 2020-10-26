function checkKeys() {
    if (keys["a"] && $card.style.display === 'none') {
        return background.scrollLeft()
    }
    if (keys["d"] && $card.style.display === 'none') {
        return background.scrollRight()
    }
    if (keys["w"] && $card.style.display === 'none') {
        return background.scrollUp()
    }
    if (keys["s"] && $card.style.display === 'none') {
        return background.scrollDown()
    }
    if (keys["Enter"] && $card.style.display === 'none') {
        hideNextQuestion()
        let countriesNames = countries.map(c => c.name)
        countriesNames.forEach((name, index) => {
            if (locationTraveller === name) {
                newCard(countries[index])
            }
        })
    }

}

function checkNextLevel() {
    if (keys["ArrowDown"]) {
        traveller.levelUp()
    }
}

document.onkeydown = e => {
    keys[e.key] = true
}

document.onkeyup = e => {
    keys[e.key] = false
}