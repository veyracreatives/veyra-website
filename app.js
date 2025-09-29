const express = require('express');
const path = require('path');
const app = express();

// Use the PORT environment variable provided by the hosting service, or 3000 for local development
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for the services page
app.get('/services.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'services.html'));
});

// Route for the contact page
app.get('/contact.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
