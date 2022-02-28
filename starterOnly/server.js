(function () {
    "use strict";

    const express = require('express');
    const path = require("path");


    const app = express();


    // Setting up Views
    app.set("view engine", "ejs");
    app.set('views', __dirname);
    app.use('/script', express.static(__dirname + '/script'));
    app.use('/images', express.static(__dirname + '/images'));
    app.use('/css', express.static(__dirname + '/css'));

    app.get('/', (req, res) => {
        return res.render("index");
    });


    app.listen('3001', () => {
        console.log('listening on *:3001');
    });


}());