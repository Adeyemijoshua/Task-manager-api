const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017'; // Replace 'localhost' with your MongoDB server address

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  console.log('Connected to MongoDB server');

  // Don't forget to close the connection when you're done with it
  client.close((err) => {
    if (err) {
      console.error('Error closing MongoDB connection:', err);
    } else {
      console.log('Disconnected from MongoDB server');
    }
  });
});
