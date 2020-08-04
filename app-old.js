const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    let salida = {
        nombre: 'Uriel',
        edad: 24,
        url: req.url
    }
    res.write(JSON.stringify(salida))
    res.end();
});
server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.listen(8000);