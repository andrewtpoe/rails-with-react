require('babel-polyfill');

var context = require.context('.', true, /.+\_test.js/);
context.keys().forEach(context);
module.exports = context;
