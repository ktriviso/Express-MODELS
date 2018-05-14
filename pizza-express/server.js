const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const pizzaRoutes = require('./routes/pizza-routes.js');

// i dont think i need this...
const models = require('./models/pizza.js');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    // console.log(models)
})

app.use('/pizza', pizzaRoutes);

app.use('*', (req, res) => {
  res.status(404).json('Not Found!');
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
