let order = (call_production) => {
  console.log("order is placed, call production!")
  call_production();
};
let production = () => {
  console.log("Order received, starting production");
};

order(production)