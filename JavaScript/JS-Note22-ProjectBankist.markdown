# Bankist

## 1. section 147

- What we do in this section 😉

  - Using template literals to creat html. `const html= ${}`
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
- Result: ✅✅✅✅✅✅✅✅✅✅✅✅✅

  ![](img/bankit1.png)

## 2. Section 148. Array Challange

- Challange

  > Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

  > ✅ 1. Julia found out that the owners of the first and the last two dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)

  > ✅ 2. Create an array with both Julia's (corrected) and Kate's data

  > ✅ 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy

  > ✅ 4. Run the function for both test datasets

  > ✅ 5. Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]

- Solution
  ```javascript
  const checkDogs = function (dogsJulia, dogsKate) {
    // 1.
    const dogsJuliaFix = dogsJulia.slice(1, -2);
    const dogsKateFix = dogsKate.slice();
    dogsKateFix.splice(0, 1);
    dogsKateFix.splice(-2);
    // 2.
    const dogs = dogsJuliaFix.concat(dogsKateFix);
    // 3.
    dogs.forEach(function (dog, index) {
      if (dog >= 3) {
        return console.log(
          `Dog number ${index + 1} is an adult, and is ${dog} years old`
        );
      }
      if (dog < 3) {
        return console.log(`Dog number ${index + 1} is still a puppy 🐶`);
      }
    });
  };
  checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
  ```

## 3. Section 151: Calc username

- What we do in this section 😉

  - ✅1. compute user name torin zhou => tz
  - ✅2. creat username property , and add to accound obj
  - ✅3. understand side effect of forEach (do sth without return) (unlike map)

- Code

  ```javascript
  const accounts = [account1, account2, account3, account4];

  const createUsernames = function (accs) {
    accs.forEach((acc) => {
      acc.username = acc.owner
        .toLowerCase()
        .split(" ")
        .map((str) => str[0])
        .join("");
    });
  };
  // involk
  createUsernames(accounts);
  cosole.log(accounts); // (4) [{…}, {…}, {…}, {…}]
  ```

## 4. Section 153 : calc current balance

- What we do in this section 😉

  - ✅1. Creat a reducer callbackFn.
  - ✅2. Creat a highOrderFn to call the reducer using arr.reduce(reducer)

- Code

  ```javascript
  const balanceReducer = (pre, cur) => pre + cur;
  const calcDisplayBalance = function (arr) {
    labelBalance.textContent = `${arr.movements.reduce(balanceReducer, 0)} EUR`;
  };
  calcDisplayBalance(account2);
  ```

- Result: ✅✅✅✅✅✅✅✅✅✅✅✅✅

  ![](img/bankit2.png)

## 5. Section 155 : calc summary part

- What we do in this section 😉

  - ✅1. calc summary part :input, output, interst
  - ✅2. if intrest < 1, ignore it.

- Code

  ```javascript
  const calcDisplaySummary = function (movements) {
    let income = 0;
    let out = 0;
    let intrest = 0;
    movements.forEach((mov) => {
      if (mov > 0) {
        income += mov;
        intrest = mov * 0.012 > 1 ? mov * 0.012 + intrest : intrest;
      } else {
        out += mov;
      }
    });
    // print to DOM  🎉🎉🎉🎉🎉🎉
    labelSumIn.textContent = `${income}€`;
    labelSumOut.textContent = `${Math.abs(out)}€`;
    labelSumInterest.textContent = `${intrest}€`;
  };
  ```

- Result: ✅✅✅✅✅✅✅✅✅✅✅✅✅

  ![](img/bankit3.png)

## 3. Section 158: Login, refresh all the UI Above

- What we do in this section 😉

  > ✅1. for form: press Ender will automaticlly click the button in it.
  > ✅2. use preventDefault 👍 [morr detials](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
  > ✅3. print the owner first name using split (the opposite of join)
  > ✅4. clear inputLoginUsername and inputLoginPin, useing assignment chain a = b = "";
  > ✅5. make inputLable loose focus: element.blur()
  > ✅6. display UI. app.opacity:0(default)->1;
  > ✅7. diaplay movements, cruurent balance, summary

- Code

  ```javascript
  let currentAccount;
  btnLogin.addEventListener("click", function (e) {
    e.preventDefault(); // prevent refresh
    currentAccount = accounts.find(
      (acc) => acc.username === inputLoginUsername.value
    );
    if (+inputLoginPin.value === currentAccount?.pin) {
      labelWelcome.textContent = `Welcome! ${
        currentAccount.owner.split(" ")[0]
      }`;
      containerApp.style.opacity = 1;
      inputLoginUsername.value = inputLoginPin.value = "";
      inputLoginUsername.blur();
      inputLoginPin.blur();
      displayMovements(currentAccount.movements);
      calcDisplayBalance(currentAccount.movements);
      calcDisplaySummary(currentAccount);
    }
  });
  ```
