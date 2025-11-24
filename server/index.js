const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour servir les fichiers statiques
app.use(express.static(path.join(__dirname, '../public')));

// Middlewares
app.use(cors());
app.use(express.json());

// Route API health - DOIT ÊTRE AVANT les routes de fichiers
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        message: 'BloodLink Server is running',
        timestamp: new Date().toISOString(),
        version: '1.0.0'
    });
});

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

// Route de fallback - DOIT ÊTRE LA DERNIÈRE
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Démarrer le serveur - configuration Render
app.listen(PORT, () => {
    console.log(`🚀 BloodLink server running on port ${PORT}`);
    console.log(`📁 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`📁 Static files from: ${path.join(__dirname, '../public')}`);
});
