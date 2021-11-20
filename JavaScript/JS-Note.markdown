# JAVASCRIPT NOTES

- SWITCH (Don't forget the break !!!)

  ```javascript
  const day = "friday";
  switch (day) {
    case "monday": // day === 'monday'
      console.log("Plan course structure");
      console.log("Go to coding meetup");
      break;
    case "tuesday":
      console.log("Prepare theory videos");
      break;
    case "wednesday":
    case "thursday":
      console.log("Write code examples");
      break;
    case "friday":
      console.log("Record videos");
      break;
    case "saturday":
    case "sunday":
      console.log("Enjoy the weekend :D");
      break;
    default:
      console.log("Not a valid day!");
  }
  ```

---

- STATEMENT & EXPRESSIONS

  - Expression: A piece of code that produce a value.

    - 3 + 4

    - 1990

    - true && fause && true

  - Statement: A biger piece of code that is excuted and which dose not produce a value on itself.

    - if/else statement

    - it's like our actions translate to code

  - In template literal, we can only insert expressions.

    - console.log(\`This is Templat Literal \${Insert A Expression here} \`);

---

- CONDITION (TERNARY)

  ```javascript
  const age = 23;
  age >= 18 ? console.log(`wine`) : console.log(`water`);

  const drink = age > 18 ? `wine` : `water`;
  console.log(drink);

  console.log(`I like to drink ${age > 18 ? wine : water}`);
  ```

---

- STRICT MODE

  - Strict Mode forbid us from doing certain things.

    - such as it will reserver some keyword that will come in the future (such as 'private' 'interface')

  - It can creat visialbe errors while javascript will fail silently withou it,

    - such as undefine error. (assign but undefined , it will now give a error)

---

- FUNCTION (function declaration)

  - IT's a piece of code we can reuse over and over again

  - IT's like a variable, but with a whole chunks of code.

  - Variable holds value. Funtion holds multiple lines of code.

  - calling/ running/ invoking the function

  - Function can receive data, and returen data back. (Like a machine)

  - Parameters will be defined once we call the fuction. And they repersent the input data of the funtion.

  ```javascript
  fuction fruitProcesser(apple, orange) {
    console.log(apple, orange);
    const juice = `A juice with ${apple} apples and ${orange} oranges`;
    reutrn juice;
  }

  ```

  - When we pass apple=5 orange=3 , 5 and 3 are called arguments

  - That is : We pass the arguments to be parameters.

  - A parameter is a variable in a method definition. When a method is called, the arguments are the data you pass into the method's parameters.

  - **Parameter** is variable in the declaration of function.

    **Argument** is the actual value of this variable that gets passed to function.

  - CLEAN CODE: Don't repeat yourself. (Dry code).

  - For example: console.log('1111111'); '11111111' is the argument

---

- ANONYMOUS FUNTIONs (Funtion expressions)

  - function **calcAge** ('birthYear') {return 2077 - birthYear};

  <!---->

  - const calcAge = function ('birthYear') {return 2077 - birthYear};

  - THE Second one is Anonymous Funtion, It has no name. And it's just like an EXPERSSION, (expression product a value)

  - In JS, funtion are just values, not types.

  - Because they are values, we can store them in variables. That's Anonymous Funtion.

  - WE can call a function declaration brfore define the function

  ```javascript
  const age = calacAge(1990);
  function calcAge ('birthYear') {
    return 2077 - birthYear};
  ```

  - IT'S just personal style weather or not use funtion declaration of funtion expression.

---

- ARROW FUNCTION (Since ES6)

  - It's a shortened and easy-to-write Function Expression.

  - it will implictly return the value, no need to write "return" **if has only one line**.
  - it will implictly return the value, no need to write "return" **if has only one line**.
  - it will implictly return the value, no need to write "return" **if has only one line**.

  - for example ,LET SEE THE DIFFERENCE BETWEEN arrow and expression functions.

  - Most important: Arrow function do not have 'This' keyword.

  - When using Arrow Functions, If the Function body has multiple expressions, we need a return key word.

  ```javascript
  const calc = function (parameter) {
    return some expresssion;
  }
  const calc = parameter => some experssion;

  const calc = parameter => {
    experssion 1;
    experssion 2;
    return someValue;
  }
  const calc = (parameter1, parameter2) => {
    experssion 1;
    experssion 2;
    return someValue;
  }
  ```
