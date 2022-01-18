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
