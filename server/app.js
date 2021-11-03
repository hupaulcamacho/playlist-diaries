const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
require('dotenv').config();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const songsRouter = require('./routes/songs')

const PORT = process.env.PORT;

const app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/songs', songsRouter);

app.use((err, req, res, next)  => {
    console.log(err);
    if(err.status) {
        res.status(err.status).json(err)
    } else {
        res.status(500).json(err)
    }
});

// app.listen(PORT, () => {
//     console.log('listening on port:', PORT)
// })

module.exports = app;
