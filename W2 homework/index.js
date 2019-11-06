const Jsome = require('jsome')
const Passenger = require('./passenger')
const City = require('./city')
const Database = require('./database')


const taras = new Passenger('Taras', 27)
const ira = new Passenger('Ira', 26)
const beer = new Passenger('Beer', 5)

const city = new City('Lviv')
const city1 = new City('Berlin')
const city2 = new City('Kyiv')

taras.visit(city)
ira.visit(city1)
beer.visit(city2)

city.printVisitorNames()


Database.save('city.json', city)
Database.save('city1.json', city1)
Database.save('city2.json', city2)

const loadedFile = Database.load('city.json')
Jsome(loadedFile.visitors)

const loadedFile1 = Database.load('city1.json')
Jsome(loadedFile1.visitors)

const loadedFile2 = Database.load('city2.json')
Jsome(loadedFile2.visitors)