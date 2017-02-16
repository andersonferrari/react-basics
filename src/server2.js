require('babel-register')({
    presets: ['es2015', 'react']
});

var express = require('express');
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
//var Landing = require('./js/pages/landing/index');
var Component = require('./js/pages/landing/Component.jsx');

console.log(111)
console.log(Component)
console.log(Component.toString())
app.get('/', function(request, response) {
    var html = ReactDOMServer.renderToString(
        React.createElement(Component)
    );
    response.send(html);
});

var PORT = 3000;
app.listen(PORT, function() {
    console.log('http://localhost:' + PORT);
});