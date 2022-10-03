require('dotenv').config()
const express = require('express')
const path = require('path');
const mongoose = require('mongoose')
const port = process.env.PORT || 5000;

const userRoutes = require('./routes/user')



//express app
const app = express()


//middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
// app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)


// heroku deployment
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  app.use(express.static('frontend/build'));
  app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/frontend/build/index.html'));
  });
 }

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(port, () => {
      console.log('listening for requests on port', port)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 