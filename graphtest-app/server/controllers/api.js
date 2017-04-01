var data = require('../models/auth')();
var URL = require('url');
exports.api = function(req, res) {
    res.render('api/index');
}

exports.user = function(req, res) {

    var url = req.url;
    switch(url){
        case "/api/user":
            data.ApiUser.fetchAll().then(function(users){
                res.json(users);
            });
            break;
        default:
            res.json({userList:'',returnCode:-1,returnMsg:'没有对应的处理方法！'});
            break;
    }





}

