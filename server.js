

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
//app.use(bodyParser.json());
app.use(express.json());

const api = require('./backend/routes/');

app.use('/api',api);

// Todo código precisa ficar depois das rotas conhecidas
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('frontend/build'))

    const path = require('path')
    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })
}

PORT=process.env.PORT;
app.listen(PORT,function(){
    
        console.log('Servidor ON');
    
});