const express = require('express');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');

const route = require('./routes');
const db = require('./config/db');
db.connect(); // Connect to the database

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/resource/views'));

route(app); // Initialize routes

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
