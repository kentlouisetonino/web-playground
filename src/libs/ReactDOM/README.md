## What is DOM (Document Object Model)?

> - This represents the web page as a tree structure.
> - Any HTML that we code is added as a node, to this tree.

<br />

## document

> - Any tree must have a root node and this is the `document`.
> - `document` is part of the browser. Any `HTML` tag you write is going to be a direct or indirect child of the root node document.

![Conceptual Tree Structure](../Images/conceptual-dom.png)

<br />

## Accessing DOM in ReactJS

> - Link: https://react.dev/learn/manipulating-the-dom-with-refs
> - `React` automatically updates the DOM to match your render output, so your components won't often need to manipulate it. Sometimes you need to access the DOM elements managed by React, for example, to focus a node, scroll to it, or measure its size and position.
> - There is no built-in way to do those things in React, so you will need a `ref` to the DOM node.
