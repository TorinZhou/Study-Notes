# ARRAYS✨✨

![array1](img/array1.svg)

![array1](img/array6.svg)

## Simple Array Methods

- Method which won't Mutate Original Array

  - 🎁Slice

    ```javascript
    let arr = ["a", "b", "c", "d", "e"];
    [...arr]; //[a, b, c, d, e]  CPOY TRICK 1
    arr.slice(); // [a, b, c, d, e]  COPY TRICK 2
    arr.slice(1); // [b, c, d, e]
    arr.slice(-1); // [e]
    arr.slice(2, 4); // [c, d]
    arr; // [a, b, c, d, e]
    ```

  - 🎁Concat

    ```javascript
    const arr3 = ["a", "b"];
    const arr4 = ["c", "d"];
    console.log(arr3.concat(arr4)); //[abcd]
    console.log(arr3); //[ab]
    console.log(arr4); //[cd]
    console.log([...arr3, ...arr4]); // [abcd]
    ```

  - 🎁Join (Ruturn string)
    ```javascript
    console.log(arr3.concat(arr4).join("🎈")); // a🎈b🎈c🎈d
    ```
  - 🎁Map (Ruturn array)
    ```javascript
    map(function(element, index, array) { //... }, thisArg)
    ```

- Method which Mutate Original Array

  - 🎁[Splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

    > The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().

    ```javascript
    // SYNTAX
    splice(start);
    splice(start, deleteCount);
    splice(start, deleteCount, item1);
    splice(start, deleteCount, item1, item2, itemN);
    ```

    ```javascript
    arr = ["a", "b", "c", "d", "e"];
    arr.splice(); //[] ; take noting
    arr;
    arr.splice(-1); //[e]; remove last one
    arr; //[a, b, c, d]
    arr.splice(1, 3); // [b, c, d] ; take 3 elements
    arr; //[a]
    ```

  - 🎁Reserve

    ```javascript
    const arr2 = ["j", "i", "h", "g", "f"];
    console.log(arr2.reverse()); //[fghij]
    console.log(arr2); //[fghij]
    ```

## AT METHOD 😑 array.at()

- At means position.(negetive OK); [] means index (NO negetive)

  ```javascript
  const arr = [22, 11, 64];
  arr[0]; // 12
  arr.at(-1); //  64  [0] means index  at(0) means     position
  ```

- get the last element
  ```javascript
  arr[arr.length - 1]; //64 bad
  ...arr.slice(-1); //64
  arr.slice(-1)[0]; //64
  arr.at(-1); //64 👏👏👏
  ```
- At also work in strings
  ```javascript
  "TorinZhou".at(-1); // 'u'
  ```

## LOOPING ARRAYS : forEach 😜

- forEach 🆚 for...of
  ```javascript
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
  // for..of
  for (const movement of movements) {
    if (movement > 0) {
      console.log(`You deposited ${movement}`);
    } else {
      console.log(`You withdrew ${Math.abs(movement)}`);
    }
  }
  // forEach
  movements.forEach(function (movement) {
    if (movement > 0) return console.log(`You deposited😂 $ {movement}`);
    if (movement < 0)
      return console.log(`You withdrew😊 ${Math.abs(movement)}`);
  });
  // Torin from the future: rewrite using map+arrFn
  const movementsDescriptions = movements.map(
    (mov, i, arr) =>
      `Movement ${i + 1}: 
    ${mov > 0 ? "You depositd😂" : "You withdrew😊"}${Math.abs(mov)}`
  );
  // forEach will call the callback function, pass in   current element as argument for the callback function.
  // 0: function(200)
  // 1: function(450)
  // 2: function(-400)
  // We ues a callback function to tell a higherOrder function  exactly what it should do
  ```
- Access the counter variable in the for...of loop
  ```javascript
  console.dir(movements.entries()); // Array Iterator
  for (const [i, movement] of movements.entries()) {
    console.log(`${i}`); //0 1 2 3 4 5 6 7
  }
  ```
- Access the counter variable in the forEach loop

  ```javascript
  movements.forEach(function (mov, i, arr) {
    console.log(`${i}:${mov} of [${arr}]`);
  });
  ```

  > 🔀 MDN: The forEach() method executes a provided function once for each array element.

  > 🔀 the order of mov,i,arr is important. beasuse they are what forEach() will pass.(When it call the callback) We are just take it using our own callback function.

  > 🔀 in forEach :[ele,i,correntArr]

  > 🔀 in arr.entries() :[i,ele]

- Break. forEach has no continue/break

  ![arr3](img/array3.png)

- MDN: Syntax
  ```javascript
  // 💥Arrow function💥
  forEach((element) => { ... } )
  forEach((element, index) => { ... } )
  forEach((element, index, array) => { ... } )
  // 💥Callback function💥
  forEach(callbackFn)
  forEach(callbackFn, thisArg)
  // 💥Inline callback function💥
  forEach(function(element) { ... })
  forEach(function(element, index) { ... })
  forEach(function(element, index, array){ ... })
  forEach(function(element, index, array) { ... }, thisArg)
  ```
- MDN: Using thisArg
  - The following (contrived) example updates an object's properties from each entry in the array:
  ```javascript
  function Counter() {
    this.sum = 0;
    this.count = 0;
  }
  Counter.prototype.add = function (array) {
    array.forEach(function countEntry(entry) {
      this.sum += entry;
      ++this.count;
    }, this);
  };
  const obj = new Counter();
  obj.add([2, 5, 9]);
  obj.count;
  // 3
  obj.sum;
  // 16
  ```
  - Since the thisArg parameter (this) is provided to forEach(), it is passed to callback each time it's invoked. The callback uses it as its this value.
    > Note: If passing the callback function used an arrow function expression, the thisArg parameter could be omitted, since all arrow functions lexically bind the this value.

## forEach for Maps and Sets

- Maps

  ```javascript
  const currencies = new Map([
    ["USD", "United States dollar"],
    ["EUR", "Euro"],
    ["GBP", "Pound sterling"],
  ]);
  currenies.forEach(function (value, key, map) {
    // the Order of para are same as arrys.
  });
  ```

- Set
  ```javascript
  const a = new Set(["USD", "USD", "GBP", "EUR", "EUR"]);
  a.forEach(function (value, _, set) {
    consloe.log(`${value}`); //
  });
  ```
  > 🎉set has no key/index. the second para "\_" has no meaning just keep the syntex

## Data Transformations: map, filter, reduce

![array4](img/array4.png)

## Map method

- [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

  > The `map()` method **creates a new array** populated with the results of calling a provided function on every element in the calling array.

  ```javascript
  const array1 = [1, 4, 9, 16];

  // pass a function to map
  const map1 = array1.map(x => x \* 2);

  console.log(map1);
  // expected output: Array [2, 8, 18, 32]
  ```

- Syntax

  ```javascript
  // Arrow function
  map((element) => {// ... });
  map((element, index) => {// ...});
  map((element, index, array) => {/ ...});

  // Callback function
  map(callbackFn);
  map(callbackFn, 💥thisArg💥);

  // Inline callback function
  map(function (element) {// ... });
  map(function (element, index) {// ... });
  map(function (element, index, array) {// ... });
  map(function (element, index, array) {// ... }, 💥thisArg💥);
  ```

- Example

  ```javascript
  const movements = [1, 2, 3, 4, 5, -6, -7, -8, -9];
  const eruToUsd = 1.1;
  // 1.transform using map
  const movementsUSD = movements.map((mov, i, arr) => mov * eruToUsd);
  // 2.transform using forEach
  const movementsUSD3 = [];
  movements.forEach((mov) => movementsUSD3.push(mov * eruToUsd));
  // 3.transform using for...of
  const movementsUSD2 = [];
  for (let mov of movements) {
    movementsUSD2.push(mov * eruToUsd);
  }
  // 4. 👍
  const movementsDescriptions = movements.map(
    (mov, i, arr) =>
      `Movement ${i + 1}: 
    ${mov > 0 ? "You depositd😂" : "You withdrew😊"}${Math.abs(mov)}`
  );
  ```

## [Filter Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

- Filter
  > The `filter()` method **creates a new array** with all elements that pass the test implemented by the provided function.
- Example

  ```javascript
  const movements = [1, 2, 3, 4, 5, -6, -7, -8, -9];
  // filter mov > 0
  // elements > 0 will make it to the new array
  const arrAfter1 = movements.filter((mov, _, __) => mov > 0);
  // for...of loop
  const arrAfter2 = [];
  for (const mov of movements) {
    if (mov > 0) arrAfter3.push(mov);
  }
  // forEach
  const arrAfter3 = [];
  movements.forEach((mov, _, __) => {
    if (mov > 0) arrAfter4.push(mov);
  });
  ```

- Syntax

  ```javascript
  // Arrow function
  filter((element) => {
    /* ... */
  });
  filter((element, index) => {
    /* ... */
  });
  filter((element, index, array) => {
    /* ... */
  });

  // Callback function
  filter(callbackFn);
  filter(callbackFn, thisArg);

  // Inline callback function
  filter(function (element) {
    /_ ... _/;
  });
  filter(function (element, index) {
    /_ ... _/;
  });
  filter(function (element, index, array) {
    /_ ... _/;
  });
  filter(function (element, index, array) {
    /_ ... _/;
  }, thisArg);
  ```

- Implements ES2015

  - Searching in array

    ```javascript
    const fruits = ["apple", "banana", "grapes", "mango", "orange"];

    /**
     * Filter array items based on search criteria (query)
     */
    const filterItems = (arr, query) => {
      return arr.filter(
        (el) => el.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    };

    console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
    console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']
    ```

## [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

- reduce

  > The reduce() method executes a user-supplied “reducer” callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

  > The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise array element 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

  > The reducer walks through the array element-by-element, at each step adding the current array value to the result from the previous step (this result is the running sum of all the previous steps) — until there are no more elements to add.

- Syntax
  ```javascript
  // Callback function
  reduce(callbackFn);
  reduce(callbackFn, initialValue);
  // example
  const arr = [2, 3, 4, 5];
  const withInit = arr.ruduce((pre, cur, i, arr) => pre + cur); // 14
  const withoutInit = arr.ruduce((pre, cur, i, arr) => pre + cur, 1); // 15
  ```
- Example
  - Flatten an array of arrays 👍👍
    ```javascript
    let flattened = [
      [0, 1],
      [2, 3],
      [4, 5],
    ].reduce(
      (previousValue, currentValue) => previousValue.concat(currentValue),
      []
    );
    ```
  - Find Max 👍👍
    ```javascript
    const arr = [1, 2, 3, 4, 5, 6, 5, 4, 3];
    const max = arr.reduce(function (pre, cur, _, __) {
      return cur >= pre ? cur : pre;
    });
    ```

## [IndexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

- Syntax
  > The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
- Return value :
  > The first index of the element in the array; -1 if not found.

## Array.Find()

- Meaning
  > The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
- sytax
  ```javascript
  find(function (element, index, array) {//...}, thisArg);
  ```
- Example

  > to find a obj with certain owner

  ```javascript
  // 1. use find
  const findWithName1 = (name) => accounts.find((acc) => acc.owner === name);
  // 2. use for...of
  const findWithName2 = function (name) {
    for (const acc of accounts) {
      if (acc.owner === name) return acc;
    }
  };
  // 3. output
  const obj = findWithName2("Sarah Smith");
  console.log(obj);
  ```

## Array.include() TEST EQUALITY

## Array.some() TEST CONDITION

## Array.every() TEST CONDITION

## Array.flat() ES2019

- Syntax
  ```javascript
  array.flat();
  array.flat(depth);
  ```
- Example
  ```javascript
  // calc the over balance of all users in bankist
  const overAll = accounts
    .map((acc) => acc.movements)
    .flat(1)
    .reduce((acc, pre) => acc + pre, 0);
  ```

## Array.flatMap() ES2019

- Syntax

  > The flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of `depth 1`, but slightly more efficient than calling those two methods separately.

  ```javascript
  // Arrow function
  flatMap((currentValue, index, array) => {//...} )
  // Callback function
  flatMap(callbackFn)
  flatMap(callbackFn, thisArg)
  // Inline callback function
  flatMap(function(currentValue, index, array) {//.../ }, thisArg)
  ```

- Example
  ```javascript
  // calc the over balance of all users in bankist
  const overAll = accounts
    .flatmap((acc) => acc.movements)
    .reduce((acc, pre) => acc + pre, 0);
  ```

## Array.sort

- Syntax

  > The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

  > Specifies a function that defines the sort order. If omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value.

  > The time and space complexity of the sort cannot be guaranteed as it depends on the implementation

  > If compareFunction is supplied, all non-undefined array elements are sorted according to the return value of the compare function (all undefined elements are sorted to the end of the array, with no call to compareFunction).

  ```javascript
  // Functionless
  sort()
  // Arrow function
  flatMap((currentValue, index, array) => {//...} )
  // Callback function
  sort(compareFn)
  // Inline callback function
  sort(function compareFn(firstEl, secondEl) { /* ... */ })
  ```

  ![](img/array5.png)

- Example

  > To compare numbers instead of strings, the compare function can subtract b from a. The following function will sort the array in ascending order (if it doesn't contain Infinity and NaN):

  ```javascript
  // calc the over balance of all users in bankist
  function compareNumbers(a, b) {
    return a - b;
  }
  // The sort method can be conveniently used with function expressions:
  var numbers = [4, 2, 5, 1, 3];
  numbers.sort(function (a, b) {
    return a - b;
  });
  console.log(numbers);
  // [1, 2, 3, 4, 5]
  let numbers = [4, 2, 5, 1, 3];
  numbers.sort((a, b) => a - b);
  console.log(numbers);
  // [1, 2, 3, 4, 5]
  ```

## Array.from

- Example

  1. basic

  ```javascript
  const y = Array.from({ length: 7 }, () => 1);
  const y = Array.from({ length: 7 }, (_, i) => i + 1);
  ```

  2. convery ArrayLike to Real Array then we can use .map()

  ```javascript
  const movementsUI = Array.from(
    document.querySelectorAll(".moventments__value"),
    (el) => +el.textContent.replay("$", "")
  );
  ```

## Array.fill

- Example

  ```javascript

  ```
