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

- Change Parametered OBJs. Example 1:

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

### a

```javascript
const x = 11111;
```

## Functions Accepting Call back Functions

### a

```javascript
const x = 11111;
```

## Functions Returning Functions

### a

```javascript
const x = 11111;
```

## The call and aplly Methods

### a

```javascript
const x = 11111;
```

## The bind MeThod

### a

```javascript
const x = 11111;
```

## Coding Challenge #1

### a

```javascript
const x = 11111;
```

## Immediately Invoked Function Expression (IIFE)

### a

```javascript
const x = 11111;
```

## Closures

### a

```javascript
const x = 11111;
```

## More Closure Examples

### a

```javascript
const x = 11111;
```

## Coding Challenge #2

### a

```javascript
const x = 11111;
```

```

```
