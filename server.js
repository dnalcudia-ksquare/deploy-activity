const routes = require('./src/routes/todos.routes'); // import the routes
const express = require('express');
const mongoose = require('mongoose'); //import mongoose
const helmet = require('helmet');

const app = express();
app.use(helmet());

app.use(express.json());

app.use('/', routes); //to use the routes

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});

mongoose.connect(
  'mongodb+srv://dnalcudia:nacdoc-Goxzoz-0rufdu@ormpractice.8tqom.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  (err) => {
    if (err) return console.log('Error: ', err);
    console.log(
      'MongoDB Connection -- Ready state is:',
      mongoose.connection.readyState
    );
  }
);
