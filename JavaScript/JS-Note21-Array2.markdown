# ARRAYS✨✨

![array1](img/array1.svg)

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

- Method which Mutate Original Array

  - 🎁Splice

    ```javascript
    arr = ["a", "b", "c", "d", "e"];
    arr.splice(); //[] ; take noting
    arr;
    arr.splice(-1); //[a, b, c, d,]; remove last one
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
  for (const movement of movements) {
    if (movement > 0) {
      console.log(`You deposited ${movement}`);
    } else {
      console.log(`You withdrew ${Math.abs(movement)}`);
    }
  }
  movements.forEach(function (movement) {
    if (movement > 0) return console.log(`You deposited😂 $ {movement}`);
    if (movement < 0)
      return console.log(`You withdrew😊 ${Math.abs(movement)}`);
  });
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
