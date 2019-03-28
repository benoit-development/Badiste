import express from 'express';

// Set up the express app
const app = express();
const routes = require('./app/routes/appRoutes');
const PORT = 5000;

// get all todos
app.use('/', routes);

// server listen
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});