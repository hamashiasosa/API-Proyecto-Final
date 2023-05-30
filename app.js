const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cors());
app.listen(process.env.PORT || 3000);

var quotes = [
    {
        'text': 'El helado es exquisito - qué lástima que no sea ilegal.',
        'author': 'Voltaire',
    },
    {
        'text': 'Nunca digo no a un helado',
        'author': 'Ingrid Betancourt',
    },
    {
        'text': 'El helado es mi comida reconfortante.',
        'author': 'Jessie Ware',
    },
    {
        'text': 'Sin helado, habría oscuridad y caos.',
        'author': 'Don Kardong',
    }
];

app.get('/quotes', function(req, res) { 
    var randomQuote = getRandomQuote();
    res.send(randomQuote);
});

function getRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}
