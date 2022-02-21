# Mermaid Playground

## Pie Chart

My skills

```mermaid
pie
"HTML" : 20
"CSS" : 40
"JavaScript" : 50
```

## Flow Chart

```mermaid
flowchart LR
  model.js -.send data.-> controller.js{controller.js}
  controller.js{controller.js} --> model.js
  controller.js{controller.js} --> View
  subgraph View
  direction LR
  view.js --> addRecipeView.js
  view.js --> bookmarkdView.js
  view.js --> paginationView.js
  view.js --> previewView.js
  view.js --> recipeView.js
  view.js --> searchView.js
  end

style controller.js fill:#f9f,stroke:#333,stroke-width:4px
```
