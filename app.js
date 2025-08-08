// Using Node.js to create a simple HTTP server

// // Import the built-in HTTP module
// const http = require('http');

// // Define the server's hostname and port
// const hostname = '127.0.0.1'; // localhost
// const port = 3000;

// // Create the server
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!\n');
// });

// // Make the server listen on the specified port and hostname
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


// different types of requests using Express
// types of requests: GET, POST, PUT, DELETE

// Get: it is used to retrieve data from the server.
// Post: it is used to send data to the server.
// Put: it is used to update existing data on the server.
// Delete: it is used to delete data from the server.


// Import the Express framework
// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello, World with Express!');
// });

// app.listen(port, () => {
//   console.log(`Express app listening at http://localhost:${port}`);
// });

//Step 1: Creating express ref, setting up port
const express = require('express');
const app = express();
const PORT = 3000;
//Step 2: Middleware to parse JSON request body
app.use(express.json());
//Step 3: GET route - root
app.get('/', (req, res) => {
    res.send('Welcome to Express');
});
//Step 4: POST route - accepts JSON data 
app.post('/data', (req, res) => {
    res.json({
        message: 'Data recieved sucessfully ',
        YourData: req.body
    });
});
//Step 5: PUT route - update data
app.put('/update', (res,req) => {
    res.json({
        message: 'Data updated sucessfully ',
        YourData: req.body
    });
} );
//Step 6: DELETE route
app.delete('/delete', (res,req) => {
    res.json({
        message: 'Data deleted sucessfully '});
} );
//Step 7: Dynamic route with URL parameter
app.get('/users/:id', (req, res) => {
    res.json({message : `user ID is ${req.params.id}`});
});

//Step 8: Start the server 
    
app.listen(PORT,() => {
    console.log(`Server is running at http://localhost:${PORT}`);
    });