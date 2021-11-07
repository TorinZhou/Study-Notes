# CSS UNITS

- The difference between vh/vw and the percantage of height/width

- `100%` can be `100%` of the height of anything. For example, if I have a `parent div` that's `1000px tall`, and a `child div` that is at `100% height`, then that child div could theoretically be much taller than the height of the viewport, or much smaller than the height of the viewport, even though that div is set at 100% height.
  If I instead make that child div set at 100vh, then it'll only fill up 100% of the height of the viewport, and not necessarily the parent div.

  ```css
  body,
  html {
    height: 100%;
  }

  .parent {
    background: lightblue;
    float: left;
    height: 200px;
    padding: 10px;
    width: 50px;
  }

  .child {
    background: pink;
    height: 100%;
    width: 100%;
  }

  .viewport-height {
    background: gray;
    float: right;
    height: 100vh;
    width: 50px;
  }
  ```

  ```html
  <div class="parent">
    <div class="child">100% height (parent is 200px)</div>
  </div>

  <div class="viewport-height">100vh height</div>
  ```

- Suppose you have a `div` , direct `child` of `body` that you want filling the whole viewport, so you use `width: 100vw; height: 100vh`;. It all works just the same as `width: 100%; height: 100vh;` until you add more content and a vertical scrollbar shows up. Since the vw account for the scrollbar as part of the viewport, width: 100vw; will be slightly bigger than width: 100%;. This little difference ends up adding a horizontal scrollbar (required for the user to see that little extra width) and by consequence, the height would also be a little different on both cases.

  That must be taken into consideration when deciding which one to use, even if the parent element size is the same as the document viewport size.

  Example:

  - Using `width:100vw;`:

    ```css
    .fullviewport {
      width: 100vw;
      height: 100vh;
      background-color: red;
    }

    .extracontent {
      width: 100vw;
      height: 20vh;
      background-color: blue;
    }
    ```

    ```html
    <html>
      <body>
        <div class="fullviewport"></div>
        <div class="extracontent"></div>
      </body>
    </html>
    ```

  - Using `width:100%;`:

    ```css
    .fullviewport {
      width: 100%;
      height: 100vh;
      background-color: red;
    }

    .extracontent {
      width: 100%;
      height: 20vh;
      background-color: blue;
    }
    ```

    ```html
    <html>
      <body>
        <div class="fullviewport"></div>
        <div class="extracontent"></div>
      </body>
    </html>
    ```
