# ARRAY

Array is a kind of Data Structure (数据结构).\\

- It's like a big container, into which we throw variables and then later reference them

- Two most important Data Structure in Javascript is **Arrays** and **Objects**.

---

# ARRAY DECLARATION (two ways)

```javascript
const family = ["ZZL", "PYJ", "ZY"];

const year = new Array(1990, 1991, 1992);
// here its the Array function. and the new keyword.  with 3 parameters.
```

# ARRAY CALL

```javascript
family[2];
year.length;
year[year.length - 1];
year[2] = 2077;
// we can mutate year[2], but we can't mutate the whole year, because of const.
const torin = [170, `80kg`, family];
// we can put different date type in a array.
```

---

# ARRAY BASIC OPRATIONS (METHODS)

- push : add element to the end of an array.

  `year.push(2077);`

  we pass 2077(argument) to the method, and it truly has a return, let try to accept that return.

  `const accepter = year.push(2077);`

  I can find that the accepter = the new length of the array.

- unshift: add element to the begining.

  `year.unshift;`

- pop: the oppisite of the push.

  `year.pop;`

  It return the popped element.

- shift: oppisite of the unshift

  `year.shift;`

  it returen the popped element.

- indexof : return the location of an element.

  `year.indexof(2077);`

  if 2077 is not an element, **it will return -1**

- includes: check if or not include. return true or false.

  `year.includes(2077);`

  It test strict equlity. which means 23 != \`23\`; it will not do any type corecion.
