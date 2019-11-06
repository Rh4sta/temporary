module.exports = class Passenger {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    visit(city) {
        this.city = city.name
        city.visitors.push(this)
    }
}

