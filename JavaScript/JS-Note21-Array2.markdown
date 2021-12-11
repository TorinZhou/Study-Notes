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

## LOOPING ARRAYS : forEach

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
  }); // forEach will call the callback function, pass in   current element as argument for the callback function.
  // 0: function(200)
  // 1: function(450)
  // 2: function(-400)
  // We ues a callback function to tell a higherOrder function  exactly what it should do
  ```
