## CSS Outline Offset

- The outline-offset property adds space between an **outline** and the edge/**border** of an element. The space between an element and its outline is transparent.

---

## BOXING-SIZE

---

## COLOR

- \#4CAF50 Light Green

- \#008CBA Bright Blue (WOW rare items' color )

---

## CSS TEXT

- Text Color

- Text Alignment

  - text-align: center, left, right, jestify;

  - vertical-align: baseline, text-top, text-bottom, sub, super;

- Text Decoration

  - text-decoration: none; (used to set or remove decorations from text)

  - text-decoration: overline; line-through, underline;

- Text Transformation

  - text-transform: uppercase, lowercase, capitalize;

- Text Spacing

  - text-indent:

  - letter-spacing: (abcd---a b c d)

  - line-height: 0.8 (specify thie space between lines)

  - word-spacing: 10px;

- Text Shadow

  - text-shadow: 3px 3px 10px #ff0000; (horizental vertical blur color)

  - text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue; (this one really beautiful, triplex shadow)

---

## CSS FONTS

- Font Family

  - font-family:

- Font Web Safe

- Font Fallbacks

  - serif, sans-serif, monospace, cersive, fantasy; (5 generic font famailies)

- Font Style

  - font-style: normal, italic, oblique;

  - font-weight: normal, lighter, bold, 900, 700, 400;

  - font-variant: normal, small-caps (This is intresting);

- Font Size

  - default size is 16px, Absolut size may cause accessibility problem.

  - font-size: 40px;

  - font-size: 2.5em (2.5em = 2.5 \* 16 = 40px)

  - better way: set a default font-size in percent for the \<body> element:

    like: body(100%) h1(2.5em) h2(1.875em)

  - Respinsive Font Size

    - font-size: 10vw

    - Viewport is the browser window siza. 1vw = 1% of viewport width

- Font Google

  - \<link `rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide|Sofia|Trirong">`

  - font effect: `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia&effect=fire">`

  - \<h1 `class="font-effect-fire`">Sofia on Fire\</h1>

- Font Pairings

  - Georgia(for headings) and Verdana(for text)

    - `body {`

      ` font-family: Verdana, sans-serif;`

      ` font-size: 16px;`

      `}`

      `h1 {`

      ` font-family: Georgia, serif;`

      `font-size: 46px;`

      `}`

  - Helvetica and Garamond

  - (google)Merriweather and Open Sans

  - (google)Ubuntu and Lora

  - (googel)Abril Fatface and Poppins

  - (googel)Cinzel and Fauna One

  - (googel)Fjalla One and Libre Baskerville

  - (google)Space Mono and Muli

  - (goolge)Spectral and Rubik

  - (google)Oswald and Noto Sans

- Font Shorthand

  - font: style variant weight size/line-height family

  - `font: italic small-caps bold 12px/30px Georgia, serif`; (Notice the comma before serif)

---

## CSS Icons

- Google Icons

  - `<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">`

  - `<i class="material-icons">cloud</i>`

- Bootstrap Icons

  - `<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">`

  - `<i class="glyphicon glyphicon-cloud"></i>`

- Font Awesome Icons

  - `<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>`

  - `<i class="fas fa-cloud"></i>`

---

## CSS Links

---

## CSS DISPLAY

- Display property

  - `display: none; block; inline` (use js to change "none" to "block" will creat a panel)

  - Block: Browser respects width/height, top/bottom margin

  - Inline: browser dose not respect width/height, top/bottom margin

- Block-levle Elements

  - div, h1-h6, p, form, header, footer, section

- Inline Elements

  - span, a, img

- Display: none;

  - hide and show with JS.

- Override The Default Display Value

  - `display: inline` (for example: Make a list to showoff horizontally)

- Hide an Element- display:none or visibility:hidden ?

  - `display: none` (totally none)

  - `visibility: hidden` (visiually none but still occypy the space)

- Horizontal Centering

  - for inline elements : Set parents' porperty `text-align: center;`

  - for block elements: Fisrt specify the width, for example 300px ,otherwise the block will span all over the screen. Then set `margin: auto;an`

---

## CSS LISTS

- List Item Markers

  - `list-style-type: circle, square, upper-roman, lower-alpha, none;`

---

## CSS Background

- `background-color: lightblue, #ff0000, rgb(255, 0, 0);`

- Other Elements

  - Background can be set for any HTML elements

  - \<style>

          h1 { background-color: green;}

         div {background-color: lightblue;}

         p { background-color: yellow;}

          \</style>

<!---->

- Opacity / Transparency

  - ` div {```` background-color: green;```` opacity: 0.3;````} `

  - Opacity property will inherit to child

  - Transparency using RGBA

    - WILL not inherit to child

    - ` div {```` background: rgba(0, 128, 0, 0.3) /* Green background with 30% opacity */````} `

- Background-Image

  - background: url("./big.jpeg")

  - background-repeat:

    - background-repeat: repeat, no-repeat;

    - background-repeat: repeat-x, repeat-y;

    - background-repeat: space, round;

- Background-size

  - `background-size: cover:` Cover the whole div regardless of the size

  - `background-size: cotain;` will not cover the whole div

- Background-position

  - background-position: center, left\&right, top\&bottom;

  - `background-position: 0 0;` (DEFAULT SETTING)

    - `background-positong: 100% 100%; ` right + bottom;

- Background-Attachment

  - background-attachment: fixed, scroll;

- Linear Gradients

  - background: linear-gradient(red, green);

  - background: linear-gradient(red, green, red, #ff0000);

  - background: linear-gradient(to bottom, red, green); DEFALUT

  - background: linear-gradient(300deg, red, green);

  - background: linear-gradient(to top right, red, green);

  - `background:linear-gradient(red 20%, green 70%);` Solid red goes to 20% and from 70% will be solid green.

  - background: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.9));

    same color different opasity

- Background Image Overlay

  - `background: linear-gradient(...), url(...);`

  - **Watch out for the comma.!**

  - **Watch out for the comma.!!**

  - **Watch out for the comma.!!!**

  - `background: linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url("./big.jpeg") center/cover fixed no-repeat;` It has to be center/cover ,not cover/center

  - [Gradient Generator](https://www.colorzilla.com/gradient-editor/)

---

## CSS FLOAT (and CLEAR)

- **Float img in \<p>**

- **Float multiple \<div>s**

  - (Normally div elements will be displayed on top of each other. However, if we use `float: left` we can let elements float next to each other:)

  - I[MPROTANT EXAMPLE](https://www.w3schools.com/css/tryit.asp?filename=trycss_layout_float3)

- CLEAR

---

## CSS POSITONING

- The Positon Property

  - static

    - static is a default value.

    - always positoned according to the normal flow of the page

  - relative

    - is positioned **relative to its normal (adjust away form noraml)** positon.

    - meanwhil other elements will not be adjusted to fit into any gap left by the element

  - fixed

    - positioned relative to the viewpoint, which means it always stay in the same place even if the screen is scrolled.

  - absolute

    - Which means: relative to the nearedt parent which has `position: relative`

    - if an absolute positioned element had no positioned ancestors, it uses the \<body>, and moves along with page scrolling.

    - REMOVEED FROM THE NORMAL FLOW. OVERLAP ELEMENTS.

  - sticky

    - Toggles between relative and fixed

---

## MEDIA QUERIES

- Media Queries

  - `@media screen and (min-width:567px){`

    ` body{ }`

    and () watch out for the space between "and" and "()"

  <!---->

  - Responsive Design

  - Style Elements on Different Screen Size

  - min-width: ---starting from

  - max-width: ---up to

  - **Mobile First**

---

## Z-INDEX

- z-index: 0;

- z-index: positive (Z-closeer);

- z-index: negetive (Z-far)

- `z-index: won't work on position: static.`

---

## PSEUDO-ELEMENTS: Before After

- : :before : :after pseudo-elements creates element and inserts before and after CONTENT

- content: ' ' - required

- img --- does not work (a img is a img itself and have no content

  )

- normal selector vs pseudo selector " : : " (which select content, rather than select the element)

---

## CSS SELECTOR

- Basic Selectors ( \* # . h1 )

- Decendant and Child Selector (div h1 )

  - .header > h1 { } (means header's direct child)

- : :first-line(style the first line) ::first-letter(style a first letter)

  - p::first-line { font-weight: bold; }

  - p::first-letter { font-size: 150% }

- A PSEUDO-SELECTOR : Hover

  - the pseudo calss is a keyword added to a selector that spcifies a special state of the selected element. In out case, hover can be used to style element when a user's mouse over some elements. hover can be used on any element as far as the syntax, unlike before and after.

  - `div:hover{ you can type in whatever you want; }`

- MORE PSEUDO CLASS: LINK

  - a - all links

  - : link - unvisited links with **href**

    - a: link

  - : visited - visited links

    - a: visited { ;}

  - : active - as the user click's

    - a: active { ;}

- MORE PSEUDO : ROOT

  - : root root element of the document, higher spcificity html element than html.

  - Use root to set general styles and css variables

---

## Transform, Transition and Animation

- transform: translate(), rotate(), scale(), skew()

  transsition: (change over time)

  animation: (change over time with more control)

- Transform

  - translate

    - transform: translateX(30px);

    - transform: translateY(50%); ==translateY(half of it's parent's height. px)

  - scale

    - transform: scaleX(2); double X size

    - transform: scaleY(0.5); half Y size

    - transform: scale(2, 0.5);

  - rotate

    - transform: rotate(380deg);==rotate(20deg);== rotateZ(20deg);

    - rotateX, rotateY

  - skew

    - transform: skewX(40deg); _something like this ( |||||| ---after skew-- ////)_

- Transition

  - transiton: change over time

    transition-property:

    transition-duration: (continuance in time)

  - transition-property: background; border-radius; delay;

    transition-duration: 4s, 2s, 2s;

  - SHORT

    - `.three {`

      ` background: green;`

      ` transition: backgroud 2s 1s, border-radius 2s 1s;`

      ` transition: all 2s(time) 1s(delay);`

      `}`

      `.three:hover {`

      ` background: coral;`

      ` border-radius: 50%;`

      ` transform: scale(1.2);`

      `}`

  - Transition-timing funtion

    - intro

      - how the transition takes place

      - transition-timing-function

      - transion: all 3s(time) here(timing) 5s(delay);

      - ease = default

      - ease = slow start, fast, slow end

      - linear = same speed start to end

      - ease-in = slow start

      - ease-out = slow end

      - ease-in-out = slow start, fast, slow end

  - Animation (have way more options than transition)

    - `.whatever {`

      ` animation-name: xyz;`

      ` animation-duration: 10s;`

      ` animation-iteration-count: 3;`

      ` animation: xyz 10s infinite; # (This is the short form, name = xyz. duration = 10s iteration = infinite.) `

      `}`

    <!---->

    - `@keyframs xyz {`

      ` 0% {`

      ` }`

      ` 50%{ #50% = 50% of 10s`

      ` }`

      ` 75%{`

      ` }`

      ` 100%{`

      ` }`

      `}`

  - Animation-fill-mode

    - What values are applied by the animation outside the time it is executing. (What hap pened to an element once we are done with the animation)

    - `animation-fill-mode: backward;`

      `animation-fill-mode: forwards;`

---

## CSS ADVANCE

- CSS VARIABLES (AKA CUSTOM PROPERTIES)

  (allow to store value in one place and re-use in later)

  \--varName: value

  property: var(--varName)

  scope

  : root{} === global

  element === local

  any property

- `root{`

  ` --primaryColor: #f15025;`

  ` --cl-secondary: green;`

  ` --mainTransition: all 2s linear;`

  ` --mainSpacing: 5px;`

  `}`

  `h1 {`

  ` color: var(--primaryColor);`

  `}`

- TEXT-SHADOW, BOS-SHADOW

  - 11

- Object-fit: cover, contain, fill, none, scale-down

  - cover: automaticlly cut. maybe

- EMMET

  - .one#one == \<div class='one' id='one'>|\</div>

  - ul>li\*5 == ul with 5 children of li
