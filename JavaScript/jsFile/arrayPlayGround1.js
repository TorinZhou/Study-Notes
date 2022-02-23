/**
 * @Array 1: Static methods
 * @Array.from() ,Array.isArray(), Array.of()
 */

/**
 * @Array 2: Instance properties
 * @Array.prototype.length,
 */
const arr0 = [2];
const arr1 = [1];
const arr2 = [9];
arr1[100] = 5;
// console.log(arr1); // [ 1, <99 empty items>, 5 ]
// console.log(arr1.length); // 101
// console.log(arr1[2]); // undefined.

/**
 * @Array 3:
 * @Array.prototype.at()
 * @Return the element at() index. read only.
 */
let result = arr1.at(-1);
// console.log(result); // 5

/**
 * @Array 4:
 * @Array.prototype.concat()
 * @The concat() method is used to merge two or more arrays. This method does not change the existing
 * @arrays, but instead returns a new array.
 * @But Array concat will remember refferences. if arr ele is a refference.
 * @e.g. nested arrays. the inner arr is refference
 * @This is call shallowly copied.
 * @num = num1.concat(num2, num3); (concat multiple arrs at once)
 */
const a = [[1]];
const b = [2];
const c = a.concat(b);

/**
 * @@Array 5:
 * @Array.prototype.copyWithin()
 * @This one is tricky
 */

// Array.prototype.copyWithin();
// Array.prototype.entries();
// Array.prototype.every();
// Array.prototype.fill();
// Array.prototype.filter();
// Array.prototype.find();
// Array.prototype.findIndex();
// Array.prototype.flat();
// Array.prototype.flatMap();
// Array.prototype.forEach();
// Array.from();
// Array.prototype.groupBy();
// Array.prototype.includes();
// Array.prototype.indexOf();
// Array.isArray();
// Array.prototype.join();
// Array.prototype.keys();
// Array.prototype.lastIndexOf();
// Array.prototype.map();
// Array.of();
// Array.prototype.pop();
// Array.prototype.push();
// Array.prototype.reduce();
// Array.prototype.reduceRight();
// Array.prototype.reverse();
// Array.prototype.shift();
// Array.prototype.slice();
// Array.prototype.some();
// Array.prototype.sort();
// Array.prototype.splice();
// Array.prototype.toLocaleString();
// Array.prototype.toSource();
// Array.prototype.toString();
// Array.prototype.unshift();
// Array.prototype.values();
