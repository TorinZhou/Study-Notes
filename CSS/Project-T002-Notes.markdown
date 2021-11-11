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
