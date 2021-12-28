# OOP

## Concept of OOP

![](img/oop1.png)

![](img/oop2.png)

- Abstraction

  ![](img/oop3.png)

- Encapsulation

  ![](img/oop4.png)

- Inheritance

  ![](img/oop5.png)

- Polymorphism

  ![](img/oop6.png)

## OOP in JavaScript

![](img/oop7.png)

![](img/oop8.png)

## Constructor Functions & the new Operator

- Example

  ```javascript
  // Constructure Funtion construct Obj
  const Person = function (firstName, birthYear) {
    console.log(this); // Person {}
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
    // Never do this
    // this.calcAge = function () {
    //   console.log(2037 - this.birthYear);
    // };
    // We should use prototype inheritance
    // instead of creat method for each of the instance
  };
  // NO Arrow Function.
  // Arrow Funtions have no this keyword
  const torin = new Person("Torin", 1990);
  console.log(torin);
  // What new have done:
  // 1. a empty obj {} named Person is created
  // 2. function is called,  the this keyword point to {} in 1
  // 3. {} linked to prototype
  //     `torin.__proto__ === Person.prototype`
  // 4. function automatically return {}
  console.log(torin instanceof Person); //true
  ```

  ## Prototypes

  > Each and every function in JavaScript automatically has a property called prototype. That includes constructor functions.

  > Every OBJ that's created by a certain constructor function will get access to all te methods and properties we define on the constructors prototype property.

  > E.g.: Person is a constructor. Person.prototype is its prototype property which is an OBJ. While instance Torin is a subOBJ, and Torin's prototype `torin.__proto__` is exactly === Person's prototype property.

  > Person.prototype is not the prototype of Person, instead its will be the prototype of all OBJs created by Person.

  > In this way, we only need to have a particular method in a single prototype OBJ, rather than have multiple same methods in every instance.

  - Example

  ```javascript
  const Person = function (firstName, birthYear) {
    console.log(this); // Person {}
    this.firstName = firstName;
    this.birthYear = birthYear;
  };
  Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
  console.log(Person.prototype);
  console.log(torin.__proto__);
  // {calcAge: ƒ, constructor: ƒ}
  console.log(torin.__proto__ === Person.prototype);
  // true
  torin.calcAge(); // will work
  // test proto
  // Why Person.prototype has this isPrototyprOf method???
  // What is the prototype of Person.prototype
  console.log(Person.prototype.isPrototypeOf(torin)); // ture
  console.log(Person.prototype.isPrototypeOf(Person)); // false
  ```

  - Add properties on the prototype

  ```javascript
  Person.prototype.species = "Homo Sapiens";
  torin.hasOwnProperty("firstName"); // true
  torin.hasOwnProperty("species"); // false
  ```

## Prototype Inheritance & Prototype Chain

- ![](img/oop9.png)
