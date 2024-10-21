const Router = require('express').Router();
const { getAllCourses, getCourse, postNewCourse, deleteCourse } = require('../controllers/courses');

Router.get('/', getAllCourses);
Router.get('/:id', getCourse);
Router.post('/', postNewCourse);
Router.delete('/:id', deleteCourse);


module.exports = Router;