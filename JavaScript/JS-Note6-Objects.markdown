# OBJECTS

Another JavaScript Data Structure. (the first one is Array)

- In array, we can't name a specific element in it. All it has is index number.

  to solve this problem. we have another data structure.

- Objects: we create KEY---VALUE pairs.

- for example, the first one is Object, second one is Array.

  ```javascript
  const year = {
    first: 1990,
    second: 1991,
    third: 1992,
  };
  const year = [1990, 1991, 1992];
  ```

- Key is also called property. We can say that year{} has 3 properties.

# OBJECT LITERAIL SYNTAX

`const year = { , , ,};`

- Build object this way is call object literail sytax because we are literally writing down the entire object contents.

- **The** **order of the properties does not matter** at all when we want to retrieve them later.

# RETRIEVE/CHANGE DATA USING DOT/BRACKET NOTATION

- DOT NOTATION

  - `year.first;`

  - the dot between is an operater. IT's called MEMBER ACCESS

- BRACKET NOTATION

  - `year['first']; `

  - the dot between in dot notation is an operater. IT's called MEMBER ACCESS, And the \[] in Bracket notation, is an operater too, called COMPUTED MEMBER ACCESS. SEARCH "MDN OPERATOR PRECEDENCE"

  - We can get that 'first' string by some kind of expression.

  - We use real property name in dot notation.

  - When we have to compute to get the property name, we use bracket notation.

- example: we get the property name from prompt. in this case. if we use `year.getProperty` , we will get a undefine. because object year does not have a property named by getProperty. So we have to use bracket notation.

```javascript
const getProperty = prompt("Type in which year you want to get.");
const whatWeGet = year[getProperty];
```

# TAKE ADVANTAGE OF UNDEFINED

- As we know that year\[notExist] is undefined. IT's a false value. we can. put it in if/else.

# USE DOT/BRACKET NOTATION TO ADD NEW PROPERTIES

- `year.forth = 2010;`

- `year['forth'] = 2010;`

- It's just like array. but replace the index number to a string 'key'.

# OPERATOR "." AND "\[]"

- the dot between in dot notation is an operater. IT's called MEMBER ACCESS,

- And the \[] in Bracket notation, is an operater too, called COMPUTED MEMBER ACCESS.

- SEARCH "MDN OPERATOR PRECEDENCE"

- THEY both have a very high priority and both are left to right. (important)

# METHOD OF OBJECTS. (Any function attached to a Object is called method)

- As We all know, functions are just values.

- And OBJECTS are multiple pairs of KEY --- VALUE.

- So we can make functions to be KEY --- FUNCTION pairs.

- so we add a function expression to the object.(it produce value)

  ```javascript
  const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    birthYear: 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"],
    hasDriverLicense: true,
    <!-- calcAge: function (birthYear) {
      return 2037 - birthYear;
    }, -->
    <!-- calcAge: function () {
      return 2037 - this.birthYear;
    }, -->
    calcAge: function () {
      this.age =  2037 - this.birthYear;
      return this.age;
    },
    <!-- store this.age won't neet to calc next time. -->
  };
  console.log(jonas.calcAge());
  <!-- console.log(jonas["calcAge"](1991)); -->
  ```

- "THIS" keyword represent whatever calling the method. in this case it's jonas.

- why we use this.birthYear ? rather than jonas.birthYear.

- Because if we change jonas to jonas2, It will still work.

# METHOD PROBLEM

- without method.
- in getName2, this.firstName will throw an undefine.
- this.middleName throw an undefine as well.
- aPerson.lastName throw an error "Cannot access `aPerson` before initialization".

```javascript
const aPerson = {
  firstName: "Michael",
  lastName: "Jordan",
  getName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  getName2: `${this.firstName} ${this.middleName} ${aPerson.lastName} `,
};
console.log(aPerson.getName());
console.log(aPerson.getName2);
```
