# THIS

![](img/this1.png)


## [“this” in methods](https://javascript.info/object-methods#this-in-methods)
**To access the object, a method can use the `this` keyword.**

## [“this” is not bound](https://javascript.info/object-methods#this-is-not-bound)
In JavaScript, keyword `this` behaves unlike most other programming languages. It can be used in any function, even if it’s not a method of an object.

There’s no syntax error in the following example:

```javascript
const sayHi = function() {
	alert(this.name);
}
const person = {name: `torin`};
person.greeting = sayHi;

person.greeting();
```

## [Arrow functions have no “this”](https://javascript.info/object-methods#arrow-functions-have-no-this)
Arrow functions are special: they don’t have their “own” `this`. If we reference `this` from such a function, it’s taken from the outer “normal” function.

That’s a special feature of arrow functions, it’s useful when we actually do not want to have a separate `this`, but rather to take it from the outer context. Later in the chapter [Arrow functions revisited](https://javascript.info/arrow-functions) we’ll go more deeply into arrow functions.