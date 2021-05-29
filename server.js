const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.static('img'));

// Homepage
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname + "/html" });
})

app.get('/aboutme', (req, res) => {
    res.sendFile('about-me.html', { root: __dirname + "/html" });
})

app.listen(3000, () => console.log(`Listening on port ${port}`));