const Course = require('../models/Course');

class SiteController {
    // [GET] /Site
    async index(req, res) {
        try {
            const courses = await Course.find({});
            console.log('Courses:', courses); // Log the query result
            res.json(courses); // Send the courses as a JSON response
        } catch (err) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
