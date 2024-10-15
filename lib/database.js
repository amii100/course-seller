const { Pool } = require('pg');

const getClient = async () => {
    const client = new Pool({
        connectionString: `postgres://postgres:password@localhost:5434/course_seller`
    })

    try {
        await client.connect();
        console.log(`Database connected successfully`);
    } catch (err) {
        console.log(err);
    }

    return client;
}

module.exports = {
    getClient
}