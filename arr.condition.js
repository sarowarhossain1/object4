const number = [10, 15, 25, 35, 55, 60, 75, 85];

for (let i = 0; i < number.length; i++) {
  if (number[i] == 10) {
    number[i] = number[i] + 3;
  } else if (number[i] == 35) {
    number[i] = number[i] - 5;
  } else if (number[i] == 25) {
    number[i] = number[i] * 2;
  } else if (number[i] == 60) {
    number[i] = number[i] / 2;
  }
}
// console.log(number);

const result = [5, 25, 20, 30, 55, 50, 80, 60, 90];

for (let i = 0; i < result.length; i++) {
  if (result[i] == 25) {
    result[i] = result[i] + 5;
  } else if (result[i] == 55) {
    result[i] = result[i] - 15;
  } else if (result[i] == 20) {
    result[i] = result[i] * 2;
  } else if (result[i] == 90) {
    result[i] = result[i] / 2;
  } else {
    result[i] = result[i] + 1;
  }
}
// console.log(result);

const output = [5, 15, 20, 25, 30, 40, 55, 60, 90];

for (let i = 0; i < output.length; i++) {
  if (output[i] == 15) {
    output[i] = output[i] + 10;
  } else if (output[i] == 20) {
    output[i] = output[i] - 5;
  } else if (output[i] == 25) {
    output[i] = output[i] * 2;
  } else if (output[i] == 90) {
    output[i] = output[i] / 2;
  } else {
    output[i] = output[i] + 1;
  }
}
console.log(output);
