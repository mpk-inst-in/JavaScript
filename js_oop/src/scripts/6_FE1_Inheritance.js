class Vehicle {

  color;
  type;

  constructor(color, type) {
    this.color = color;
    this.type = type;
  }

}

class Bike extends Vehicle {

  constructor(color, type) {
    super(color, type);
    this.num_tyres = 2;

  }
}

const bike = new Bike("Blue", "Electric");

console.log(bike)


