# Modern 2

## Basic Command Line

move up 1 level: `cd ..`

move up 2 level: `cd ../..`

clear: `clear`

new folder: `mkdir`

new item: `New-Item` or `ni`

delete: `rm` or `del`

move: `mv file.name ../` => move a file to the parent folder.

remove folder: `remdir`

![](img/banner5.jpg)

## Introduction to NPM (a JS package manager)

creat a package: `npm init`

add leaflet : `npm install leaflet` or `npm i leaflet`

add lodash: `npm install lodash-es`

add parcel: `npm i parcel --save-dev` A dev dependency is not needed for our project

add parcel 1.12: `npm i parcel@1.12.4 --save-dev`

uninstall: `npm uninstall parcel`

```javascript
import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
const state = {
  cart: [
    { product: "bread", quantity: 5 },
    { product: "pizza", quantity: 5 },
  ],
  user: { loggedIn: true },
};
// ES Clone vs lodash DeepClone
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
console.log(stateClone);
// a little change
state.user.loggedIn = false;
console.log(stateClone);
// get two false.
console.log(stateDeepClone);
```

## Use parcel

```
npx parcel index.html
```

> npx to solve the problem that parcel is scopetd to this very project

> index.html is the file we want to bundle up.

```javascript
import add from "./shoppingCart.js";
import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
import cloneDeep from "lodash-es/cloneDeep.js";
```

> use parsel to bundle `stript.js` and `shoppingCart.js` with `cloneDeep.js`

```
Server running at http://localhost:1234
√ Built in 703ms
```

```
if (module.hot) {
  module.hot.accept();
}
```

- use npm stript

```
"scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
// in the console
// npx parcel index.html (old way)
npm run start (npm stript way)
npm run build
```

## Configuring Babel and Polyfilling

- Polyfilling

```javascript
import "core-js/stable";
import "core-js/stable/array/find";
```

- Polyfilling async functions

```
npm i regenerator-runtime
import "regenerator-runtime/runtime"
```

![](img/morden4.png)

![](img/morden5.png)

- Declaretive

![](img/morden6.png)

- Functional Programming

![](img/morden7.png)

- Example

> `Object.freeze()`: Only first level will be Freezed. Not a deep freeze.

> `budget[0].value = 9999;` will work `budget[9] = xyz` will not work.

```javascript
const budget = Object.freeze([
  { value: 250, description: "Sold old TV 📺", user: "jonas" },
  { value: -45, description: "Groceries 🥑", user: "jonas" },
  { value: 3500, description: "Monthly salary 👩‍💻", user: "jonas" },
  { value: 300, description: "Freelancing 👩‍💻", user: "jonas" },
  { value: -1100, description: "New iPhone 📱", user: "jonas" },
  { value: -20, description: "Candy 🍭", user: "matilda" },
  { value: -125, description: "Toys 🚂", user: "matilda" },
  { value: -1800, description: "New Laptop 💻", user: "jonas" },
]);
const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});
```

> inmutate state (pure function(no side effect addExpense))

```javascript
const getLimit = (limits, user) => limits?.[user] ?? 0;
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = "jonas"
) {
  const cleanUser = user.toLowerCase();
  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, cleanUser }]
    : budget;
};
const newBudget1 = addExpense(budget, spendingLimits, 10, "Pizza 🍕");
```

> To pass all the data a function needed, and copy them. to avoid side effect

```javascript
const checkExpenses = (state, limits) =>
  state.map((entry) => {
    return entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: "limit" }
      : entry;
  });
```

> Instead of use `map()+join()` , `reduce()` may be better.

```javascript
const logoBigExpenses = function (state, bigLimit) {
  const bigExpenses = state
    .filter((entry) => entry.value <= -bigLimit)
    .map((entry) => entry.description.slice(-2))
    .join(" / ");
  // let output = '';
  // for (const entry of budget) {
  //   output +=
  //     entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';
  // }
  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
};
logoBigExpenses(newBudget1, 200);
```
