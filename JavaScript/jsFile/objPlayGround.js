// All about Objects
/**
 * 1.
 */
const citys = {
  notice: "integer props are sorted, others appear in creation order",
  2: "Shanghai",
  1: "NewYork",
};
const isEmptyTestObj = {};
for (key in citys) {
  // console.log(`Key: ${key}, Value: ${citys[key]}`);
  // The “integer property” term here means a string that can be converted to-and-from an integer without a change.
  // result
  // Key: 1, Value: NewYork
  // Key: 2, Value: Shanghai
  // Key: notice, Value: integer props are sorted, others appear in creation order
}
const num1 = new Number("9");
const num2 = Number("9");
// console.log(num1, "\n", num2);
const info1 = Object.getOwnPropertyNames(num1); // nothing
// console.log(info1);

const isEmpty = function (obj) {
  return Object.getOwnPropertyNames(obj).length ? false : true;
};
// console.log(isEmpty(citys));

const salaries = {
  bar: "foo",
  John: 100,
  Ann: 160,
  Pete: 130,
};
const objSum = function (obj) {
  let sum = 0;
  // if (isEmpty(obj)) return sum;  useless code.
  for (key in obj) {
    sum += obj[key];
  }
  return sum;
};
// console.log(objSum(salaries));

const multiplyNumeric = function (obj) {
  for (key in obj) {
    obj[key] = isNaN(obj[key]) ? obj[key] : obj[key] * 2;
  }
  // console.log(obj);
};

multiplyNumeric(salaries);

/**
 * 2.
 */

// const result = deepClone(citys);
// console.log(result);
