const number = [10, 15, 25, 35, 55, 65, 75, 85];
number.unshift(5);
number.push(95);
const result = number.slice(1, 5);
// console.log(result);

function numberFunction(a) {
  console.log(a);
}

function calculateFun(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
  return callback;
}
// calculateFun(number, numberFunction);
const car = [
  "Toyota",
  "Suzuki",
  "Mercedes Benz",
  "audi",
  "Rand Rover",
  "BMW",
  "Bentley",
];
car.unshift("Lamgorghini");
car.push("Honda");
const result1 = car.slice(1, 5);
// console.log(result1);

function carFunction(b) {
  console.log(b);
}

function brandcarFun(carr, callback) {
  for (let i = 0; i < carr.length; i++) {
    callback(carr[i]);
  }
  return callback;
}
// brandcarFun(car, carFunction);

const bike = ["Suzuki", "Yeahmaha", "Honda", "Hero", "Runner", "Bajaj"];
bike.unshift("BMW");
bike.push("R15");
const result2 = bike.slice(1, 5);
// console.log(result2);

function bikeFunction(c) {
  console.log(c);
}

function motorbikeFun(bikerr, callback) {
  for (let i = 0; i < bikerr.length; i++) {
    callback(bikerr[i]);
  }
  return callback;
}
// motorbikeFun(bike, bikeFunction);

const computer = ["Asus", "Hp", "Lenevo", "Walton", "Microsoft", "Dell"];
computer.unshift("Apple");
computer.push("Samsung");
const result3 = computer.slice(1, 5);
// console.log(result3);

function ramFunction(computerr, callback) {
  for (let i = 0; i < computerr.length; i++) {
    callback(computerr[i]);
  }
  return callback;
}
ramFunction(computer, computerFun);

function computerFun(d) {
  //   console.log(d);
}

const mobile = ["Redmi", "xiomi", "Oppo", "Vivo", "Symphony"];
mobile.unshift("Iphone");
mobile.push("Samsung");
const result4 = mobile.slice(1, 5);
console.log(result4);

function mobileFunction(e) {
  //   console.log(e);
}

function phoneFun(mobilerr, callback) {
  for (let i = 0; i < mobilerr.length; i++) {
    callback(mobilerr[i]);
  }
  return callback;
}
// phoneFun(mobile, mobileFunction);
