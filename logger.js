const EventEmitter = require('events');

var url = 'https;//mylogger.io';

class Logger extends EventEmitter {
    log(message){
        //send http reques
        console.log(message);
    
        //Rise event
        this.emit('messageLogged', {id : 1, message : 'hello world'});
    }

}

console.log(__filename);
console.log(__dirname);

module.exports = Logger;
module.exports.url = url;