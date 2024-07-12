let stocks = {
  fruits: ["strawberry", "grapes", "banana"],
  liquid: ["water", "ice"],
  holder: ["come", "cup", "stick"],
  topping: ["chocolate", "peanuts"]
}



let order = (fruitName, callProduction) => {
  setTimeout(() => {
    console.log(`${stocks.fruits[fruitName]} was selected!`)
    callProduction();
  }, 2000);
};
let production = () => {
  setTimeout(() => {
    console.log("Production has started");

  }, 0)
};

order(0, production)