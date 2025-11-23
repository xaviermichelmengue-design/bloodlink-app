const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Routes pour les pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/signup.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/login.html'));
});

app.get('/donor-dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/donor-dashboard.html'));
});

app.get('/doctor-dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/doctor-dashboard.html'));
});

app.get('/bloodbank-dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/bloodbank-dashboard.html'));
});

// API Routes
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        message: 'BloodLink Server is running',
        timestamp: new Date().toISOString(),
        version: '1.0.0'
    });
});

// Route de fallback
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Démarrer le serveur
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 BloodLink server running on port ${PORT}`);
    console.log(`📁 Serving static files from: ${path.join(__dirname, '../public')}`);
});
