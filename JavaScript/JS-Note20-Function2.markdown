# FUNCTION 2

## Default Parameters

- example

  ```javascript
  const creatBooking = function (
    flightNum,
    numPassengers = 1,
    price = numPassengers * 200
  ) {
    // ES5 way of default parameters
    // numPassengers = numPassengers || 1;
    // price = price || 199;
    const bookingObj = {
      flightNum,
      numPassengers,
      price,
    };
    console.log(bookingObj); // {flightNum: 'whatever', numPassengers: 1, price: 200}
  };
  creatBooking("whatever", undefined, undefined);
  ```

## How Passing Arguments Works: Value vs. Reference

- Example 1: Change Parametered OBJs.

  ```javascript
  const flight = "LH234";
  const torin = {
    name: "Torin Zhou",
    passport: 123456,
  };
  const checkIn = function (flightNum, passenger) {
    // do a strange change
    flightNum = "MH333";
    passenger.name = "Mr. " + passenger.name;
    if (passenger.passport === 123456) {
      console.log("Check in");
    } else {
      alert("Wrong passport");
    }
  };
  console.log(flight); // LH234
  console.log(torin); // {name: 'Torin Zhou', passport: 123456}
  checkIn(flight, torin);
  console.log(flight); // LH234
  console.log(torin); // {name: 'Mr. Torin Zhou', passport: 123456}
  // primitive are totally different copies, in arguments.
  // when pass to functions: objs are references. point to the same obj.
  // whatever we change the arguments reference, it will affect the original.
  ```

- Example 2: Two function manipulate the same OBJ.

  ```javascript
  const newPassport = function (person) {
    person.passport = math.trunc(Math.random() * 10000000);
  };
  newPassport(torin);
  checkIn(flight, torin); // wrong password
  ```

- Passing by Value/Reference
  <pre>
  JavaScrip does not has passing by Reference. 
  The reference we pass 'Torin', is still a value</pre>

## First-Class and Higher-Order Functions

- FirstClass Function is Just a Concept
  - Meaning JS Functions are value, nothing more
- While Higher-Order is a practice
  ![](img/firstClassFunction.png)

## Functions Accepting Call back Functions

- Example 1: Callback function(function with out (parameter))

  ```javascript
  const oneWord = function (str) {
    return str.replaceAll(" ", "").toLowerCae();
  };
  const upperFirstWord = function (str) {
    const [first, ...others] = str.split(" ");
    return [first.toUpperCase(), ...others].join(" ");
  };
  // Higher-Order Function
  const transformer = function (str, fn) {
    // fn is callback function. transformer()is higher order function
    console.log(`Original String: ${str}`);
    console.log(`Transfored string: ${fn(str)}`);
    console.log(`Transforemd by: ${fn.name}`); // fn also has method
  };
  transformer("JS is the best", upperFirstWord); // only passing the function value. not calling it right now.
  ```

## Functions Returning Functions

### a

```javascript
const x = 11111;
```

## The call and aplly Methods

- Example 1

  ```javascript
  const lufthansa = {
    airline: "Lufthansa",
    iataCode: "LH",
    bookings: [],
    // book : function(flightNum) {
    // (enhanced mothod iteral)}
    book(flightNum, name) {
      console.log(
        `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
      );
      this.bookings.push({
        flight: `${this.iataCode}${flightNum}`,
        name,
      });
    },
  };
  const eurowings = {
    airline: "Eurowings",
    iataCode: "EW",
    bookings: [],
  };
  const swiss = {
    airline: "Swiss Aie Lines",
    iataCode: "LX",
    bookings: [],
  };
  lufthansa.book(222, "Torin");
  console.log(lufthansa.bookings);
  const book = lufthansa.book;
  book.call(lufthansa, 223, "Torin");
  book.call(eurowings, 223, "Torin");
  ```

## The bind MeThod

- Example 1

  ```javascript
  const bookEU = book.bind(eurowings);
  bookEU(24, "Kobe Byrant");
  // Kobe Byrant booked a seat on Eurowings flight EW24
  ```

## Coding Challenge #1

- Example 1

  ```javascript
  const bookEU = book.bind(eurowings);
  bookEU(24, "Kobe Byrant");
  // Kobe Byrant booked a seat on Eurowings flight EW24
  ```

## Immediately Invoked Function Expression (IIFE)

- Example 1

  ```javascript
  const bookEU = book.bind(eurowings);
  bookEU(24, "Kobe Byrant");
  // Kobe Byrant booked a seat on Eurowings flight EW24
  ```

## Closures

- Example 1

  ```javascript
  const bookEU = book.bind(eurowings);
  bookEU(24, "Kobe Byrant");
  // Kobe Byrant booked a seat on Eurowings flight EW24
  ```

## More Closure Examples

- Example 1

  ```javascript
  const bookEU = book.bind(eurowings);
  bookEU(24, "Kobe Byrant");
  // Kobe Byrant booked a seat on Eurowings flight EW24
  ```

## Coding Challenge #2

- Example 1

  ```javascript
  const bookEU = book.bind(eurowings);
  bookEU(24, "Kobe Byrant");
  // Kobe Byrant booked a seat on Eurowings flight EW24
  ```
