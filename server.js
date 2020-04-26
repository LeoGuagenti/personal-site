const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (request, response, next) => {
    console.log(retriveIP(request));
    response.sendFile(path.join(__dirname, 'build', 'index.html'));
    response.end();
});

app.listen(process.env.PORT || 8080);
