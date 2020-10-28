// Array of objects with the countries of all America

let countries = [{
    name: 'Canadá',
    capital: 'Ottawa',
    level: 1,
    x: -1050,
    y: -950
}, {
    name: 'Estados Unidos',
    capital: 'Washington DC',
    level: 1,
    x: -1030,
    y: -1100
}, {
    name: 'México',
    capital: 'Ciudad de México',
    level: 1,
    x: -650,
    y: -1200
}, {
    name: 'Bahamas',
    capital: 'Nasáu',
    level: 2,
    x: -980,
    y: -320
}, {
    name: 'Cuba',
    capital: 'La Habana',
    level: 2,
    x: -840,
    y: -416
}, {
    name: 'Jamaica',
    capital: 'Kingston',
    level: 2,
    x: -1000,
    y: -640
}, {
    name: 'Haití',
    capital: 'Puerto Príncipe',
    level: 2,
    x: -1190,
    y: -630
}, {
    name: 'República Dominicana',
    capital: 'Santo Domingo',
    level: 2,
    x: -1240,
    y: -580
}, {
    name: 'Puerto Rico',
    capital: 'San Juan',
    level: 2,
    x: -1420,
    y: -636
}, {
    name: 'San Cristóbal y Nieves',
    capital: 'Basseterre',
    level: 2,
    x: -1530,
    y: -690
}, {
    name: 'Antigua y Barbuda',
    capital: 'Saint John',
    level: 2,
    x: -1580,
    y: -690
}, {
    name: 'Dominica',
    capital: 'Roseau',
    level: 2,
    x: -1600,
    y: -790
}, {
    name: 'Santa Lucía',
    capital: 'Castries',
    level: 2,
    x: -1616,
    y: -850
}, {
    name: 'Barbados',
    capital: 'Bridgetown',
    level: 2,
    x: -1710,
    y: -910
}, {
    name: 'San Vicente y las Granadinas',
    capital: 'Kingstown',
    level: 2,
    x: -1610,
    y: -920
}, {
    name: 'Granada',
    capital: 'Saint George',
    level: 2,
    x: -1610,
    y: -940
}, {
    name: 'Trinidad y Tobago',
    capital: 'Puerto España',
    level: 2,
    x: -1610,
    y: -1010
}, {
    name: 'Bélice',
    capital: 'Belmopán',
    level: 2,
    x: -570,
    y: -680
}, {
    name: 'Guatemala',
    capital: 'Ciudad de Guatemala',
    level: 2,
    x: -494,
    y: -830
}, {
    name: 'El Salvador',
    capital: 'San Salvador',
    level: 2,
    x: -544,
    y: -860
}, {
    name: 'Honduras',
    capital: 'Tegucigalpa',
    level: 2,
    x: -634,
    y: -840
}, {
    name: 'Nicaragua',
    capital: 'Managua',
    level: 2,
    x: -680,
    y: -940
}, {
    name: 'Costa Rica',
    capital: 'San José',
    level: 2,
    x: -740,
    y: -1040
}, {
    name: 'Panamá',
    capital: 'Ciudad de Panamá',
    level: 2,
    x: -910,
    y: -1090
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