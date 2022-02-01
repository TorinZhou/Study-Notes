# Async 3: await

# Cosuming Promise with Async/Await

- Example

  > Async/Await is all about cosuming promises, the way we built them will not change.

  ```javascript
  const whereAmI = async function (country) {
    // translate .then() to await
    fetch(`https://restcountries.com/v3.1/name/${country}`)
      .then((res) => res.json())
      .then((res) => console.log(res));
    // await will stop the code execution at this time
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    const data = await res.json();
    console.log(data);
  };
  ```

## Error Handling with `try...catch`

- Example

  ```javascript
  const whereAmI = async function (country) {
    const res = await fetch(`url`);
    const data = await res.json();
  };
  ```

  ```javascript
  const whereAmI = async function (country) {
    try {
      const res = await fetch(`url`);
      const data = await res.json();
      if (!data) {
        throw new Error();
      }
    } catch (err) {
      console.error(err);
      console.log(err.message);
    }
  };
  ```

## Returning Values from Async Functions

- Example

  ```javascript
  try {
    const whereAmI = async function (country) {
      const res = await fetch(`url`);
      const data = await res.json();
      return `${data}`;
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
  const infomation = whereAmI("whatever"); // wrong
  let infomation;
  whereAmI("whatever")
    .then((res) => (infomation = res))
    .catch((err2) => console.log(err2));
  ```

  > Async funtion always return promise

  > infomation is a promise rahter than a string

  > cause by the point information was executed, whereAmI() was still running(but not blocking the code)

  > The returing value will become the fulfilled value.

## Running Promises in Parallel

- Example

  ```javascript
  const getJSON = function (url, errorMsg = "Something went wrong") {
    return fetch(url).then((response) => {
      if (!response.ok) {
        throw new Error(`${errorMsg} ${response.status}`);
      }
      return response.json();
    });
  };
  const get3Countries = async function (url1, url2, url3) {
    try {
      // const [data1] = await getJSON(`${url1}`);
      // const [data2] = await getJSON(`${url1}`);
      // const [data3] = await getJSON(`${url1}`); // bad code.
      const data = await Promise.all([
        getJSON(`${url1}`),
        getJSON(`${url2}`),
        getJSON(`${url3}`),
      ]);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  ```

## Promise.race() Promise.any() Promise.all() Promise.allSettled()

- Example: Race

  ```javascript
  (async function () {
    const resOrRej = await Promise.race([
      getJSON(`${url1}`),
      getJSON(`${url2}`),
      getJSON(`${url3}`),
    ]);
    console.log(res[0]); // the first settled. res/or rej
  })();
  ```

  > Reject race after 2 sec

  ```javascript
  const timeout = function (sec) {
    return new Promise(function (_, rej) {
      setTimeout(function () {
        reject(new Error("Bad connect TimeOut"));
      }, sec);
    });
  };

  Promise.race([getJSON(`${url}`), timeout(2)])
    .then((res) => console.log(res[0]))
    .catch((err) => console.error(err));
  ```

- Example: allSettled

  ```javascript
  Promise.allSettled([
    Promise.resolve("Success"),
    Promise.reject("Error"),
    Promise.reject("Error"),
  ]).then((res) => console.log(res)); // all return in an array.
  ```

- Example: all

  > All will short circut. if error shows up. need to be catched.

- Example: any

  > return the first fulfilled promise. regardless of rejected.
