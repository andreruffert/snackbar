# snackbar

[![npm version](https://img.shields.io/npm/v/snackbar.svg)](https://www.npmjs.com/package/snackbar)

> Lightweight feedback notifications

## Install

```
$ npm install --save snackbar
```

## Usage

1. First of all make sure to import the [snackbar.scss](https://github.com/andreruffert/snackbar/blob/master/src/snackbar.scss) file into your project.

2. Use the snackbar.js API
```js
const snackbar = require('snackbar');

snackbar.show('Ohai!');
```


## API

### snackbar.show(message)

#### message 

Type `string`

### snackbar.duration

Time to show snackbar before hiding (default 5000)

Type `number`

### snackbar.gap

Time between sequential snackbars (default 250)

Type `number`

## License

MIT © [André Ruffert](http://andreruffert.com)
