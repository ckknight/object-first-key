# object-first-key [![Build Status](https://travis-ci.org/ckknight/object-first-key.svg?branch=master)](https://travis-ci.org/ckknight/object-first-key)

> Returns the first own key of an object

## Install

Ensure you have [Node.js](https://nodejs.org) version 4 or higher installed. Then run the following:

```
$ npm install object-first-key
```

## Usage

```js
// ES5
const objectFirstKey = require('object-first-key');
// ES2015+
import objectFirstKey from 'object-first-key';

objectFirstKey({ hello: 'world' }) === 'hello';
objectFirstKey({}) === undefined;
```

The return value for an object with more than one own property keys is
intentionally left unspecified.

## License

MIT © Cameron Knight
