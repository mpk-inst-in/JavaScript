
// factory function

function createCircle(radius) {

  return {
    radius,
    draw: function () {
      console.log("Circle created with radius: ", radius);
    }
  }
}

const circle = createCircle(5);

// circle.draw();

function Circle(radius) {

  this.radius = radius;
  this.draw = function () {
    console.log("Circle created with radius: ", radius);
  }

}


const circle2 = new Circle(10);

circle2.draw();


