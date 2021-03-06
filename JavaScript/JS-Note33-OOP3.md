# OOP3

## Inheritance Between "Classes": Constructor Fn

- Overview

  ![](img/oop12.png)

- Example

  ```javascript
  const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  };
  Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
  const Student = function (firstName, birthYear, course) {
    // this.firstName = firstName;
    // this.birthYear = birthYear;
    // OR
    // Person(firstName, birthYear)
    // This Person() won't work
    // cause in rugular fn(without new) ,this=>undefine
    Person.call(this, firstName, birthYear);
    this.course = course;
  };
  Student.prototype = Object.create(Person.prototype);
  // Object.create will return an empty object (but linked)
  Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName}`);
  };
  const torin = new Student("Torin", 1990, "Gramma");
  torin.introduce();
  torin.calcAge();
  ```

- Slides

  ![](img/oop13.png)

  ![](img/oop14.png)

  ![](img/oop15.png)

  ```javascript
  console.dir(Student.prototype.constructor);
  torin instanceof Student; // true
  torin instanceof Person; // true
  torin instanceof Object; // true (one chain)
  // ƒ Person(firstName, birthYear)
  // FIX
  Student.prototype.constructor = Student;
  ```

## Coding Challenge

- challenge

  > Your tasks:

  > 1. Use a constructor function to implement an Electric Car (called 'EV') as a child "class" of 'Car'. Besides a make and current speed, the 'EV' also has the current battery charge in % ('charge' property)

  > 2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo'

  > 3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%'

  > 4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! Hint: Review the definiton of polymorphism 😉

  > Test data: § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%

- code

  ```javascript
  const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
  };
  Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h.`);
  };
  const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
  };
  EV.prototype = Object.create(Car.prototype);
  EV.prototype.consturtor = EV;
  EV.prototype.chargeBattery = function (charteTo) {
    this.charge = charteTo;
  };
  EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge -= 1;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
    );
  };
  const tesla = new EV("Tesla", 120, 99);
  tesla.accelerate();
  tesla.accelerate();
  tesla.chargeBattery(100);
  ```

  > This two different accelerate fn implement polymorphism

## Inheritance Between "Classes": ES6 Class

- Example

  ```javascript
  class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
      // Always needs to happen first
      // super first or there's no this
      super(fullName, birthYear);
      this.course = course;
    }
  }
  const torin = new StudentCl("Torin", 2000);
  ```

## Inheritance Between "Classes": Object.create

- Example

  ```javascript
  const PersonProto = {
    calcAge(){
      console.log(2037 - this.birthYear);
    }
    init(firstName, birthYear)[
      this.firstName = firstName;
      this.birthYear = birthYear;
    ]
  }
  const StudentProto = Object.create(PersonProto);
  StudentProto.init = function(firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
  }
  StudentProto.introduce = function(){
    console.log("This is a static method!");
  }
  const torin = Object.creat(StudentProto);
  torin.init("Torin", 2020, "Computer Since");
  ```

## Another Example

```javascript
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currtncy = currency;
    this._pin = pin;
    this._movements = [];
    this.locale = navigator.language;
  }
  getMovements() {
    return this._movements;
  }
  deposit(val) {
    this.movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }
  _approveLoan() {
    return true;
  }
  requestLoan(val) {
    if (this.appeoveLoan()) {
      console.log("OK");
    }
  }
}
const acc1 = new Account("Torin", "EUR", 1111);
```

## Private Class Fields and Methods\

- Example

  > Public(Instance) Fields

  > Private Fields

  > Public Method

  > Private Method

  > Fields are on instance , will not be added to protootype

  ```javascript
  class Account {
    // Public Field
    locale = navigator.language;
    // private fields
    #movements = []; //
    #pin;
    constructor(owner, currency, pin) {
      this.owner = owner;
      this.currtncy = currency;
    }
    getMovements() {
      return this.#movements;
    }
    deposit(val) {
      this.#movements.push(val);
      return this;
    }
    withdraw(val) {
      this.deposit(-val);
      return this;
    }
    requestLoan(val) {
      if (this.appeoveLoan()) {
        console.log("OK");
      }
    }
    // Private methods
    #approveLoan() {
      return true;
    }
  }
  ```

## ES6 Classes Summary

![](img/oop16.png)
