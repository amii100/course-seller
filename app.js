const app = require('express')();
require('dotenv').config({ override: true });

const port = process.env.PORT || 3000;

// routes

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "You are on the homepage."
    })
})

app.get('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: "Page Not Found"
    })
})
// listen on port
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})