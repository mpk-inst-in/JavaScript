
class Vehicle {

  #color;
  type;

  constructor(type, color) {

    this.#color = color;
    this.type = type;
  }

  getColor() { return this.#color; }

}

const vehilcle = new Vehicle("Red", "Hybrid");

console.log(vehilcle.getColor());
console.log(vehilcle.color);