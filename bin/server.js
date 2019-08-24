import http from 'http';

const host = '0.0.0.0';
const port = 8090;

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-type', 'text/plain');
    response.end('Hello, World!\n');
});

server.listen(port, host, () => {
    console.log('Servidor iniciado em: http://' + host + ':' + port + '/');
});
