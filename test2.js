const obj = {
  firstName: "jakir",
  lastName: "Hasan",
  country: "",
  district: "Rajshahi",
  color: "",
  price: 35,
};

const y = {};
for (const x in obj) {
  //   if (obj[x]) {
  //     y[x] = obj[x];
  //   }
  if (obj[x] !== null && obj[x] !== undefined && obj[x] !== "") {
    y[x] = obj[x];
  }
}
console.log(y);
