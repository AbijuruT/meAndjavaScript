let stocks = {
  fruits: ["strawberry", "grapes", "banana"],
  liquid: ["water", "ice"],
  holder: ["come", "cup", "stick"],
  topping: ["chocolate", "peanuts"]
}

let isShopOpen = false;
const order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(() => {
        resolve(work());
      }, time)
    } else {
      reject(console.log("Shop is closed"))
    }
  })
}

order(2000, () => console.log(`${stocks.fruits[0]} was selected`)).then(() => {
  return order(0, () => console.log("Production has started"));
}).then(() => {
  return order(2000, () => console.log("The fruit was chooped"))
}).then(() => {
  return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`))
}).then(() => {
  return order(1000, () => console.log("Machine started"))
}).then(() => {
  return order(2000, () => console.log(`Ice cream placed on the ${stocks.holder[1]}`))
}).then(() => {
  return order(3000, () => console.log(`${stocks.topping[0]} was selected`))
}).then(() => {
  return order(1000, () => console.log('Serving Ice cream!'))
}).catch(() => {
  console.log('Customer left')
}).finally(() => console.log('Let us call it a day!'))





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