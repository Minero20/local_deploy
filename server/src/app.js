const express = require('express')
const app = express()
const cors = require("cors");
const port = 6682;
app.use(cors());

app.get('/', (req, res) => {
    res.send('Server!')
})

app.get('/app', (req, res) => {
    return res.send("App Response from Server!");
});

app.get('/app/v1', (req, res) => {
    return res.send("App v1 Response from Server!");
});

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})