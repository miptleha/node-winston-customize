# winston-customize
Customization of winston logger module

Wrapper on winston module.

## Usage:

```
var logger = require('./logger')(module);
logger.debug('debug info');
```

Logs string in console and file (set in logger.js) in format:

```
2017-06-15 13:24:57.856 - debug: [2/test.js] debug info
```
