//File: myportfolio-backend\backend\server.js
// Name: Akanksha Gurram
// Student ID: 301453510
// Date: 2025-02-27


const express = require('express');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contactRoutes');
const userRoutes = require('./routes/userRoutes'); 

const app = express();
const port = 3002;

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB 
const dbURI = 'mongodb://localhost:27017/Skeleton';
mongoose.connect(dbURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Root route to display message when visiting the root URL
app.get('/', (req, res) => {
  res.send('{"message":"Welcome to my Portfolio Application!"}');
});

// Use routes for contacts
app.use('/api/contacts', contactRoutes); 
app.use('/api/users', userRoutes);  

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
