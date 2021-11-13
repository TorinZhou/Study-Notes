# Notes

- shortcut icon

  Check favicon.io

- inpage link

  - explore tours

- border: 2px solid transparent. A transparent border will come in handy

- use pure color to be background on small screen, then media quary a background img on big screnn will help.

- To add icons, what are the differences between and with a child of :

  - 图标是不同的，多个图标，但是 their span parent has the same class. Makes it easy to shape all icons easily.

  - An icon is just icon itself .If we put it in a span, it's easy to give the icon a background with other colors or border. by useing background to set background . and color to set icon color. Simply in the span element.

- fa-fw ：means icon has a fixed width

- set a paragraph's line-hight to 0, and set a border, the border will be a line

- <https://www.zhangxinxu.com/wordpress/2009/11/css%E8%A1%8C%E9%AB%98line-height%E7%9A%84%E4%B8%80%E4%BA%9B%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E5%8F%8A%E5%BA%94%E7%94%A8/>

- <https://codepen.io/torinzhou/pen/VwzdqwL>

- Fontawesome icon within herf

  ```html
  <div class="galary-img-container">
    <img src="./images/tour-1.jpeg" class="galary-img" alt="" />
    <a href="#" class="galary-icon">
      <i class="fas fa-search"></i>
    </a>
  </div>
  ```

- Fontawesome icon within span

  ```html
  <div class="tour-footer">
    <p>
      <span><i class="fas fa-map fa-fw"></i>Indonesia</span>
    </p>
    <p>11 days</p>
    <p>from $1400</p>
  </div>
  ```

- Email Holder and Submitt Button

  ```html
  <form class="contact-form">
    <input
      type="email"
      name="email"
      class="form-control"
      placeholder="your email"
    />
    <button type="submit" class="btn-submit">submit</button>
  </form>
  ```

- FIXED Height IMAGES DISPLAY

  ```css
  .galary-img {
    height: 17rem;
    object-fit: cover;
    transition: var(--transition);
  }
  ```

- This two flex: 0 0 50% flex: 1 1 50% make no difference

  ```css
  @media screen and (min-width: 768px) {
    .galary-center {
      display: flex;
      flex-wrap: wrap;
    }
    .galary-img-container {
      flex: 0 0 50%;
      /* flex: 1 1 50%; why makes no differece*/
    }
  }
  ```

- A Standard Footer

  ```html
  <footer class="section footer" id="footer">
    <ul class="footer-links">
      <li>
        <a href="#home" class="footer-link scroll-link">home</a>
      </li>
    </ul>
  </footer>
  ```

- A Standard Footer Social Icons

  ```html
  <ul class="footer-icons">
    <li>
      <a href="https://www.twitter.com" target="_black" class="footer-icon">
        <i class="fab fa-facebook"></i>
      </a>
    </li>
  </ul>
  ```

- A Easy Footer copyright with soft-coded date(using js)

  ```html
  <p class="copyright">
    copyright &copy; backroads travel tour company <span id="date"></span>. all
    rights reserved
  </p>
  ```

- A Standar Navbar (Step 1)

  ```html
  <!-- navbar -->
  <nav class="navbar">
    <div class="nav-center">
      <!-- nav header -->
      <div class="nav-header">
        <img src="./images/logo.svg" class="nav-logo" alt="" />
        <button type="button" class="nav-toggle" id="nav-toggle">
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <!-- end of nav header -->
    </div>
  </nav>
  <!-- end of navbar -->
  ```

- A Stand Navbar (Step 2)

  - Now we copy and paste footer-links and foot-icons

    ```html
    <!-- navbar -->
    <nav class="navbar">
      <div class="nav-center">
        <!-- nav header -->
        <div class="nav-header">
          <img src="./images/logo.svg" class="nav-logo" alt="" />
          <button type="button" class="nav-toggle" id="nav-toggle">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <!-- end of nav header -->

        <!-- nav links  -->
        <ul class="nav-links" id="nav-links">
          <!-- single link -->
          <li>
            <a href="#home" class="nav-link scroll-link">home</a>
          </li>
          <!--end of single link -->
        </ul>
        <!-- end of nav-links -->

        <!-- nav icons -->
        <ul class="nav-icons">
          <!-- single icon -->
          <li>
            <a href="https://www.twitter.com" target="_black" class="nav-icon">
              <i class="fab fa-facebook"></i
            ></a>
          </li>
          <!-- end of single icon -->
        </ul>
        <!--end of nav icons -->
      </div>
    </nav>
    <!-- end of navbar -->
    ```

