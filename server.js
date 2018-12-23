
//brings in the library
const  express = require('express');
//saves the library in a const so we can use. 
const app = express();
const PORT = process.env.PORT || 3000;
//this is where the server will be looking for files in.
app.use(express.static('./'));
//if no specific directory is entered this will be the defualt
app.get('/', function( request,response){
    response.send('index.html')
})


app.listen(PORT, function() {
    console.log(`listening on port number ${PORT}`);
  });
  