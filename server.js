import express from 'express';

// Set up the express app
const app = express();
const routes = require('./app/routes/appRoutes');
const PORT = 5000;
var cors = require('cors');

// get all todos
app.use(cors());
app.use('/', routes);

// server listen
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});