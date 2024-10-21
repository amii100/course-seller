const { getClient } = require('../lib/database');

const getAllCourses = async (req, res) => {
    const client = await getClient();
    const data = (await client.query("SELECT * FROM course")).rows;
    res.status(200).json(data);
}

const getCourse = async (req, res) => {
    const client = await getClient();
    const id = req.params.id;
    const data = (await client.query(`SELECT * FROM course WHERE id = ${id}`)).rows;
    res.status(200).json(data);
}

const postNewCourse = async (req, res) => {
    const client = await getClient();
    const { course_name, author, price } = req.query;
    await client.query(`INSERT INTO course (course_name, author, price) values ('${course_name}', '${author}', '${price}')`);
    res.status(201).json({success: true});
}

const deleteCourse = async (req, res) => {
    // delete a course from the db list

    const id = req.params.id;
    const client = await getClient();
    await client.query(`DELETE FROM course WHERE id = '${id}'`);
    res.status(200).json({success: true});
}

module.exports = {
    getAllCourses,
    getCourse,
    postNewCourse,
    deleteCourse
}