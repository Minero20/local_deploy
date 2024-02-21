const express = require('express')
const app = express()
const cors = require("cors");
const port = 6681;
app.use(cors());

app.get('/', (req, res) => {
    res.send('Client!')
})

app.get('/app', (req, res) => {
    return res.send("App Response from Client!");
});

app.get('/app/v1', (req, res) => {
    return res.send("App v1 Response from Client!");
});

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})