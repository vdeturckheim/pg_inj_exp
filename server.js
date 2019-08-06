'use strict';
require('sqreen');
const Express = require('express');
const Pg = require('pg');
const pool = new Pg.Pool();

const app = Express();

app.use(Express.json());

app.post('/injection', (req, res, next) => {

    const body = req.body;
    console.log('SELECT userid FROM accounts WHERE username = \'' + body.sql);
    pool.query('SELECT userid FROM accounts WHERE username = \'' + body.sql, function(err, result) {

        if (err) return next(err);
        return res.json(result);
    });
});

app.listen(8080);
