class Car {
    constructor(manufacturer, model, year, averageSpeed) {
        this.manufacturer = manufacturer
        this.model = model
        this.year = year
        this.averageSpeed = averageSpeed
    }

    showInfo() {
        console.log(`Manufacturer: ${this.manufacturer}`)
        console.log(`Model: ${this.model}`)
        console.log(`Year: ${this.year}`)
        console.log(`Average speed: ${this.averageSpeed} km/h`)
    }

    travelTime(distance) {
        let time = distance / this.averageSpeed

        let restHours = Math.floor(time / 4)
        let totalTime = time + restHours

        console.log(`Time needed: ${totalTime} hours`)
        return totalTime
    }
} 


class Rectangle {
    constructor(x1, y1, x2, y2) {
        this.topLeft = { x: x1, y: y1 }
        this.bottomRight = { x: x2, y: y2 }
    }

    showInfo() {
        console.log(`Top-left: (${this.topLeft.x}, ${this.topLeft.y})`)
        console.log(`Bottom-right: (${this.bottomRight.x}, ${this.bottomRight.y})`)
    }

    getWidth() {
        return Math.abs(this.bottomRight.x - this.topLeft.x)
    }

    getHeight() {
        return Math.abs(this.topLeft.y - this.bottomRight.y)
    }

    getArea() {
        return this.getWidth() * this.getHeight()
    }

    getPerimeter() {
        return 2 * (this.getWidth() + this.getHeight())
    }
} 


const car = new Car("Toyota", "Camry", 2020, 90)

car.showInfo()
car.travelTime(500) 

const rect = new Rectangle(0, 10, 5, 0)

rect.showInfo()

console.log(rect.getWidth())
console.log(rect.getHeight())
console.log(rect.getArea())
console.log(rect.getPerimeter())