# NUMBERS, DATES, INTL AND TIMERS

## Numbers (Section 170 2021.12.20)

- 1. Basic 🎉🎉🎉

  ```javascript
  console.log(23 === 23.0);
  //true
  console.log(0.1 + 0.2);
  // 0.3000000000004
  console.log(0.1 + 0.2 === 0.3);
  // false
  ```

- 2. Type coercion 🎉🎉🎉

  ```javascript
  console.log(+`23`);
  console.log(Number(`23`));
  ```

- 3. Number.parseInt() Number.parseFloat() 🎉🎉🎉

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

- 4. Number.isNaN() 🎉🎉🎉

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

- 5. Number.isFinite() 🎉🎉🎉

  > Best way to check if a value is a number.

  ```javascript
  Number.isFinite(20); // true
  Number.isFinite(`20`); // false
  Number.isFinite(+`20`); // true
  Number.isFinite(23 / 0); // false
  ```

- 6. Number.isInteger() 🎉🎉🎉

  > Check Integer

  ```javascript
  console.log(Number.isInteger(23)); // true
  console.log(Number.isInteger(23.0)); // true
  console.log(Number.isInteger(23 / 0)); // false
  ```

![](img/cat3.jpg)

# Math and Rounding

- square root

  ```javascript
  console.log(Math.sqrt(25)); // 5
  console.log(25 ** (1 / 2)); // 5
  console.log(8 ** (1 / 3)); // 2
  console.log(Math.max(5, 18, `23`, 11, 2)); // 23
  console.log(Math.max(5, 18, `23px`, 11, 2)); // NaN
  console.log(Math.min(1, 2, 3, 4));
  console.log(Math.PI * Number.parseFloat(`10px`) ** 2);
  console.log(Math.trunc(Math.random() * 6) + 1); // 1~6
  const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min) + 1) + min;
  console.log(randomInt(1, 5)
  ```

- Roundiung Integers

  ```javascript
  Math.trunc(-22.9); // -22
  Math.floor(-22.9); // -23
  Math.ceil(22.2);
  Math.round(22.3);
  ```

- Rounding decimals

  ```javascript
  (2.7).toFixed(3); //  return a string 2.700
  ```

  ![](img/cat2.jpg)

# REMINDER

- Usage 1 : Do something every Nth time.

  ```javascript
  labelBalance.addEventListener("click", function () {
    const arr = document.querySelectorAll(".movements__row");
    console.log(arr); //  NodeList(8)
    console.log(...arr);
    console.log([...arr]); // convert NodeList(8)  to real Array(8)
    [...document.querySelectorAll(".movements__row")].forEach(function (
      row,
      i
    ) {
      if (i % 2 === 0) row.style.backgroundColor = "cyan";
    });
  });
  ```

  ![](img/number1.png)

# ES2021: Numeric Separators

- example
  ```javascript
  const diameter = 287_460_000_000; // 287,460,000,000
  const priceInCents = 345_99; // 345.99 $ = 34599 cents
  const transferFee1 = 15_00;
  const transferFee2 = 1_500; // two same number
  console.log(Number("23_000")); // NaN
  console.log(parseInt("23_000")); // 230
  ```

# ES2020: Bigint

> 64bits: 53bits to store the number itself, while the rest bits will be used to store the decima and sign.

```javascript
// before ES2020
console.log(2 ** 53 - 1); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(2 ** 53 + 100); // 9007199254741092
```

```javascript
console.log(467373838383838383838473877777773333333);
// 4.673738383838384e+38 loose precise
console.log(467373838383838383838473877777773333333n);
// 467373838383838383838473877777773333333n
console.log(BigInt(467373838383838383838473877777773333333));
// 467373838383838377927141645154082881536n;
console.log(12345n ** 9n);
// 6659166111488656281486807152009765625n
// notice that we cannot mix BigInt and other type. (expect logical)
// like 12345n ** 9 => error
(20n === 20)(
  // false different primitive type
  20n == 20
); // true (type corcion)
```

```javascript
console(10n / 3n); // 3n
console(10 / 3); // 3.33333333335
```

![](img/cat4.png)
