# ADVANCED DOM

## 1. Select Elements

- example

  ```javascript
  console.log(document); // prototype: HtmlDocumnent
  console.log(document.documentElement); // prototype: HTMLElement
  console.log(document.head);
  console.log(document.body);

  document.querySelector(".header");
  const allSections = document.querySelectorAll(".section");
  console.log(allSections); //  return nodelist (Won't update itself)

  document.getElementById("section--1");
  const allButtons = document.getElementsByTagName("button");
  console.log(allButtons); // return HTML-Collection(updates automaticlly E.g: Delete an element)

  document.getElementsByClassName("btn");
  ```

- HTMLCollection vs NodeList
  [Difference between HTMLCollection and NodeList](https://dev.to/jharteaga/difference-between-htmlcollection-and-nodelist-25bp?signin=true)

  > getElementsByClassName() returns a live HTMLCollection representing an array-like object of all child elements which have all of the given class name(s).

  > querySelectorAll() returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.

![](img/cat2.jpg)
