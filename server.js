const container = require('./container');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


container.resolve(function(users){
    const app = setupExpress();


    function setupExpress(){
   
        const app = express();

   
        const server = http.createServer(app);
   
        server.listen(process.env.PORT||3000,function(){
            console.log("Listineg on port 3000")
        });
        ConfigureExpress(app);
        
        //Setup Router
        const router = require('express-promise-router')();
        users.SetRouting(router);
        app.use(router);

        
        app.use(function(req,res){
        res.send('Error 404')
    });

    };




    function ConfigureExpress(app){
        
        app.use(express.static('public'));
        app.use(cookieParser());
        app.set('view engine', 'ejs');
        app.use(bodyParser.json());
    
    }


});