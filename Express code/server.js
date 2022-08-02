// import express
const express = require('express')

// creating an express object 
const app = express()

//GET Request
//Path: '/hello'
//port = 8080

app.get("/hello", (request, response) => {
    response.send("world");
})

app.get("/", (request, response) => {
    response.send("At the / endpoint");
})
app.get("/hello", (request, response) => { 
     response.send("world")
    });
    
    app.get("/data", (request, response) => {
        response.json({
            kittens: 3,
        });
      });

    app.get("/fail", (request, response) => {
        response.status(400).json({ errorMessage: "missing parameters" });
      
      });  
    // listen for network traffic (request and responses) on port 8080
    const PORT = 8080 
    app.listen(PORT, () => {
        console.log(`Express server up on port: ${PORT}`)})