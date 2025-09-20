import colors from 'colors';

const logger = (req, res, next) => {

    const methodColors = {
        GET: 'green',
        POST: 'blue',
        PUT: 'yellow',
        DELETE: 'red',
    }

    res.on('finish', () => {
        const color = res.statusCode === 200 || res.statusCode === 201 ? (methodColors[req.method] || white) : 'red';
        console.log(`METHOD: ${req.method} --> ${req.protocol}://${req.get('host')}${req.originalUrl}\nStatus code: ${res.statusCode}`[color]);
    });
    next();
};

export default logger;