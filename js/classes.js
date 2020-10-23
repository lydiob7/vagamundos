class Board {
    constructor() {
        this.x = -250
        this.y = -300
        this.width = $canvas.width * 2
        this.height = $canvas.height * 3
        this.img = new Image()
        this.img.src = '../images/portada.png'
        this.img.onload = () => {
            this.draw()
        }
    }
    draw() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
}

class Map extends Board {
    constructor() {
        super()
        this.img.src = 'https://previews.123rf.com/images/yupiramos/yupiramos1802/yupiramos180210653/95218904-north-and-south-america-map-continent-vector-illustration-outline-design.jpg'
    }
    move() {

    }
}

class Portada extends Board {
    constructor() {
        super()
        this.x = 0
        this.y = 0
        this.width = $canvas.width
        this.height = $canvas.height
        this.img.src = '../images/portada.png'
    }
    draw() {
        this.x--
            if (this.x < -$canvas.width) this.x = 0
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
        ctx.drawImage(this.img, this.x + $canvas.width, this.y, this.width, this.height)
    }
}

class Traveler {
    constructor(person) {
        this.x = 300
        this.y = 225
        this.width = 50
        this.height = 50
        this.img = new Image()
        this.src = person
        this.img.onload = () => {
            this.draw()
        }
    }
    draw() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
}