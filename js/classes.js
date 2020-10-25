class Map {
    constructor() {
        this.x = -400
        this.y = 0
        this.width = $canvas.width * 2
        this.height = $canvas.height * 3
        this.img = new Image()
        this.img.src = 'https://upload.wikimedia.org/wikipedia/commons/2/21/Americas_satellite_map.jpg'
        this.img.onload = () => {
            this.draw()
        }
    }
    draw() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
    scrollRight() {
        if (this.x <= $canvas.width - this.width) return
        this.x -= 10
        traveller.x -= 10
    }
    scrollLeft() {
        if (this.x >= 0) return
        this.x += 10
        traveller.x += 10
    }
    scrollUp() {
        if (this.y >= 0) return
        this.y += 10
        traveller.y += 10

    }
    scrollDown() {
        if (this.y <= -this.height + $canvas.height) return
        this.y -= 10
        traveller.y -= 10

    }
}

class Traveller {
    constructor(player) {
        this.x = 240
        this.y = 150
        this.width = 250
        this.height = 150
        this.img = new Image()
        this.img.src = player
        this.img.onload = () => {
            this.draw()
        }
    }
    draw() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
    levelUp() {
        switch (countriesGuessed[0]) {
            case 'canada':
                if (background.y < -100) {
                    clearInterval(intervalLevel)
                    intervalLevel = null
                    newCard(countries[1])
                } else {
                    background.y--
                }
                break
            case 'united states':
                if (background.x > -75 || background.y < -300) {
                    clearInterval(intervalLevel)
                    intervalLevel = null
                    newCard(countries[2])
                } else if (background.x > -80) {
                    background.x += 0
                    background.y -= 1
                } else {
                    background.x += 3
                    background.y--
                }
                break
            case 'mexico':
                break
        }
    }
}

class Card {
    constructor(country) {
        this.country = country.name
        this.answer = country.capital
        this.wrongAnswers = country.wrongAnswers
    }
    show() {
        let random = Math.floor(Math.random() * 3)

        function random2() {
            if (random === 0) return 1
            return 0
        }

        function random3() {
            if (random === 2) return 1
            return 2
        }
        $country.innerHTML = this.country
        $answer[random].innerHTML = this.answer
        $answer[random2()].innerHTML = this.wrongAnswers[0]
        $answer[random3()].innerHTML = this.wrongAnswers[1]
        $card.style.display = 'flex'
        $answer[random].onclick = () => {
            countriesGuessed.unshift(this.country)
            next()
        }
        $answer[random2()].onclick = looseLife
        $answer[random3()].onclick = looseLife
    }
    hide() {
        $card.style.display = 'none'
    }
}