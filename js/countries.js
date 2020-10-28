// Array of objects with the countries of all America

let countries = [{
    name: 'Canadá',
    capital: 'Ottawa',
    level: 1,
    x: -1130,
    y: -900
}, {
    name: 'Estados Unidos',
    capital: 'Washington DC',
    level: 1,
    x: -1110,
    y: -1050
}, {
    name: 'México',
    capital: 'Ciudad de México',
    level: 1,
    x: -730,
    y: -1150
}, {
    name: 'Bahamas',
    capital: 'Nasáu',
    level: 2,
    x: -1040,
    y: -190
}, {
    name: 'Cuba',
    capital: 'La Habana',
    level: 2,
    x: -890,
    y: -240
}, {
    name: 'Jamaica',
    capital: 'Kingston',
    level: 2,
    x: -1050,
    y: -440
}, {
    name: 'Haití',
    capital: 'Puerto Príncipe',
    level: 2,
    x: -1240,
    y: -420
}, {
    name: 'República Dominicana',
    capital: 'Santo Domingo',
    level: 2,
    x: -1290,
    y: -380
}, {
    name: 'Puerto Rico',
    capital: 'San Juan',
    level: 2,
    x: -1460,
    y: -426
}, {
    name: 'San Cristóbal y Nieves',
    capital: 'Basseterre',
    level: 2,
    x: -1580,
    y: -490
}, {
    name: 'Antigua y Barbuda',
    capital: 'Saint John',
    level: 2,
    x: -1630,
    y: -470
}, {
    name: 'Dominica',
    capital: 'Roseau',
    level: 2,
    x: -1650,
    y: -590
}, {
    name: 'Santa Lucía',
    capital: 'Castries',
    level: 2,
    x: -1666,
    y: -650
}, {
    name: 'Barbados',
    capital: 'Bridgetown',
    level: 2,
    x: -1760,
    y: -710
}, {
    name: 'San Vicente y las Granadinas',
    capital: 'Kingstown',
    level: 2,
    x: -1660,
    y: -720
}, {
    name: 'Granada',
    capital: 'Saint George',
    level: 2,
    x: -1660,
    y: -740
}, {
    name: 'Trinidad y Tobago',
    capital: 'Puerto España',
    level: 2,
    x: -1660,
    y: -810
}, {
    name: 'Bélice',
    capital: 'Belmopán',
    level: 2,
    x: -630,
    y: -480
}, {
    name: 'Guatemala',
    capital: 'Ciudad de Guatemala',
    level: 2,
    x: -544,
    y: -610
}, {
    name: 'El Salvador',
    capital: 'San Salvador',
    level: 2,
    x: -594,
    y: -640
}, {
    name: 'Honduras',
    capital: 'Tegucigalpa',
    level: 2,
    x: -684,
    y: -610
}, {
    name: 'Nicaragua',
    capital: 'Managua',
    level: 2,
    x: -730,
    y: -710
}, {
    name: 'Costa Rica',
    capital: 'San José',
    level: 2,
    x: -790,
    y: -800
}, {
    name: 'Panamá',
    capital: 'Ciudad de Panamá',
    level: 2,
    x: -960,
    y: -840
}, {
    name: 'Colombia',
    capital: 'Bogotá',
    level: 3,
    x: -50,
    y: 0
}, {
    name: 'Venezuela',
    capital: 'Caracas',
    level: 3,
    x: -50,
    y: 0
}, {
    name: 'Guyana',
    capital: 'Georgetown',
    level: 3,
    x: -50,
    y: 0
}, {
    name: 'Surinam',
    capital: 'Paramaribo',
    level: 3,
    x: -50,
    y: 0
}, {
    name: 'Guayana francesa',
    capital: 'Cayena',
    level: 3,
    x: -50,
    y: 0
}, {
    name: 'Brasil',
    capital: 'Brasilia',
    level: 3,
    x: -50,
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

// Array of possible wrong answers

const wrongAnswersArray = ['Ciudad de Bélice', 'Corozal', 'Córdoba', 'Medellin', 'San Fermín', 'Cuenca', 'Montañitas', 'Cienfuegos', 'Monterrey', 'Nueva York', 'Chicago', 'La Plata', 'Rio de Janeiro', 'Arraial do cabo', 'Fortaleza', 'Rocha', 'Canelones', 'Encarnación', 'Paris', 'Berlín', 'Hong Kong', 'Estambul', 'Ghana', 'Melbourne', 'Granada', 'Valdivia', 'Valparaiso', 'Ozorno', 'Cochabamba', 'Coroico', 'Humahuaca', 'Iquitos', 'Guayaquil', 'Ciudad del Cabo', 'San Francisco', 'Villavicencio', 'Magdalena', 'Río Gallegos', 'Concordia', 'Maracaibo', 'Cartagena', 'Santa Marta', 'Florianópolis', 'Marrakesh', 'Fez', 'El Cairo', 'Sydney', 'Ho Chi Minh', 'Tokyo', 'Hiroshima', 'Seúl', 'Pekín', 'Hanoi', 'Bangkok', 'Alger', 'Londres']

// Array of wrong answers to be used in each card

let wrongAnswers = []

// Function to pick the wrong answers

function randomArray() {
    wrongAnswers = []
    let random = Math.floor(Math.random() * wrongAnswersArray.length)
    let random2 = Math.floor(Math.random() * wrongAnswersArray.length)
    let random3 = Math.floor(Math.random() * wrongAnswersArray.length)
    let random4 = Math.floor(Math.random() * wrongAnswersArray.length)
    let random5 = Math.floor(Math.random() * wrongAnswersArray.length)
    let random6 = Math.floor(Math.random() * wrongAnswersArray.length)
    let random7 = Math.floor(Math.random() * wrongAnswersArray.length)
    wrongAnswersArray.forEach((name, index) => {
        if (index === random || index === random2 || index === random3 || index === random4 || index === random5 || index === random6 || index === random7) {
            wrongAnswers.push(name)
        }
    })
}