
const  express = require('express');
const app = express();

//this is where the server will be looking for files in.
app.use(express.static('./'));

// app.use(express.static(express.static('./dh_h98eud')));

//if no specific directory is entered this will be the defualt
app.get('/', function( request,response){
    response.send('index.html')
})

app.listen(8080, function(){
    console.log ('listening on port 8080');

})