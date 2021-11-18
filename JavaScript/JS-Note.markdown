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

- CONDITION (TERNARY)

  ```javascript
  const age = 23;
  age >= 18 ? console.log(`wine`) : console.log(`water`);

  const drink = age > 18 ? `wine` : `water`;
  console.log(drink);

  console.log(`I like to drink ${age > 18 ? wine : water}`);
  ```
