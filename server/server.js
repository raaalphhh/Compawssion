require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const petRouter = require('./Routes/PetRoute');
const AdoptFormRoute = require('./Routes/AdoptFormRoute');
const AdminRoute = require('./Routes/AdminRoute');
const cors = require('cors');
const path = require('path');

const app = express();

// Enable CORS for frontend (change origin to your actual frontend URL)
app.use(cors({
  origin: 'https://compawssion-1.onrender.com', // allow your frontend to access this server
  credentials: false
}));

// Serve images statically from /images
app.use('/images', express.static(path.join(__dirname, 'images')));

// Parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use(petRouter);
app.use('/form', AdoptFormRoute);
app.use('/admin', AdminRoute);

// Connect to MongoDB and start the server
mongoose.connect(process.env.mongooseURL)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    
    // Use dynamic port for deployment (Render will provide it)
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });
