# ES6: SET

## Set

> The Set object lets you store unique values of any type, whether primitive values or object references.

> Set objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection.

## Instance properties

```javascript
Set.prototype.size;
```

> 🎉 Returns the number of values in the Set object.

## Instance methods

```javascript
Set.prototype.add(value);
//🎉Appends value to the Set object. Returns the Set object with added value.

Set.prototype.clear();
//🎉Removes all elements from the Set object.

Set.prototype.delete(value);
//🎉Removes the element associated to the value and returns a boolean asserting whether an element was successfully removed or not. Set.prototype.has(value) will return false afterwards.

Set.prototype.has(value);
//🎉Returns a boolean asserting whether an element is present with the given value in the Set object or not.
```

## Iteration methods

```javascript
Set.prototype.values()
//🎉Returns a new iterator object that yields the values for each element in the Set object in insertion order.

Set.prototype.keys()
//🎉An alias for Set.prototype.values().

Set.prototype.entries()
//🎉Returns a new iterator object that contains an array of [value, value] for each element in the Set object, in insertion order.
//🎉This is similar to the Map object, so that each entry's key is the same as its value for a Set.

Set.prototype.forEach(callbackFn[, thisArg])
//🎉Calls callbackFn once for each value present in the Set object, in insertion order. If a thisArg parameter is provided, it will be used as the this value for each invocation of callbackFn.
```

## Examples

- Using the Set Object

  ```javascript

  ```

- Iterating Sets

  ```javascript

  ```

- Using the Set Object

  ```javascript

  ```

- Using the Set Object

  ```javascript

  ```
