// // Creating obj in js
// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 2
//   },
//   draw: function () {
//     console.log('drawing method')
//   }
// }
// // circle.draw()

// // Creating obj with Factories
// function createCircle(radius) {
//   return {
//     radius,
//     draw: function () {
//       console.log("draw factory function");
//     }
//   }
// }
// const circle1 = createCircle(1)
// // circle1.draw()

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("Drawing with constructor function");
//   }
// }
// const anotherCircle = new Circle(1)
// anotherCircle.draw()
// // Adding or removing props in the obj
// anotherCircle.location = { x: 1, y: 3 }
// console.log(anotherCircle)
// delete anotherCircle.location;
// console.log(anotherCircle)
// delete anotherCircle.draw //removing method
// console.log(anotherCircle)

// // Iterating over or enumerate the properties in an obj using for... in..
// for (let key in circle1) {
//   if (typeof circle1[key] !== 'function') {
//     console.log(key, circle1[key])
//   }
// }
// const keys = Object.keys(circle1) // to display all the object keys
// console.log(keys)

// if ('radius' in circle1) { // check if a property is even in the obj
//   console.log('Circle has a radius')
// }

function Stopwatch() {
  let startTime, endTime, running, duration = 0;
  this.start = function () { 
    if (running) {
      throw new Error('Stopwatch has already started.');
    }
    running = true;
    startTime = new Date();
  };
  this.stop = function () { 
    if (!running) {
      throw new Error('Stopwatch is not started')
    }
    running = false
    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds
  };
  this.reset = function () { 
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };
  Object.defineProperties(this, 'duration', {
    get: function () { return duration; }
  });
}