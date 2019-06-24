const mongoose = require('mongoose');
const URI = require('../client/config/');

mongoose.connect(process.env.MONGODB_URI || URI);
mongoose.connect(
  URI,
  { useNewUrlParser: true }
);


mongoose.connection.on('connected', function () {  
  console.log('Established mongoose default connection');
}); 

mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 


mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});