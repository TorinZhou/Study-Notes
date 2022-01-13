# Modern

## Overview

![](img/morden1.png)

## Modules

![](img/morden2.png)

![](img/morden3.png)

## Exporting and Importing in ES6 Modules

> Imports are live connection to exports

### Named Exporting

```javascript
// Exporting module
console.log("Exporting module");
const shippingCost = 10;
const cart = [];
// variables are scoped to this module.
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product}`);
};
// named export
const totalPrice = 111;
const totalQuantity = 100;
export { totalPrice, totalQuantity as tq };
```

### Named Importing

- 1.

  ```javascript
  import "./shoppingCart.js";
  import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";
  console.log("Importing module");
  addToCart("bread", 5);
  console.log(price, tq);
  ```

- 2.

  ```javascript
  console.log("Importing module");
  import * as ShoppingCart from "./shoppingCart.js";
  ShoppingCart.addToCart("bread", 5);
  ```

### Default Exporting & Importing

```javascript
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product}`);
}
// Give the export whatever name you like
import add from "./shoppingCart.js";
add("pizza", 2);
```
