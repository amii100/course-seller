const app = require('express')();
require('dotenv').config({ override: true });

const port = process.env.PORT || 3000;

// listen on port
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})