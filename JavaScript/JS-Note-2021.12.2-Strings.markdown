# STRINGS

## 1. JUST LIKE AN ARRAY

const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]); // A
console.log(plane[1]); // '3'
console.log(airline.length); // 16

## 2. METHODS

- 2.1 IndexOf
  ```javascript
  console.log(airline.indexOf("r")); // 6. indexOf
  console.log(airline.lastIndexOf("r")); // 10 lastIndexof
  console.log(airline.indexOf("Air")); // 4
  ```
- 2.2 slice (Creat a sub string, the original won't change, Thay are primitives)
  ```javascript
  console.log(airline.slice(4, 7)); // Air
  console.log(airline.slice(4)); // Air Portugal
  console.log(airline); // TAP Air Portugal ,
  ```
