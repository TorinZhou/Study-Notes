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
//Appends value to the Set object. Returns the Set object with added value.

Set.prototype.clear();
//Removes all elements from the Set object.

Set.prototype.delete(value);
//Removes the element associated to the value and returns a boolean asserting whether an element was successfully removed or not. Set.prototype.has(value) will return false afterwards.

Set.prototype.has(value);
//Returns a boolean asserting whether an element is present with the given value in the Set object or not.
```
