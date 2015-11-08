var path = require('path');

global.root = path.resolve(__dirname);
global.libRoot = path.join(path.resolve(__dirname) + '/lib/');
global.configRoot = path.join(path.resolve(__dirname) + '/config/');

global.config = require(global.configRoot + 'main')[process.env.NODE_ENV || "development"];

console.log(global.configRoot);
console.log(global.config);