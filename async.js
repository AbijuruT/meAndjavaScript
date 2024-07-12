let stocks = {
  fruits: ["strawberry", "grapes", "banana"],
  liquid: ["water", "ice"],
  holder: ["come", "cup", "stick"],
  topping: ["chocolate", "peanuts"]
}



// let order = (fruitName, callProduction) => {
//   setTimeout(() => {
//     console.log(`${stocks.fruits[fruitName]} was selected!`)
//     callProduction();
//   }, 2000);
// };
// let production = () => {
//   setTimeout(() => {
//     console.log("Production has started");
//     setTimeout(() => {
//       console.log("The fruit has been chopped!");
//       setTimeout(() => {
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added!`);
//         setTimeout(() => {
//           console.log("Machine was started :)");
//           setTimeout(() => {
//             console.log(`Ice cream was placed on the ${stocks.holder[0]}`);
//             setTimeout(() => {
//               console.log(`${stocks.topping[0]} was added`);
//               setTimeout(() => {
//                 console.log('Ice cream is ready')
//               }, 2000)
//             }, 3000)
//           }, 2000);
//         }, 1000);
//       }, 1000)
//     }, 2000)

//   }, 0)
// };

// order(0, production)