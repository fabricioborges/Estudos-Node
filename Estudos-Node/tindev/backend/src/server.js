const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const routes = require('./routes');
const server = express();

server.use(express.json());
server.use(cors());
server.use(routes);

mongoose.connect('mongodb://localhost:27017/Tindev', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

server.listen(3333);