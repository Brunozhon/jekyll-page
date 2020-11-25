---
layout: docs
title: Getting started with CoolJS 1.0
desc: 1.0 is a good version for basic testing.
---

# Getting started with CoolJS

CoolJS will be great to learn if you just wait for the features to come.

Simple CoolJS script

```javascript
class Hello {
  constructor() {}
  static render() {
    return Cool.createElement("h1", "Hello World!")
  }
}
CoolJS.render(Hello, "#root");
```

## Why do you need `static`?

Compare this one with the one above.

```javascript
class Hello {
  constructor() {}
  render() {
    return Cool.createElement("h1", "Hello World!")
  }
}
CoolJS.render(new Hello(), "#root")
```

There is no need to create new objects when you don't need thwm unless...

```javascript
class App {
  constructor() {}
  render() {
    return Page.render("cool", "This is cool!")
  }
}
class Page {
  constructor() {}
  static render(elem, txt) {
    return Cool.createElement(elem, txt)
  }
}
var app = new App()
// ...
CoolJS.render(app, "#root")
```

Anyways, you won't be creating apps now unless you use diffrent stuff with CoolJS

## When was CoolJS released?

There isn't a release yet.

