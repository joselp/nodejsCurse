const http = require('http');

const server = http.createServer((req, res) => {
    if( req.url === '/' ){
        res.write('Hello world');
        res.end();
    } else{
        res.write(req.url);
        res.end();  
    }
    
});

server.listen(3000);

console.log('Listening port 3000');