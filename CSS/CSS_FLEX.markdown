# CSS FLEXBOX

## CSS FLEXBX INTRO

- Flexible Box Model - Flexbox

- One Dimension - Row or Column

- NOT DEAD !!!!

- Browser Support - [www.caniuse.com](https://www.caniuse.com)

- Browser Prefixes - Autoprefixer

## SETUP

## Naming Conventions

- display: inline-flex

- display: flex

## Flex-Properties

- Flex-direction (Parent property)

  - flex-direction: row; (default)

  - flex-direction: row-reverse;

  - flex-direction: column;

  - flex-direction: column-reverse

- Flex-wrap

  if the container is not widthly(or tall) enough, the items will overflow. and we need flex-wrap

  - flex-wrap: nowrap; (default)

  - flex-wrap: wrap; (start a new line if space is limited)

  - flex-wrap: wrap-reverse

- Justify-Content

  - justify-content horizontal alighment

  - flex-start(default) flex-end

    - justify-content: flex-start; (default)

    - justify-content: felx-end;

      - It will change the distributiion

      - start: 12345---

      - end : ---12345

      - compare with row-reserve

      - reserve: ---54321

  - evenly distributed

    - justify-content: space-between;

      - 1-2-3-4-5 : the first item is going to sit all the way to the edge of the container as well as the last one on the other side.

    - justify-content: space-around;

      - **-1--2--3--4--5**-: add margin between items. and double margin except the edge.

    - justify-content: space-evenly;

      - \-1-2-3-4-5: this one make sense

    - justify-content: center;

      - \---12345---: place item in the center. usually work cooperate with warp. in case in small screens:

- Align-items (vertical alinment, reaaaly a life-saver)

  - align-items: stretch; (default)

  - align-items: flex-start; (aligning the box start/aka the box's edge)

  - align-items: flex-end;

  - align-items: center; (realy useful)

  - align-baseline: (aligning items' edge )a big difference between flex-start when items have different hight. usually use it when item 1 is a big logo
