const express = require('express');
const app = express();
const port = 3000;
const User = require('./user');

app.get('/', (req, res) => {
    res.send({message: 'endponit working'})
});

app.get('/users', User.readAll);

app.listen(port, () => {
    console.log(`Server running at: http://localhost:${port}/`)
})



