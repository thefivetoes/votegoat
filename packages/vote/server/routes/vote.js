'use strict';

// The Package is past automatically as first parameter
module.exports = function(Vote, app, auth, database) {

    app.get('/vote/example/anyone', function(req, res, next) {
        res.send('Anyone can access this');
    });

    app.get('/vote/example/auth', auth.requiresLogin, function(req, res, next) {
        res.send('Only authenticated users can access this');
    });

    app.get('/vote/example/admin', auth.requiresAdmin, function(req, res, next) {
        res.send('Only users with Admin role can access this');
    });

    app.get('/vote/example/render', function(req, res, next) {
        Vote.render('index', {
            package: 'vote'
        }, function(err, html) {
            //Rendering a view from the Package server/views
            res.send(html);
        });
    });
};
