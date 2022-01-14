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
