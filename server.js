const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.static('img'));
app.use(express.static('javascript'));

// Homepage
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname + "/html" });
})

app.get('/pricing', (req, res) => {
    res.sendFile('pricing.html', { root: __dirname + "/html"});
})

app.get('/login', (req, res) => {
    res.sendFile('login.html', { root: __dirname + "/html" });
})

app.get('/register', (req, res) => {
    res.sendFile('register.html', { root: __dirname + "/html" });
})

app.get('/about-us', (req, res) => {
    res.sendFile('aboutus.html', { root: __dirname + "/html" });
})

app.get('*', (req, res) => {
    res.sendFile("404.html", { root: __dirname + "/html"});
})

app.listen(3000, () => console.log(`Listening on port ${port}`));