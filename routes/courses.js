const Router = require('express').Router();
const { getAllCourses } = require('../controllers/courses');

Router.get('/', getAllCourses);


module.exports = Router;