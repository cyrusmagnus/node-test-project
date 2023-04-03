const express = require('express');
const app = express();

app.get('/', function(request, response){
    response.send('main page');
});
app.get('/upload', function(request, response){
    response.send('uploading files')
})

app.listen(3000, function(){
    console.log('starting server');
})