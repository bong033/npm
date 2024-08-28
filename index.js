'use strict';   // inform the javascript engine that the code on this page uses strict rules

const express = require('express'); //import the express library

// Constants
const PORT = 8989;
const HOST = '127.0.0.1';
const OS = require('os');
const ENV = 'DEV';

// Application where we have endpoints that users can look for
const app = express();  // invoke the express library through instantiating it as a variable called app
app.get('/', (req, res) => {    // listens for http://localhost:8989 to be called
    res.statusCode = 200; // returns a response.ok
    const msg = 'Hello FSD Learner! Running Node.js!';    // create a message to be return
    res.send(msg);    // send the message to the user
});

app.get('/test', (req, res) => {    // listens to http://localhost:8989/test to be called
    res.statusCode = 200;   // returns a response.ok
    const msg = 'Hello from /test Node!';   // create a message to be return
    res.send(msg);  // send the message to the user
});

app.listen(PORT, HOST);
// console.log("Running on PORT:" + PORT + " and HOST:" + HOST); // conventional way to concatenate strings
console.log(`Running on http://${HOST}:${PORT}`); // using template strings to concatenate strings
 
console.log(OS.platform());