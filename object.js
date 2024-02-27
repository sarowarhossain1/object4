const person = {
  firstName: "Jahid",
  lastName: "Hasan",
  country: "Bangladesh",
  district: "Rajshahi",
  start: function () {
    console.log("Bike has started");
  },
  drive: function () {
    console.log("bike is driving");
  },
  arr: [10, 15, 25, 35, 55, 65, 75, 85],
  nestedObj: {
    firstName: "Rakib",
    lastName: "Hasan",
    country: "Bangladesh",
    district: "Dhaka",
  },
};
// console.log(person);

// for (const i in person) {
//   console.log(person[i]);
// }
// for (const i in person.nestedObj) {
//   console.log(person.nestedObj[i]);
// }

for (let i in person.nestedObj) {
  if (person.nestedObj[i] == "Rakib") {
    person.nestedObj[i] = "Hasib";
  }
}
// console.log(person);

const obj1 = {
  firstName: "jakir",
  lastName: "Hasan",
  country: "Bangladesh",
  district: "Rajshahi",
  color: "white",
};

const obj2 = {
  firstName: "Najim",
  lastName: "Hasan",
  country: "Bangadesh",
  color: "green",
};

const obj3 = { ...obj2, ...obj1 };
console.log(obj3);

const result =
  obj1.firstName +
  " " +
  obj1.lastName +
  " " +
  obj1.country +
  " " +
  obj1.district +
  " " +
  obj1.color;
console.log(result);
