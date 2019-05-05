const os = require('os')

var totalMemory = os.totalmem();
var freemem = os.freemem();

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freemem}`);