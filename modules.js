// we have diffrent types of modules in nodejs
// 1. core modules
// 2. local modules
// 3. third party modules
// 4. built-in modules


// core modules are the modules that are built into nodejs, such as fs, http, path, etc

const fs = require('fs');
// fs is basically a file system module that allows us to interact with the file system

const path = require('path');
// path is a module that allows us to work with file and directory paths


const os = require('os');
// os is a module that allows us to interact with the operating system      
// os module provides information about the operating system, such as the hostname, platform, architecture, etc
os.cpus
console.log(os.cpus());
console.log(os.platform());
console.log(os.arch());    
console.log(os.homedir());



// objects that does not need to import
// such as console, setTimeout, setInterval, etc