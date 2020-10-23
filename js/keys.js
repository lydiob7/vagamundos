function checkKeys() {
    if (keys["ArrowLeft"]) {
        return background.scrollLeft()
    }
    if (keys["ArrowRight"]) {
        return background.scrollRight()
    }
    if (keys["ArrowUp"]) {
        return background.scrollUp()
    }
    if (keys["ArrowDown"]) {
        return background.scrollDown()
    }
}

document.onkeydown = e => {
    keys[e.key] = true
}

document.onkeyup = e => {
    keys[e.key] = false
}