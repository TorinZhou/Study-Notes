# Modern

![](img/banner2.jpg)

## Overview

![](img/morden1.png)

## Modules

![](img/morden2.png)

![](img/morden3.png)

## Exporting and Importing in ES6 Modules

> Imports are live connection to exports

> Point at the same space in memory

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

![](img/banner3.jpg)

## Top-Level await (ES2022)

> We can now use `await` keywork outside an async Function. (Only works in modules => `html: type=module`)

> This superpower will block the entire module! Use it with great caution.

> If top-level await exists in exporting module, It will block any importing module which import it.

- Example 1: Blocking Way

  ```javascript
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`); // Fake Data RESTapi
  const data = await res.json();
  console.log(data);
  console.log("End fetching"); // Blocked until end fetching
  ```

- Example 2: More real-world Way

  ```javascript
  const getLastPost = async function () {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await res.json();
    return { title: data.at(-1).title, text: data.at(-1).body };
  };
  const lastPost = getLastPost();
  console.log(lastPost);
  // Not very clean
  lastPost.then((last) => console.log(last));
  // Using Top Level await
  const lastPost2 = await getLastPost();
  console.log(lastPost2);
  ```

![](img/banner4.jpg)
