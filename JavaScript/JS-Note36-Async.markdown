# Asynchronous

## Synchronous Example

![](img/async1.png)

## Asynchronous Type

![](img/async2.png)

![](img/async3.png)

## AJAX

> Asynchronous JavaScript And XML.

![](img/async4.png)

![](img/async5.png)

- example

  ```javascript
  const getCountryData = function (country) {
    const request = new XMLHttpRequest();
    request.open("GET", `https://restcountries.com/v2/name/${country}`);
    request.send();
    request.addEventListener("load", function () {
      const [data] = JSON.parse(this.responseText);
      console.log(data);
      const html = `<article class="country">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
              <h3 class="country__name">${data.name}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                +data.population / 100000000
              ).toFixed(1)} 亿人</p>
              <p class="country__row"><span>🗣️</span>${
                data.languages[0].name
              }</p>
              <p class="country__row"><span>💰</span>${
                data.currencies[0].name
              }</p>
            </div>
          </article>`;
      countriesContainer.insertAdjacentHTML("beforeend", html);
      countriesContainer.style.opacity = 1;
    });
  };
  getCountryData("cn");
  getCountryData("Canada");
  getCountryData("portugal");
  getCountryData("Japan");
  ```

  ![](img/async6.png)
