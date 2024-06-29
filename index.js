// Creating obj in js
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 2
  },
  draw: function () {
    console.log('drawing method')
  }
}
// circle.draw()

// Creating obj with Factories
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw factory function");
    }
  }
}
const circle1 = createCircle(1)
// circle1.draw()

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Drawing with constructor function");
  }
}
const anotherCircle = new Circle(1)
anotherCircle.draw()
// Adding or removing props in the obj
anotherCircle.location = { x: 1, y: 3 }
console.log(anotherCircle)
delete anotherCircle.location;
console.log(anotherCircle)
delete anotherCircle.draw //removing method
console.log(anotherCircle)

// Iterating over or enumerate the properties in an obj using for... in..
for (let key in circle1) {
  if (typeof circle1[key] !== 'function') {
    console.log(key, circle1[key])
  }
}
const keys = Object.keys(circle1) // to display all the object keys
console.log(keys)

if ('radius' in circle1) { // check if a property is even in the obj
  console.log('Circle has a radius')
}