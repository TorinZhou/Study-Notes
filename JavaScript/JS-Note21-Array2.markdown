# ARRAYS✨✨

![array1](img/array1.svg)

## Simple Array Methods

- Method which won't Mutate Original Array

  - Slice

    ```javascript
    let arr = ["a", "b", "c", "d", "e"];
    [...arr]; //[a, b, c, d, e]  CPOY TRICK 1
    arr.slice(); // [a, b, c, d, e]  COPY TRICK 2
    arr.slice(1); // [b, c, d, e]
    arr.slice(-1); // [e]
    arr.slice(2, 4); // [c, d]
    arr; // [a, b, c, d, e]
    ```

  - asdf

- Method which Mutate Original Array

  - Splice

    ```javascript
    arr = ["a", "b", "c", "d", "e"];
    console.log(arr.splice()); //[]
    console.log(arr);
    console.log(arr.splice(-1)); //[a, b, c, d,]; remove last one
    console.log(arr); //[a, b, c, d]
    console.log(arr.splice(1, 3)); // [b, c, d] ; take 2 ele
    console.log(arr); //[a]
    ```
