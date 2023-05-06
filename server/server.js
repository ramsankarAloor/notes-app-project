const express = require('express');
const app = express();

app.listen(4000);

app.use(express.json());

app.get('/health', function(req, res){
    res.status(200).send('OK');
})
