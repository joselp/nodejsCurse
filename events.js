const Logger = require('./logger');

var logger = new Logger();

//Register listener
logger.on('messageLogged', (arg) => {

    console.log(`Listener called. id : ${arg.id}, message: ${arg.message}`);

});

logger.log('Event logged');