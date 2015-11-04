# koa-stylus

 Stylus middleware for Koa

## Installation

```js
$ npm install koa-stylus
```

## Options

  See [the Stylus middleware document](https://learnboost.github.io/stylus/docs/middleware.html).

## Example

```js
var stylus = require('koa-stylus');
var serve = require('koa-static');
var koa = require('koa');
var app = koa();

app.use(stylus('./public'));

app.use(serve('./public'));

app.listen(3000);
```

## License

  MIT
