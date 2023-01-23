import http from 'node:http';

const users = [];

const server = http.createServer((request, response) => {
  const { method, url } = request;

  if (method === 'GET' && url === '/users') {  
    return response
    .setHeader('Content-type', 'application/json')
    .end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {
    users.push({
      id: 1,
      name: 'John Doe',
      email: 'jhondoe@exemplo.com'
    });
    return response.end('Criação de usuários')
  }

  return response.end('Hello César!')
});

server.listen(3333, () => {console.log('Server starting 😎😎')});