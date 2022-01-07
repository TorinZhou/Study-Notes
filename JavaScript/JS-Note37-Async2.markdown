# Async 2

## Event Loop

- Callback queue

```javascript
console.log("Test Start");
setTimeout(() => console.log("0 sec later"), 0);
Promise.resolve("Immediatly Resolved Promise").then((res) => console.log(res));
console.log("Test End");
```

> Test Start
> Test End
> Immediatly Resolved Promise
> 0 sec later
