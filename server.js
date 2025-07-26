

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
app.use(bodyParser.json());

const api = require('./backend/routes');

app.get('/',function(req,res){

    res.json({
        "success":true
    });

});


app.use('/api',api);

PORT=process.env.PORT;
app.listen(PORT,function(){
    
        console.log('Servidor ON');
    
});