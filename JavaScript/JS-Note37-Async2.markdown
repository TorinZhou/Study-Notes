# Async 2

## Event Loop

- CallbackQueue(callbacks) vs MicroTasks(callbacsk of Promises)

  ```javascript
  console.log("Test Start");
  setTimeout(() => console.log("0 sec later"), 0);
  Promise.resolve("Immediatly Resolved Promise 1").then((res) => console.log(res));
  Promise.resolve('Immediatly Resolved Promise 2').then(res => {
    for (let i = 0; i < 10_000_000_000; i++) {}
    console.log(res);
  console.log("Test End");
  ```

  > Test Start

  > Test End

  > Immediatly Resolved Promise 1

  > (1000 years later)

  > Immediatly Resolved Promise 2

  > 0 sec later

  > This means JavaScript timers are not reliable.

## Build a Promise

> `resolve(value)` set the promise to fulfill. and the `(value)` will be consume by the `then` handler

```javascript
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lotter draw is happening");
  console.log(this); // undefine
  setTimeout(function () {
    if (Math.random() > 0.5) {
      resolve("You Win✨");
    } else {
      reject(new Error("You Loose😉"));
    }
  }, 2000);
});
lotteryPromise.then((res) => console.log(res)).catch((err) => console.log(err));
```

## Promisify setTimeout

```javascript
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
wait(2)
  .then(() => {
    console.log("I waited for 2 seconds");
    return wait(1);
  })
  .then(() => {
    console.log("I waited for 1 seconds");
  });
// 😜 sniffi blow is a callback hell
setTimeout(() => {
  console.log("I waited for 2 seconds");
  setTimeout(() => {
    console.log("I waited for 1 seconds");
  }, 1000);
}, 2000);
```

## Promisify the Geolocation API

```javascript
navigator.geolocation.getCurrentPosition(
  (position) => console.log(position),
  (err) => console.log(err)
);
// callback based API
console.log("This will happen first");

const getPosition = function () {
  return new Promise(function (res, rej) {
    // navigator.geolocation.getCurrentPosition(
    //   position => res(position),
    //   err => rej(err)
    // );
    navigator.geolocation.getCurrentPosition(res, rej);
    // call res with the position
    // call rej with the error
  });
};
getPosition().then((res) => console.log(res));
```

![](img/banner3.jpg)
