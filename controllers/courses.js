const { getClient } = require('../lib/database');

const getAllCourses = async (req, res) => {
    const client = await getClient();
    const data = (await client.query("SELECT * FROM course")).rows;
    res.status(200).json(data);
}

const postNewCourse = async (req, res) => {
    const client = await getClient();
    const course_name = "New course";
    const author = "New Author";
    const price = 12000;
    await client.query(`INSERT INTO course (course_name, author, price) values (${course_name}, ${author}, ${price})`);
    res.status(201).json({success: true});
}

module.exports = {
    getAllCourses,
    postNewCourse
}