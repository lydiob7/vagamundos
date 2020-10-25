function checkKeys() {
    if (keys["a"]) {
        return background.scrollLeft()
    }
    if (keys["d"]) {
        return background.scrollRight()
    }
    if (keys["w"]) {
        return background.scrollUp()
    }
    if (keys["s"]) {
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