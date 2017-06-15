var winston = require('winston');

module.exports = function(callingModule) {

    return new winston.Logger({
        transports: [new winston.transports.Console({
            level: 'info',
            label: getLabel(),
            colorize: true,
            timestamp: timestampFormat
        }),
        new winston.transports.File({
            level: 'debug',
            label: getLabel(),
            filename: 'file.log',
            json: false,
            timestamp: timestampFormat
        })]
    });


    // Output timestamp format
    function timestampFormat() {
        return new Date().toISOString().replace(/T/, ' ').replace(/Z/, '');
    }

    // Return the last folder name in the path and the calling module's filename.
    function getLabel() {
        var parts = callingModule.filename.split('\\');
        var res = parts[parts.length - 2] + '/' + parts.pop();
        return res;
    }
};
