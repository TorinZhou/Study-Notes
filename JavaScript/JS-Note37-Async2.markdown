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

```javascript
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lotter draw is happening");
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

## Promisifying setTimeout

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
