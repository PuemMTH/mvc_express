const express = require('express');
const bodyParser = require('body-parser'); 
const morgan = require('morgan')
const app = express();

// dev depen
app.use(morgan('dev'))
app.use(bodyParser.json());

// Routes
const userRouter  = require('./src/routes/user_route');
const teslaRouter = require('./src/routes/tesla_route')

// req rounter
app.use('/users', userRouter);
app.use('/tesla', teslaRouter);

// Lesten port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});