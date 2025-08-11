// how to install Extarnal Packeges 
// 1. Open the terminal in your project directory
// 2. Run the command: npm install <package-name>
// Example: npm install colors


// it will atuomatically create a package.json file if it does not exist
// and it will also create a node_modules folder where the package will be installed   
//and also create a package-lock.json file which contains the exact version of the package that was installed


// how to use that package
// 1. require the package in your code
// 2. use the package as per its documentation
const colors = require('colors');

console.log(colors.green("this is my name " + ' and I am learning nodejs'));

console.log(colors.red("this is my name " + ' and I am learning nodejs'));

const fs = require('fs');
// how to use http module to create a simple server
const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});