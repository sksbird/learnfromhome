 const moment = require('moment');

// const logger = (req, res, next) => {
//     console.log(`${req.protocol}://${req.get('host')}${
//         req.originalUrl
//         }: ${moment().format()}`);
//     console.log('test');
//     next();
// };

// module.exports = logger;

/**
* Configurations of logger.
*/
const winston = require('winston');
const winstonRotator = require('winston-daily-rotate-file');

const consoleConfig = [
    new winston.transports.Console({
        'colorize': true
    })
];

const createLogger = new winston.createLogger({
    'transports': consoleConfig
});

const successLogger = createLogger;


successLogger.add(new (winston.transports.DailyRotateFile)({
    filename: './logs/success/success-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    level: 'info',
    prepend: true,
    maxSize: '20m',
    maxFiles: '14d'
}));

const errorLogger = createLogger;

errorLogger.add(new (winston.transports.DailyRotateFile)({
    filename: './logs/error/error-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    level: 'error',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d'
}));

module.exports = {
    'successlog': successLogger,
    'errorlog': errorLogger
};