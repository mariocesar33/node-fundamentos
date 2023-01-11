import http from 'node:http';

const server = http.createServer((request, response) => {
  return response.end('Hello Cesar!');
});

server.listen(3333, () => {console.log('Server start!!')});