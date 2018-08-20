# Chinese Lorem

[![Build Status](https://travis-ci.com/jnoodle/chinese-lorem.svg?branch=master)](https://travis-ci.com/jnoodle/chinese-lorem) [![Coverage Status](https://coveralls.io/repos/github/jnoodle/chinese-lorem/badge.svg?branch=master)](https://coveralls.io/github/jnoodle/chinese-lorem?branch=master)

Generate lorem ipsum Chinese text.

中文测试文本生成器

## Installation

`npm install chinese-lorem`

## Usage

```javascript
const chineseLorem = require('chinese-lorem');

chineseLorem('10c');
chineseLorem('10w');
chineseLorem(10, 'c');
chineseLorem(10, 'w');

```

## Test

`npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
