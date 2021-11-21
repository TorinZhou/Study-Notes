# WHILE LOOP

It has the same structure of FOR LOOP.
Which is:

- 1.  counter.

- 1.  condition.

- 1.  counter update.

For example:

```javascript
for(i=0, i<array.length, i++){
  some expression;
}
```

```javascript
let i = 0;
while(i<array.length) {
  some expression;
  i++;
}
```

# DIFFERENCE

while loop can do EVERYTHING for loop do. And all while loop need is a condtion.

- (while loop don't need counter, and counter update)

- for example

  ```javascript
  let dice = Math.trunk(Math.number() * 6) + 1;
  while (dice !== 6) {
    console.log(`you roll a ${dice}!`);
    dive = Math.trunk(Math.number() * 6) + 1;
  }
  ```

# WHEN TO USE

If we know exactly how many times we wanna loop. maybe use forloop
On the other hand, maybe use while loop.
