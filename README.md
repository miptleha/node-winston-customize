# winston-customize
Customization of winston logger module

Wrapper on winston module.

## Usage:

```
var logger = require('./logger')(module);
logger.debug('debug info');
```

This code write test in console and file (filename set in logger.js) in format:

```
2017-06-15 13:24:57.856 - debug: [2/test.js] debug info
```

See test.js for more samples
All code in logger.js
