const Jsome = require('jsome')
module.exports = class City {
    constructor(name) {
        this.name = name
        this.visitors = []
    }

    printVisitorNames() {
        this.visitors.forEach(printName)
    }
}

printName = passenger => Jsome(passenger.name, passenger.age)

