# Forkify2

## `config.js`

```javascript
// some var may be changed later
export const API_URL = "https://forkify-api.herokuapp.com/api/v2/recipes";
export const TIMEOUT_SEC = 10;
```

## `helpers.js`

```javascript
// contain functions we use over and over in our project.
// E.g. json()
import { TIMEOUT_SEC } from "./config.js";
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};
```

## Event Handling in MVC: PUBLISHER-SUBSCRIBER PATTERN

![](img/forkify9.png)
