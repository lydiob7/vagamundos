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
}

function checkNextLevel() {
    if (keys["ArrowDown"]) {
        return traveller.levelUp()
    }
}

document.onkeydown = e => {
    keys[e.key] = true
}

document.onkeyup = e => {
    keys[e.key] = false
}