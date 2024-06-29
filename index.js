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
circle1.draw()