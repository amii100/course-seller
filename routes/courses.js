const Router = require('express').Router();
const { getAllCourses, postNewCourse, deleteCourse } = require('../controllers/courses');

Router.get('/', getAllCourses);
Router.post('/', postNewCourse);
Router.delete('/:id', deleteCourse);


module.exports = Router;