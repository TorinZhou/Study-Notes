# Advanced DOM 3

## DOM TRAVERSING

- Root Nodes

  > The document object is the root of every node in the DOM. This object is actually a property of the window object, which is the global, top-level object representing a tab in the browser. The window object has access to such information as the toolbar, height and width of the window, prompts, and alerts. The document consists of what is inside of the inner window.

  > Below is a chart consisting of the root elements that every document will contain. Even if a blank HTML file is loaded into a browser, these three nodes will be added and parsed into the DOM.

  | **Property**             | **Node**  | **Node Type** |
  | ------------------------ | --------- | ------------- |
  | document                 | #document | DOCUMENT_NODE |
  | document.documentElement | html      | ELEMENT_NODE  |
  | document.head            | head      | ELEMENT_NODE  |
  | document.body            | body      | ELEMENT_NODE  |

- Parent Nodes

  > The nodes in the DOM are referred to as parents, children, and siblings, There are two properties to get the parent — parentNode and parentElement.

  | **Property**  | **Gets**            |
  | ------------- | ------------------- |
  | parentNode    | Parent Node         |
  | parentElement | Parent Element Node |

  ```javascript
  // Assign html object to html variable
  const html = document.documentElement;

  console.log(html.parentNode); // > #document
  console.log(html.parentElement); // > null
  ```

- Children Nodes

  > The children of a node are the nodes that are one level below it. Any nodes beyond one level of nesting are usually referred to as descendants.

  | Property          | Gets                     |
  | ----------------- | ------------------------ |
  | childNodes        | Child Nodes              |
  | firstChild        | First Child Node         |
  | lastChild         | Last Child Node          |
  | children          | Element Child Nodes      |
  | firstElementChild | First Child Element Node |
  | lastElementChild  | Last Child Element Node  |

  - sniffis

    ```javascript
    ul.firstChild.style.background = "yellow";
    // Uncaught TypeError: Cannot set property 'background' of undefined
    ul.firstElementChild.style.background = "yellow";
    ```

    ```javascript
    for (let element of ul.children) {
      element.style.background = "yellow";
    }
    ```

    ```javascrip
    document.body.children[3].lastElementChild.style.background = 'fuchsia';
    ```

- Silbling Nodes

  > The siblings of a node are any node on the same tree level in the DOM. Siblings do not have to be the same type of node - text, element, and comment nodes can all be siblings.

  | Property               | Gets                          |
  | ---------------------- | ----------------------------- |
  | previousSibling        | Previous Sibling Node         |
  | nextSibling            | Next Sibling Node             |
  | previousElementSibling | Previous Sibling Element Node |
  | nextElementSibling     | Next Sibling Element Node     |

  - example

    ```javascript
    const tiger = ul.children[1];
    tiger.nextElementSibling.style.background = "coral";
    tiger.previousElementSibling.style.background = "aquamarine";
    ```

    ![](img/dom7.png)
