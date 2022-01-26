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

> Reference: [Difference Between Pub-Sub Pattern and Observable Pattern](https://medium.com/easyread/difference-between-pub-sub-pattern-and-observable-pattern-d5ae3d81e6ce)

- Before: in `controller.js`

  ```javascript
  ["hashchange", "load"].forEach((ev) =>
    window.addEventListener(ev, controlRecipes)
  );
  ```

- In Pub-Sub Pattern: in `recipeView.js` and `controller.js`

  ```javascript
  class RecipeView {
    // add a new method
    addHandlerRender(handler) {
      ["hashchange", "load"].forEach((ev) =>
        window.addEventListener(ev, handler)
      );
    }
  }
  ```

  ```javascript
  const init = function () {
    recipeView.addHandlerRender(controlRecipes);
  };
  init();
  ```

## Error and Success Message

> We were loging err in model.js : `model.js:24 Error: Invalid _id: 5ed6604591c37cdc054bc886222333. (400) 😊😊😊😊😊`

> It should really be handled in view.js

```javascript
// add new method to view
renderError(message) {
  const markup = `
  <div class="error">
    <div>
      <svg>
        <use href="${icons}#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${message}</p>
  </div>
  `;
  this.#clear();
  this.#parentElement.insertAdjacentHTML('afterbegin', markup);
}
```

- Throw 1 in `helper.js`

  ```javascript
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

- Throw 2 in `model.js`

  ```javascript
  export const loadRecipe = async function (id) {
    try {
      const data = await getJSON(`${API_URL}/${id}`);

      const { recipe } = data.data;
      state.recipe = {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        souceUrl: recipe.source_url,
        image: recipe.image_url,
        servings: recipe.servings,
        cookingTime: recipe.cooking_time,
        ingredients: recipe.ingredients,
      };
      console.log(state.recipe);
    } catch (err) {
      throw err;
    }
  };
  ```

- Catch and Render in `controller.js`

  ```javascript
  const controlRecipes = async function () {
    try {
      const id = window.location.hash.slice(1);
      console.log(id);
      if (!id) return;
      recipeView.renderSpinner();

      // 1) loading recipe
      // loadRecipe is an async function, so here we heave to await for it.  One async function calling another async function
      await model.loadRecipe(id);

      // 2) rendering recipe using state OBj from model.js
      recipeView.render(model.state.recipe);
    } catch (err) {
      recipeView.renderError();
    }
  };
  ```
