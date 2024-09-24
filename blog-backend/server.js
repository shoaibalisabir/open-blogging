const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const postRoutes = require('./routes/posts');
app.use('/api/posts', postRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

    
// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to the Blog API!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://${process.env.IP_ADDRESS}:${PORT}`);
});
