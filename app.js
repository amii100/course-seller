const app = require('express')();
require('dotenv').config({ override: true });

const port = process.env.PORT || 3000;

// routes

app.get('/', (req, res) => {
    res.status(200).json({
        status: "success",
        message: "You are on the homepage."
    })
})

// listen on port
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})