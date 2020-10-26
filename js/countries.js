let countries = [{
    name: 'Canadá',
    capital: 'Ottawa',
    level: 1,
    x: -400,
    y: 0
}, {
    name: 'Estados Unidos',
    capital: 'Washington DC',
    level: 1,
    x: -400,
    y: -100
}, {
    name: 'México',
    capital: 'Ciudad de México',
    level: 1,
    x: -80,
    y: -300
}, {
    name: 'Bahamas',
    capital: 'Nasáu',
    level: 2,
    x: -350,
    y: -300
}, {
    name: 'Cuba',
    capital: 'La Habana',
    level: 2,
    x: -350,
    y: -300
}, {
    name: 'Jamaica',
    capital: 'Kingston',
    level: 2,
    x: -350,
    y: -300
}, {
    name: 'Haití',
    capital: 'Puerto Príncipe',
    level: 2,
    x: -350,
    y: -300
}, {
    name: 'República Dominicana',
    capital: 'Santo Domingo',
    level: 2,
    x: -350,
    y: -300
}, {
    name: 'Puerto Rico',
    capital: 'San Juan',
    level: 2,
    x: -350,
    y: -300
}, {
    name: 'San Cristóbal y Nieves',
    capital: 'Basseterre',
    level: 2,
    x: -350,
    y: -300
}, {
    name: 'Antigua y Barbuda',
    capital: 'Saint John',
    level: 2,
    x: -350,
    y: -300
}, {
    name: 'Dominica',
    capital: 'Roseau',
    level: 2,
    x: -350,
    y: -300
}, {
    name: 'Santa Lucía',
    capital: 'Castries',
    level: 2,
    x: -350,
    y: -300
}, {
    name: 'Barbados',
    capital: 'Bridgetown',
    level: 2,
    x: -350,
    y: -300
}, {
    name: 'San Vicente y las Granadinas',
    capital: 'Kingstown',
    level: 2,
    x: -350,
    y: -300
}, {
    name: 'Granada',
    capital: 'Saint George',
    level: 2,
    x: -350,
    y: -300
}, {
    name: 'Trinidad y Tobago',
    capital: 'Puerto España',
    level: 2,
    x: -350,
    y: -300
}, {
    name: 'Bélice',
    capital: 'Belmopán',
    level: 2,
    x: -200,
    y: -370
}, {
    name: 'Costa Rica',
    capital: 'San José',
    level: 2,
    x: -80,
    y: -300
}, {
    name: 'El Salvador',
    capital: 'San Salvador',
    level: 2,
    x: -80,
    y: -300
}, {
    name: 'Guatemala',
    capital: 'Ciudad de Guatemala',
    level: 2,
    x: -80,
    y: -300
}, {
    name: 'Honduras',
    capital: 'Tegucigalpa',
    level: 2,
    x: -80,
    y: -300
}, {
    name: 'Nicaragua',
    capital: 'Managua',
    level: 2,
    x: -80,
    y: -300
}, {
    name: 'Panamá',
    capital: 'Ciudad de Panamá',
    level: 2,
    x: -80,
    y: -300
}, {
    name: 'Colombia',
    capital: 'Bogotá',
    level: 3,
    x: -400,
    y: 0
}, {
    name: 'Venezuela',
    capital: 'Caracas',
    level: 3,
    x: -400,
    y: 0
}, {
    name: 'Guyana',
    capital: 'Georgetown',
    level: 3,
    x: -400,
    y: 0
}, {
    name: 'Surinam',
    capital: 'Paramaribo',
    level: 3,
    x: -400,
    y: 0
}, {
    name: 'Guyana francesa',
    capital: 'Cayena',
    level: 3,
    x: -400,
    y: 0
}, {
    name: 'Brasil',
    capital: 'Brasilia',
    level: 3,
    x: -400,
    y: 0
}, {
    name: 'Ecuador',
    capital: 'Quito',
    level: 3,
    x: -400,
    y: 0
}, {
    name: 'Perú',
    capital: 'Lima',
    level: 3,
    x: -400,
    y: 0
}, {
    name: 'Chile',
    capital: 'Santiago',
    level: 3,
    x: -400,
    y: 0
}, {
    name: 'Bolivia',
    capital: 'La Paz',
    level: 3,
    x: -400,
    y: 0
}, {
    name: 'Paraguay',
    capital: 'Asunción',
    level: 3,
    x: -400,
    y: 0
}, {
    name: 'Uruguay',
    capital: 'Montevideo',
    level: 3,
    x: -400,
    y: 0
}, {
    name: 'Argentina',
    capital: 'Buenos Aires',
    level: 3,
    x: -400,
    y: 0
}, {
    name: 'Fin del mundo',
    capital: 'Ushuaia',
    level: 4,
    x: -400,
    y: 0
}]

const wrongAnswersArray = ['Ciudad de Bélice', 'Corozal', 'Córdoba', 'Medellin', 'San Fermín', 'Cuenca', 'Montañitas', 'Cienfuegos', 'Monterrey', 'Nueva York', 'Chicago', 'La Plata', 'Rio de Janeiro', 'Arraial do cabo', 'Fortaleza', 'Rocha', 'Canelones', 'Encarnación', 'Paris', 'Berlín', 'Hong Kong', 'Estambul', 'Ghana', 'Melbourne', 'Granada', 'Valdivia', 'Valparaiso', 'Ozorno', 'Cochabamba', 'Coroico', 'Humahuaca', 'Iquitos', 'Guayaquil', 'Ciudad del Cabo', 'San Francisco', 'Villavicencio', 'Magdalena', 'Río Gallegos', 'Concordia', 'Maracaibo', 'Cartagena', 'Santa Marta', 'Florianópolis', 'Marrakesh', 'Fez', 'El Cairo', 'Sydney', 'Ho Chi Minh', 'Tokyo', 'Hiroshima', 'Seúl', 'Pekín', 'Hanoi', 'Bangkok', 'Alger', 'Londres']

let wrongAnswers = []

function randomArray() {
    wrongAnswers = []
    let random = Math.floor(Math.random() * wrongAnswersArray.length)
    let random2 = Math.floor(Math.random() * wrongAnswersArray.length)
    let random3 = Math.floor(Math.random() * wrongAnswersArray.length)
    let random4 = Math.floor(Math.random() * wrongAnswersArray.length)
    let random5 = Math.floor(Math.random() * wrongAnswersArray.length)
    wrongAnswersArray.forEach((name, index) => {
        if (index === random || index === random2 || index === random3 || index === random4 || index === random5) {
            wrongAnswers.push(name)
        }
    })
}