const obj = {
  firstName: "jakir",
  lastName: "Hasan",
  country: "",
  district: "Rajshahi",
  color: "",
  price: 35,
};

const y = {};
for (const i in obj) {
  if (obj[i] !== null && obj[i] !== undefined && obj[i] !== "") {
    y[i] = obj[i];
  }
}
console.log(y);

function removeItem(obj) {
  const data = {};

  for (const x in obj) {
    if (obj.hasOwnProperty(x) && obj[x] !== "") {
      data[x] = obj[x];
    }
  }
  return data;
}
const info = {
  firstName: "Najim",
  lastName: "Hasan",
  country: "Bangadesh",
  color: "",
};
const result = removeItem(info);
console.log(result);
