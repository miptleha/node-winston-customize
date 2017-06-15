# winston-customize
Customization of winston logger module

Wrapper on winston module.

## Usage:

```
var logger = require('./logger')(module);
logger.info('some job done');
```

This code write string in console and file (filename set in logger.js) in format:

```
2017-06-15 13:24:57.856 - info: [2/test.js] some job done
```

See test.js for more samples

All customization code in logger.js
