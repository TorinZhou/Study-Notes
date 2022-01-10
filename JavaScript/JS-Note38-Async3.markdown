# Async 3: await

# Cosuming Promise with Async/Await

- Example
  ```javascript
  const whereAmI = async function (country) {
    // translate .then() to await
    fetch(`https://restcountries.com/v3.1/name/${country}`).then((res) =>
      console.log(res)
    );
    // await will stop the code execution at this time
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    console.log(res);
  };
  ```
