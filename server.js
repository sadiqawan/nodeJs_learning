// // import the core module
// const http = require('http');

// // create the server
// http.createServer((req, res) => {
//     // request is the incoming request from the client
//     // response is the outgoing response to the client
//     res.write('This the reponse');
//     res.end('Hello World\n');
// }).listen(4800, () => {
//     console.log('Server is running on port 4800');
// });


// This code creates a simple HTTP server using Node.js
const http = require('http');
const colors = require('colors');

http.createServer((req, res) => {
    res.write('This is the response from the server\n'.green);
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(300, () => {
    console.log('Server is running on port 300');
});