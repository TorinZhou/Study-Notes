# NUMBERS, DATES, INTL AND TIMERS

## Numbers

- 1. Basic

  ```javascript
  console.log(23 === 23.0);
  //true
  console.log(0.1 + 0.2);
  // 0.3000000000004
  console.log(0.1 + 0.2 === 0.3);
  // false
  ```

- 2. Type coercion

  ```javascript
  console.log(+`23`);
  console.log(Number(`23`));
  ```

- 3. Number.parseInt() Number.parseFloat()

  ```javascript
  console.log(Number.parseInt(`30px`, 10));
  // 30rem => 30
  console.log(Number.parseInt(`1Fpx`, 16));
  // 31 ????
  console.log(Number.parseInt(`17px`, 8));
  // 15 ???
  console.log(Number.parseInt(`11px`, 2));
  // 7
  console.log(Number.parseInt(`px30`, 10));
  // NaN
  console.log(Number.parseInt(`   2.5rem`));
  // 2 (blocks won't count)
  console.log(Number.parseFloat(`    2.5rem`));
  // 2.5
  ```

- 4. Number.isNaN()

  > (true: number && NaN) (false:else)

  > Check if value is NaN (literally NaN)

  ```javascript
  (20 / 0); // Infinity
  (0 / 0); // NaN

  (+`23whatever`); // NaN
  (typeof (20 / 0)); // number Infinity
  (typeof (0 / 0)); // number NaN
  (typeof NaN); // number
  (typeof +`23whatever`); // number

  (Number.isNaN(20); // false
  (Number.isNaN(20 / 0); // false number but not a NaN
  (Number.isNaN(0 / 0); // true
  (Number.isNaN(NaN); // true
  ```

- 5. Number.isFinite()

  > Best way to check if a value is a number.

  ```javascript
  Number.isFinite(20); // true
  Number.isFinite(`20`); // false
  Number.isFinite(+`20`); // true
  Number.isFinite(23 / 0); // false
  ```

- 6. Number.isInteger()

  > Check Integer

  ```javascript
  console.log(Number.isInteger(23)); // true
  console.log(Number.isInteger(23.0)); // true
  console.log(Number.isInteger(23 / 0)); // false
  ```
