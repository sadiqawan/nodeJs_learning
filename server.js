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



const http = require('http');

http.createServer((req, res) => {
    res.write('This is the response from the server\n');
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(4800, () => {
    console.log('Server is running on port 4800');
});