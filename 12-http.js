const http = require('http');

const server = http.createServer((req, res) => {
    
    if (req.url === '/') {
        res.end('Welcome to our home page');
    }
    // res.writeHead(200, {'content-type':'text/html'});
    // res.write('<html><body><p>Hello world!</p></body></html>');
})

server.listen('3000');