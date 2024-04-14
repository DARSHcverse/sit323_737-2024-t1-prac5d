// Importing the express module
const express = require("express");

// Creating an express application
const app = express();

// Function to add two numbers
const addTwoNumber = (n1, n2) => {
    return n1 + n2;
}

// Route to handle GET requests to "/addTwoNumber"
app.get("/addTwoNumber", (req, res) => {
    // Parsing query parameters
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    // Calculating the result
    const result = addTwoNumber(n1, n2);

    // Sending JSON response with the result
    res.json({ statuscocde: 200, data: result });
});



app.get("/", (req, res) => {
    var n1 = parseInt(req.query.n1);
    var n2 = parseInt(req.query.n2);
    var n3=console.log(addTwoNumber(23, 76));
    
    // HTML content to be sent as response
    var w1 = `<html><body><H1>${n3}</H1></body></html>`;
    
    // Setting content type as HTML
    res.set('Content-Type', 'text/html');
    
    // Sending the HTML response
    res.send(Buffer.from(w1));
});

//adding 23 and 76 to the console
console.log(addTwoNumber(23, 76));

// Defining the port for the server to listen on
const port = 3000;

// Starting the server and listening on the specified port
app.listen(port, () => {
    console.log("listening on port " + port);
});