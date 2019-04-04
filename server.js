import express from 'express';

// Set up the express app
const app = express();
const routes = require('./app/routes/appRoutes');
const bodyParser = require('body-parser');
const PORT = 5000;
var cors = require('cors');

// configure app
app.use(cors());
app.use('/', routes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// server listen
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});