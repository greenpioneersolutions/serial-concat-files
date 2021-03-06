# serial-concat-files
concat files in order

[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]
[![Dependency Status](https://david-dm.org/greenpioneersolutions/serial-concat-files.svg)](https://david-dm.org/greenpioneersolutions/serial-concat-files)
[![devDependency Status](https://david-dm.org/greenpioneersolutions/serial-concat-files/dev-status.svg)](https://david-dm.org/greenpioneersolutions/serial-concat-files#info=devDependencies)
[![npm-issues](https://img.shields.io/github/issues/greenpioneersolutions/serial-concat-files.svg)](https://github.com/greenpioneersolutions/serial-concat-files/issues)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Build Status](https://travis-ci.org/greenpioneersolutions/serial-concat-files.svg?branch=master)](https://travis-ci.org/greenpioneersolutions/serial-concat-files)
[![js-standard-style](https://nodei.co/npm/serial-concat-files.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/serial-concat-files.png?downloads=true&downloadRank=true&stars=true)

[npm-image]: https://img.shields.io/npm/v/serial-concat-files.svg?style=flat
[npm-url]: https://npmjs.org/package/serial-concat-files
[downloads-image]: https://img.shields.io/npm/dm/serial-concat-files.svg?style=flat
[downloads-url]: https://npmjs.org/package/serial-concat-files


## Install

```bash
# NPM
npm i -s serial-concat-files
# YARN
yarn add serial-concat-files
```

## Usage

```js
var concat = require('serial-concat-files')()
concat(['./test/a', './test/b', './test/b'], './test/files/allc')
// OR
var concat = require('serial-concat-files')({ 
  post: '<POST>', // 
  last:'<LAST>',
  first:'<FIRST>',
  pre:'<PRE>'
})
concat(['./test/a', './test/b', './test/b'], './test/files/allc', function (error) {
  // <FIRST>this is a<POST><PRE>this is b<POST><PRE>this is b<LAST>
})
```

