# Advanced DOM 2

## Style

- example

  ```javascript
  message.style.backgroundColor = "#37383d";
  message.style.width = "100%";
  const cookieInCSSColor = getComputedStyle(message).color;
  const cookieInCSSHeight = getComputedStyle(message).height;
  console.log(cookieInCSSColor); // 187 187 187
  console.log(cookieInCSSHeight); // 49px
  document.documentElement.style.setProperty("--color-primary", "cyan");
  message.style.height =
    Number.parseFloat(getComputedStyle(message).height, 10) + 20 + "px"; // 69px
  message.style.setProperty("color", "red");
  ```

## Attribute

- [Attribute vs Propery](https://stackoverflow.com/questions/6003819/what-is-the-difference-between-properties-and-attributes-in-html)

  > The job of attributes is to initialize the DOM object properties

  ```javascript
  const logo = document.querySelector(".nav__logo");
  const attri = logo.getAttribute("src");
  console.log(logo.alt);
  console.log(logo.src); // absolut url    http://127.0.0.1:5500/13-Advanced-DOM-Bankist/starter/img/logo.png
  console.log(attri); //img/logo.png
  logo.setAttribute("company_current", "Bankist");
  logo.setAttribute("alt", "Bankist");
  const version = logo.dataset.versionNumber;
  // version-number (in HTML)=> versionNumber (in js)
  // data-version-number="3.0" (In html)
  console.log(version); // 3.0
  ```

- Class
  ```javascript
  logo.classList.add("test");
  logo.classList.toggle("test");
  logo.classList.contains("test");
  logo.classList.remove("test");
  // Don't use
  logo.clasName = "Torin";
  // overide all remain only one class
  ```

![](img/cat3.png)

## Smooth Scroll

- Old fashion way
  ![](img/dom3.png)
  ```javascript
  const scrollLinkLearnMore = document.querySelector(".btn--scroll-to");
  const section1 = document.getElementById("section--1");
  scrollLinkLearnMore.addEventListener("click", function () {
    window.scrollTo({
      top: objRelativeY + curWindowY,
      behavior: "smooth",
    });
  });
  const objRelativeY = section1.getBoundingClientRect().top;
  const curWindowY = window.pageYOffset;
  ```
- My way
  ```javascript
  scrollLinkLearnMore.addEventListener("click", function () {
    section1.scrollIntoView({ behavior: "smooth" });
  });
  ```
