const express = require('express');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contactRoutes');
const userRoutes = require('./routes/userRoutes'); // If you have user routes

const app = express();
const port = 3002;

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB (No need for deprecated options)
const dbURI = 'mongodb://localhost:27017/Skeleton';
mongoose.connect(dbURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Root route to display message when visiting the root URL
app.get('/', (req, res) => {
  res.send('{"message":"Welcome to my Portfolio Application!"}');
});

// Use routes for contacts
app.use('/api/contacts', contactRoutes);  // /contacts is the base path for contact routes
app.use('/api/users', userRoutes);  // Uncomment if you have user-related routes

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
