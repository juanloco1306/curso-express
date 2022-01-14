const express = require('express');
const morgan = require('morgan');
const app = express();



/* Nuestro propio middleware
function logger(req, res, next) {
    console.log(`Route Received: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}*/

app.use(express.json());
app.use(morgan('dev'));

/*app.all('/user', (req, res, next) => {
    console.log('Por aqui paso');
    next();
});*/

app.get('/user', (req, res) => {
    res.json({
        username: 'Cameron',
        lastname: 'Howe'
    });
});

app.post('/user/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params)
    res.send('Peticion post recibida');
});

app.put('/user/:id', (req, res) => {
    console.log(req.body);
    res.send(`User ${req.params.id} updated`);
});

app.delete('/user/:userId', (req, res) => {
    res.send(`User ${req.params.userId} deleted`);
});

app.listen(5000, () => {
    console.log('Server on port 5000');
});