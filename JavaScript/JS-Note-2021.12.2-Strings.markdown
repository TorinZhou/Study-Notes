# STRINGS

## 1. JUST LIKE AN ARRAY

const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]); // A
console.log(plane[1]); // '3'
console.log(airline.length); // 16

## 2. METHODS

- 2.1 IndexOf
  ```javascript
  console.log(airline.indexOf("r")); // 6. indexOf
  console.log(airline.lastIndexOf("r")); // 10 lastIndexof
  console.log(airline.indexOf("Air")); // 4
  ```
- 2.2 Slice (Creat a sub string, the original one won't change, because Thay are primitives)
  ```javascript
  console.log(airline.slice(4, 7)); // Air
  console.log(airline.slice(1, -1)); // AP Air Portuga
  console.log(airline.slice(4)); // Air Portugal
  console.log(airline); // TAP Air Portugal ,
  console.log(airline.slice(0, ariline.indexOf(" "))); //Tap. trick of first" "
  console.log(airline.slice(airline.lastIndexOf(" ") + 1)); // Portugal; trick of last indexOf''
  ```
- 2.3 Seat map practice
  ![](A320SeatMap.png)

  ```javascript
  // Check weather a seat is a middle seat: B or E.
  const checkMiddleSeat = function (seat) {
    const checker = seat.slice(-1);
    if (
      checker === "B" ||
      checker === "E" ||
      checker === "b" ||
      checker === "e"
    )
      return true;
    else return false;
  };
  console.log(checkMiddleSeat(prompt("type in seat: 😂")));
  ```

- 2.4 Why a Primitive String has Method

  > Javascript has a property called coercion when it comes to primitives; it silently converts the primitive to any object and then accesses the prototype method of the newly constructed number object.
  > After all this, Delete the object.

  ```javascript
  // behinde the scene
  // JS do this automatically, and delete the Obj after the call
  console.log(new String("11B").slice(-1)); // B
  ```

- 2.5 Case transform

  ```javascript
  console.log(airline.toLowerCase());
  console.log(airline.toUpperCase());
  console.log(airline.toLocaleLowerCase()); // ?
  ```

- 2.6 Trim

  ```javascript
  const badEmail = " torinZhou@GMAIL.COM \n";
  const goodEmail = badEmail.toLowerCase().trim();
  console.log(goodEmail); // torinzhou.gmail.com
  1;
  // Since ES2019
  // ' ddd '.trimLeft();
  // ' ddd '.trimRight();
  // ' ddd '.trimStart();
  // ' ddd '.trimEnd();
  ```

- 2.7 Replacing

  ```javascript
  const priceGB = "288,97£";
  const priceUS = priceGB.replace("£", "$").replace(",", ".");
  console.log(priceUS);
  const announcement =
    "All passengers come to bording door 23. Boarding door 23!";
  console.log(announcement.replace("door", "gate"));
  console.log(announcement.replace(/door/g, "gate"));
  // /door/g, g stands for globle.
  ```

  > // replace the first 'door', replaceAll is now included in MDN documentation and the ECMA-262 (2021) spec, but
  > replaceAll still isn't widely available in all browsers.
  > // now use regular expression instead

- 2.8 Bolleans: includes(), startsWith(), endsWith()

  ```javascript
  const plane = "Airbus A320neo";
  console.log(plane.includes("A320")); //true
  console.log(plane.startsWith("Air")); //true
  console.log(plane.endsWith("neo")); //true
  ```

- 2.9 split() join()

  ```javascript
  const str = "a+very+nice+string";
  console.log(str.split("+")); // (4) ['a', 'very', 'nice', 'string']
  const [firstName, lastName] = "Torin Zhou".split(" ");
  console.log(firstName);
  const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
  console.log(newName);
  ```

- 2.10 Padding

  ```javascript
  const message = "Go to gate 23!";
  console.log(message.padStart(20, "+")); // ++++++Go to gate 23!
  console.log(message.padEnd(20, "+")); // Go to gate 23!++++++
  ```

  ```javascript
  // mask credit card function
  const maskCreditCard = function (number) {
    const str = number + ""; // add an empty string
    const last = str.slice(-4);
    return last.padStart(str.length, "*");
  };
  console.log(maskCreditCard(4581230118540949));
  maskCreditCard("4581230118540949");
  ```

## CHALLENGE

- Description
  Write a program that receives a list of variable names written in underscore_case and convert them to camelCase. The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.
  Test data (pasted to textarea, including spaces): underscore_case first_name Some_Variable calculate_AGE delayed_departure
  Should produce this output (5 separate console.log outputs): underscoreCase ✅ firstName ✅✅ someVariable ✅✅✅ calculateAge ✅✅✅✅ delayedDeparture ✅✅✅✅✅
- My Solution

  ```javascript
  document.body.append(document.createElement("textarea"));
  document.body.append(document.createElement("button"));
  document.querySelector("button").addEventListener("click", function () {
    const text = document.querySelector("textarea").value;
    const textArr = text.split(" ");
    const textArrOptm = [];
    for (const str of textArr) {
      if (str.length !== 0) {
        textArrOptm.push(str.toLowerCase());
      }
    }
    console.log(textArrOptm); // ['underscore_case', 'first_name', 'Some_Variable', 'calculate_AGE', 'delayed_departure']
    let i = 1;
    for (const strLower of textArrOptm) {
      const [first, second] = strLower.split("_");
      const resultRough =
        first + second.replace(second[0], second[0].toUpperCase());
      const finalText = resultRough.padEnd(25, " ") + "".padEnd(i, "✅");
      console.log(finalText);
      i++;
    }
  });
  ```
