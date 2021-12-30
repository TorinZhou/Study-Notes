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
