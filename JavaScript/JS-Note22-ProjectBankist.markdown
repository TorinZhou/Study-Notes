# Bankist

## 1. section 147

- What we do in this section 😉

  - Using template literals to `creat html. (const html= ${}`)
  - Using conditional(ternary) operator:
    - `condition ? exprIfTrue : exprIfFalse`
  - Attach html : `insertAdjacent`
    - [MDN:insrtAdjacent](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML)
    - `element.insertAdjacentHTML(position, text);`
    - position:
      - beforebegin
      - afterbegin
      - beforeend
      - afterend
  - Manipulate .innerHTML (something like textcontent)
    ```javascript
    const content = element.innerHTML;
    element.innerHTML = content;
    ```

- JavaSripe Code 🤣
  ```javascript
  const displayMovements = function (movements) {
    containerMovements.innerHTML = "";
    movements.forEach(function (mov, i, arr) {
      const type = mov > 0 ? "deposit" : "withdrawal";
      const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
        i + 1
      } ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>`;
      containerMovements.insertAdjacentHTML("afterbegin", html);
    });
  };
  displayMovements(account1.movements);
  // console.log(containerMovements.innerHTML); html we just created 👍
  ```
- Result
  ![](img/bankit1.png)
