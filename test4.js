const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};
// console.log(myObj);
for (let i in myObj.cars) {
  myObj.cars[i].name;
  //   console.log(myObj.cars[i].name);
  for (let j in myObj.cars[i].models) {
    myObj.cars[i].models[j];
  }
}
// console.log(myObj.cars[i].models[j]);
