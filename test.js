// S M Akbor
function removeEmptyValue(obj) {
  const newObj = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] !== "") {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

const info = { name: "Akbor", age: 23, capa: "", id: 54664, " ": "" };
const result = removeEmptyValue(info);

console.log(result);
