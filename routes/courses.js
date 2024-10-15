const Router = require('express').Router();
const { getAllCourses, postNewCourse } = require('../controllers/courses');

Router.get('/', getAllCourses);
Router.post('/', postNewCourse);


module.exports = Router;