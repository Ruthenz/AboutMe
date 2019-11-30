const express = require('express');
const app = express();
const PORT = 3000;

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));