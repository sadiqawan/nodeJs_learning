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


// // This code creates a simple HTTP server using Node.js
// const http = require('http');
// const colors = require('colors');

// http.createServer((req, res) => {
//     res.write('This is the response from the server\n'.green);
//     // res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello World\n');
// }).listen(300, () => {
//     console.log('Server is running on port 300');
// });



const http = require('http');


// Create a simple HTTP server
http.createServer((req, res) => {
    // Set the response HTTP header with HTTP status and Content type
    // we can also set instead of reponse type like json, html, text, etc

     // Set the HTTP header with status code and content type
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Send the HTML response
    res.write('<h1>This is the response from the server</h1>');
    res.end('<p>Hello World</p>');
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
}); 