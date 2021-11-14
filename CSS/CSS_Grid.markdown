# GRID

- Grid 1

  ```css
  .container {
    display: grid;
    grid-template-columns: 200px 300px;
  }
  ```

- Grid 2 (Implict Grid)

- Grid 3-4 (Units - Auto)

  - this auto will make a responsible column at the end.

    ```css
    .container3 {
      grid-template-columns: 200px 300px auto;
    }
    ```

# Grid Mini Projects

- Add frontawesome link and GoogleFonts link to \<head>.

  ```html
  <!-- google fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400&display=swap"
    rel="stylesheet"
  />
  <!-- font awesome link -->
  <link rel="stylesheet" href="fontawesome-free-5.9.0-web/css/all.min.css" />
  <!-- CSS link -->
  <link rel="stylesheet" href="style.css" />
  ```

- Add Variables

  ```css
  /* ======================
  Variables 
  ======================== */
  :root {
    /* color */
    --color-background: hsl(12, 100%, 97%);
    --color-primary-light: #f486b5;
    --color-primary-dark: #cc5bd2;
    --color-primary-even-darker: #8e44cf;
    --color-oppisit: #fde12d;
    --main-gray: #afafaf;
    --off-white: hsl(0, 0%, 97%);
    /* transition */
    --main-transition: all 0.3s linear;
    /* units */
    --main-spacing: 0.2em;
  }
  ```

- Add Global CSS

  ```css
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: var(--color-background);
    font-family: "Fira Code", monospace;
    color: var(--color-primary-even-darker);
    letter-spacing: var(--main-spacing);
    line-height: 1.5;
  }
  a {
    text-decoration: none;
    /* a are links */
  }
  img {
    width: 100%;
    display: block;
  }
  ```

- Add Reuseable BTN with never-go-wrong transform

  ```css
  .btn {
    padding: 0.5rem 1rem;
    text-transform: capitalize;
    border: 3px solid var(--color-primary-light);
    color: var(--color-primary-light);
    background: var(--color-background);
    margin: 0.5rem 1rem;
    transition: var(--main-transition);
  }
  .btn:hover {
    color: var(--color-background);
    background: var(--color-primary-light);
  }
  ```
