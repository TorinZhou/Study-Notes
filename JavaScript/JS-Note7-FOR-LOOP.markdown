# FOR LOOP

## for Statement

- First Part(the counter):

  - `for (let rep = 1;)`

- Second Part( A logical condition that is evaluated before each iteration of the loop). If it false, the loop stop.

  - `for (let rep = 1; rep <= 10;)`

- Third Part: Update the counter.

  - `for (let rep = 1; rep < 10; rep++ ) {}`

  - `for (let rep = 1; rep < array.length; rep++ ) {}`

---

## for Example

- llll

```javascript
const array = [e1, e2, e3]
<!-- we want to make a new array base on the type of elements in array -->
const typeArray =[];
for(i=0; i<array.length; i++){
  <!-- solution 1 -->
  typeArray[i] = typeof array[i];
  <!-- solution 2 -->
  typeArray.push(typeof array[i]);
}
```

---

## for continue: exit the current iteration of the loop, and enter next one.

## for break: conpletely terminate the whole loop.

## Now we can see the benifit of using push. cause both array maynot have the same length.

---

```javascript
const array = [e1, e2, e3]
<!-- we want to make a new array base on the type of elements in array -->
const typeArray =[];
for(i=0; i<array.length; i++){
  if(typeof array[i] !== 'string') continue;
  typeArray.push(typeof array[i]);
}
```

```javascript
const array = [e1, e2, e3]
<!-- we want to make a new array base on the type of elements in array -->
const typeArray =[];
for(i=0; i<array.length; i++){
  if(typeof array[i] === 'number') break;
  typeArray.push(typeof array[i]);
}
```

---

## LOOP backwards (simply change the counter, condition, and counter update)

- `for (let rep = array.length - 1; rep >= 0; rep-- ) {}`

---

## LOOP INSIDE LOOP
