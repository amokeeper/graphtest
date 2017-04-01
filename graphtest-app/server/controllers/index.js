var rendering = require('../../util/rendering');


exports.home = function(req, res) {
    res.render('index/index');
}


exports.userHome = function(req, res) {

    var user = req.session.user;
    res.render('index/user-home',{user:user});
}
