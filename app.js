const app = require('express')();
const morgan = require("morgan");
require('dotenv').config({ override: true });

const port = process.env.PORT || 3000;

// middlewares

app.use(morgan('dev'));

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