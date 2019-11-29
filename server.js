const http = require('http');

const todos = [
  { id: 1, text: 'Todo One' },
  { id: 2, text: 'Todo Two' },
  { id: 3, text: 'Todo Three' }
];

const server = http.createServer((req, res) => {
  res.statusCode = 400;

  res.writeHead(400, {
    'Content-Type': 'appliaction/json',
    'X-Powered-By': 'Node.js'
  });

  res.end(
    JSON.stringify({
      success: false,
      error: 'Please add Email',
      data: null
    })
  );
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