- A Not-selector (replace the first one) (PS: IMG are inline-block elements)

  ```css
  img {
    width: 100%;
    display: block;
  }
  img:not(.nav-logo) {
    width: 100%;
    display: block;
  }
  ```

- Navbar CSS (Step 1)

  - Must aware that the width/left/right of a fixed element is relative to the viewpoint, not its parents.

  - to show case I set the width to 50%, normally it should be 100%.

    ```css
    .navbar {
      position: fixed;
      background: var(--clr-white);
      left: 0;
      right: 0;
      width: 50%;
    }
    ```

<!---->

- Navbar CSS (Step 2)

  - For small screen I set nav-icon to none

  - Aware that even navbar's width is relative to the viewpoint, it's child nav-center's width is still relative to its parent. to show case I set it to 50%;

  - Set z-index because some img will cover the fix-item.

    ```css
    .navbar {
      position: fixed;
      background: var(--clr-white);
      left: 0;
      right: 0;
      width: 100%;
      box-shadow: var(--dark-shadow);
      z-index: 2;
    }
    .nav-icons {
      display: none;
    }
    .nav-center {
      border: var(--border-test-greenlight);
      width: 100%;
      max-width: 1170px;
      margin: 0 auto;
      /* to place nav-center to the center of navbar */
    }
    ```

- Navbar CSS (Step 3)

  - For small screen we onle have navbar-header(logo and toggle)

    ```css
    .nav-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      /* IF not aligned center, the icon will stretch all across the width */
      padding: 1rem 2rem;
    }
    ```

  - tranparent will help to reshape the fontawesome toggle

    ```css
    .nav-toggle {
      background: transparent;
      border: transparent;
      font-size: 1.5rem;
      color: var(--clr-primary-5);
      transition: var(--transition);
    }
    ```

- Navbar CSS (STEP 4)

  - nav-links has several children nav-link

  - And nav-link has a default value display:list-item

  - The list-item keyword causes the element to generate a ::marker pseudo-element with the content specified by its list-style properties (for example a bullet point) together with a principal box of the specified type for its own contents.

  - In this case,to make it stretch all over the width, I display li to be block.

    ```css
    .nav-links {
      /* border: var(--border-test-greenlight); */
    }
    .nav-link {
      /* border: var(--border-test-greenlight); */
      display: block;
      /* display to block to make single li to stretch across */
      /* by default <li> are display:list-item */
      padding: 1rem 2rem;
      /* same padding as the nav-header */
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      color: var(--clr-grey-1);
      font-size: 1rem;
    }
    .nav-link:hover {
      color: var(--clr-primary-1);
      background: var(--clr-primary-8);
      padding-left: 2.25rem;
    }
    ```

- Navbar CSS (STEP 5)

  - show and hide links

    ```css
    /* Hide(default) and Show Toggled Links */
    .nav-links {
      height: 0;
      /* height0 makes the background disppear, but links are still visiable */
      overflow: hidden;
      transition: var(--transition);
    }
    /* My nav link's height is 336px */
    .show-links {
      height: 336px;
      /* we will add this class to nav-link by js */
    }
    ```

- Navbar CSS (STEP 6)

  - In bigger screens

    ```css
    @media screen and (min-width: 992px) {
      /* hide toggle button */
      .nav-toggle {
        display: none;
      }
      /* in small screen nav-links are set to height:0 */
      .nav-links {
        height: auto;
        display: flex;
        gap: 1rem;
      }
      /* in small screen icons are hidden */
      .nav-icons {
        display: flex;
        gap: 1rem;
      }
      .nav-center {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .nav-header {
        padding: 0 0;
      }
      .nav-link {
        padding: 0 0;
      }
      /* in the toggle, link:hover will add a extra left padding */
      /* and now we don't need it in a bigger screen */
      .nav-link:hover {
        color: var(--clr-primary-5);
        background: transparent;
        padding-left: 0;
      }
      .nav-icon {
        font-size: 1.2rem;
        color: var(--clr-primary-5);
        transition: var(--transition);
      }
      .nav-icon:hover {
        color: var(--clr-primary-8);
      }
    }
    ```
