# new-operator

  the `new` operator as a function

## Rationale

  This `new` inherits the first-class nature of functions, allowing you to do a couple of cool things that you never could with new.
  That also gets you `.apply()`, _even for native constructors_.

### `Reflect.construct`

  ES2016 (aka ES6) provides `Reflect.construct`, which works similarly. We fall back to it for cases with over 20 arguments if available.

## Installation

    npm install new-operator

## API

  `var new_ = require('new-operator')`

### new_.call(constructor, …arguments)
### new_.apply(constructor, arguments)
### new_.bind(constructor, …arguments)
