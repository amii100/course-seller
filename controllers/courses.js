const { getClient } = require('../lib/database');

const getAllCourses = async (req, res) => {
    const client = await getClient();
    const data = (await client.query("SELECT * FROM course")).rows;
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

    const course_name = req.params.course_name;
    const client = await getClient();
    await client.query(`DELETE FROM course WHERE course_name = '${course_name}'`);
    res.status(200).json({success: true});
}

module.exports = {
    getAllCourses,
    postNewCourse,
    deleteCourse
}