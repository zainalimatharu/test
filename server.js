// importing required modules & packages
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const PORT = 3639;

// importing routes

// using routes

// listening server
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
