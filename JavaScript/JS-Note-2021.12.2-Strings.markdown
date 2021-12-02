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
- 2.2 slice (Creat a sub string, the original one won't change, because Thay are primitives)
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
    // B and E: middle seats11B
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
  console.log(checkMiddleSeat(prompt("type in seat")));
  ```
