var rework = require('rework');
var plugin = require('../index.js');

var read = require('fs').readFileSync;
var write = require('fs').writeFileSync;

var css = rework(read('source.css', 'utf8')).use(plugin).toString();

write('output.css', css);