const express = require('express');
const morgan = require('morgan');
const app = express();

//Settings
app.set('appName','Fazt Express Tutorial');
app.set('port', 3000);
app.set('view engine', 'ejs');

/* Nuestro propio middleware
function logger(req, res, next) {
    console.log(`Route Received: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}*/

//Middleware
app.use(express.json());
app.use(morgan('dev'));

//Routes
/*app.all('/user', (req, res, next) => {
    console.log('Por aqui paso');
    next();
});*/

app.get('/', (req, res) => {
    const data = [{name: 'john'}, {name: 'joe'}, {name: 'cameron'}, {name: 'juan'}];
    res.render('index.ejs', {people: data});
});

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

app.use(express.static('public'));

app.listen(app.get('port'), () => {
    console.log(app.get('appName'));
    console.log('Server on port', app.get('port'));
});