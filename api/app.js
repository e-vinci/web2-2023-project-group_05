const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const corsOptions = {
  credentials: true,
  origin: ['http://localhost:8080', 'https://e-baron.github.io', 'https://group-05.github.io/web2-2023-project-group_05/'],
};

const authsRouter = require('./routes/auths');
const categoriesRouter = require('./routes/categories');
const topicsRouter = require('./routes/topics');
const chatsRouter = require('./routes/chats');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors(corsOptions));

app.use('/auths', authsRouter);
app.use('/categories', categoriesRouter);
app.use('/topics', topicsRouter);
app.use('/chats', chatsRouter);

module.exports = app;
