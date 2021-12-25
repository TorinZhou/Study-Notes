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
