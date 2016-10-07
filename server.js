//This is the node server to run the dist folder folder

var express = require('express');

var path = require('path');

var app = express();

var clientDir = path.join(__dirname, '/dist');

app.use('/assets', express.static(path.join(clientDir, 'assets')));
app.use('/config', express.static(path.join(clientDir, 'config')));
app.use('/lang_files', express.static(path.join(clientDir, 'lang_files')));

app.get('/*', function(req, res) {
    res.sendfile(path.join(clientDir, 'index.html'));
});

app.listen(3000);
console.log('Listening on port 3000...');
