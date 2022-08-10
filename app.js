const express = require('express');
const server = express();

const pug = require('pug');

//лвл1 
//пару роутів
server.get('/', (req,res) => {
    res.send('<h1>Start page</h1>');
});

server.get('/receip/:id', (req,res) => {
    const {id} = req.params;
    console.log(id);
    console.log(req.query);
    res.send('ok');
});

//лвл2
//джейсон
let obj = {
    1: 'one',
    2: 'two',
    'name': 'Name'
}
server.get('/json', (req,res) => {
    res.setHeader('Content-Type', 'application/json'); 
    console.log(JSON.stringify(obj));
    res.send(JSON.stringify(obj));
});
//файл
server.get('/file', (req,res) => {
    res.setHeader('Content-Type', 'image/gif'); 
    res.sendFile(__dirname + '/file');
});



//лвл3
//статік сервер http://localhost:3001/static/file.gif 
server.use('/static', express.static(__dirname + '/public'));

//лвл4
server.set('views', (__dirname, 'views'));
server.set('view engine', 'pug');
server.get('/pug', (req, res) => {
  const data = { title: 'Добрий вечір', message: 'Ми з України!' };
  res.render('index', data);
})

server.listen(3001);