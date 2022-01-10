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
  const whereAmI = async function (country) {
    const res = await fetch(`url`);
    const data = await res.json();
    return `${data}`;
  };
  const infomation = whereAmI("whatever"); // wrong
  let infomation;
  whereAmI("whatever").then((res) => (infomation = res));
  ```

  > infomation is a promise rahter than a string

  > cause by the point information was executed, whereAmI() was still running(but not blocking the code)

  > Async funtion always return promise

  > The returing value will become the fulfilled value.
