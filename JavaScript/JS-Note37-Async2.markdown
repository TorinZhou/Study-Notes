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
