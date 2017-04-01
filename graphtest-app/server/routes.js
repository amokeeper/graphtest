
var rendering = require('../util/rendering'),
    indexController = require('./controllers/index'),
    loginController = require('./controllers/login'),
    apiController = require('./controllers/api'),
    passport = require('passport'),
    jwt = require('jsonwebtoken'),
    data = require('./models/auth')();
module.exports = function (app, passport) {

    // Home

    //  跳转页面-》主页
    app.get('/', indexController.home);
    //  跳转页面-》如果认证成功-》用户主页
    app.get('/home', ensureAuthenticated, indexController.userHome);

    // Auth
    app.get('/register', loginController.registerPage);
    app.post('/register', loginController.registerPost);
    app.get('/login', loginController.loginPage);
    app.post('/login', loginController.checkLogin);
    app.get('/logout', loginController.logout);


    app.get('/api', apiController.api);
    //增加token验证
    app.get('/api/user',ensureTokenAuthenticated, apiController.user);

    app.get('/api/user/query',ensureTokenAuthenticated, apiController.user);
    app.get('/api/user/getModelList',ensureTokenAuthenticated, apiController.user);
    app.get('/api/model/create',ensureTokenAuthenticated, apiController.user);
    app.get('/api/model/update',ensureTokenAuthenticated, apiController.user);
    app.get('/api/model/get',ensureTokenAuthenticated, apiController.user);
    app.get('/api/model/delete',ensureTokenAuthenticated, apiController.user);
    app.get('/api/script/create',ensureTokenAuthenticated, apiController.user);
    app.get('/api/script/update',ensureTokenAuthenticated, apiController.user);
    app.get('/api/script/get',ensureTokenAuthenticated, apiController.user);
    app.get('/api/script/delete',ensureTokenAuthenticated, apiController.user);
    app.get('/api/param/create',ensureTokenAuthenticated, apiController.user);
    app.get('/api/param/update',ensureTokenAuthenticated, apiController.user);
    app.get('/api/param/get',ensureTokenAuthenticated, apiController.user);
    app.get('/api/param/delete',ensureTokenAuthenticated, apiController.user);
    app.get('/api/variable/create',ensureTokenAuthenticated, apiController.user);
    app.get('/api/variable/update',ensureTokenAuthenticated, apiController.user);
    app.get('/api/variable/get',ensureTokenAuthenticated, apiController.user);
    app.get('/api/variable/delete',ensureTokenAuthenticated, apiController.user);
    app.get('/api/path/generate',ensureTokenAuthenticated, apiController.user);
    app.get('/api/path/create',ensureTokenAuthenticated, apiController.user);
    app.get('/api/path/update',ensureTokenAuthenticated, apiController.user);
    app.get('/api/path/get',ensureTokenAuthenticated, apiController.user);
    app.get('/api/path/delete',ensureTokenAuthenticated, apiController.user);
    app.get('/api/path/getJsScript',ensureTokenAuthenticated, apiController.user);
    app.get('/api/case/create',ensureTokenAuthenticated, apiController.user);
    app.get('/api/case/update',ensureTokenAuthenticated, apiController.user);
    app.get('/api/case/get',ensureTokenAuthenticated, apiController.user);
    app.get('/api/case/delete',ensureTokenAuthenticated, apiController.user);
    app.get('/api/scenario/create',ensureTokenAuthenticated, apiController.user);
    app.get('/api/scenario/update',ensureTokenAuthenticated, apiController.user);
    app.get('/api/scenario/get',ensureTokenAuthenticated, apiController.user);
    app.get('/api/scenario/delete',ensureTokenAuthenticated, apiController.user);
    app.get('/api/scenario/getCaseList',ensureTokenAuthenticated, apiController.user);
    app.get('/api/invoke/run',ensureTokenAuthenticated, apiController.user);
    app.get('/api/invoke/result',ensureTokenAuthenticated, apiController.user);
    app.get('/api/folder/create',ensureTokenAuthenticated, apiController.user);
    app.get('/api/folder/update',ensureTokenAuthenticated, apiController.user);
    app.get('/api/folder/get',ensureTokenAuthenticated, apiController.user);
    app.get('/api/folder/delete',ensureTokenAuthenticated, apiController.user);



    app.post('/api/user',ensureTokenAuthenticated, apiController.user);
    app.post('/api/user/query',ensureTokenAuthenticated, apiController.user);
    app.post('/api/user/getModelList',ensureTokenAuthenticated, apiController.user);
    app.post('/api/model/create',ensureTokenAuthenticated, apiController.user);
    app.post('/api/model/update',ensureTokenAuthenticated, apiController.user);
    app.post('/api/model/get',ensureTokenAuthenticated, apiController.user);
    app.post('/api/model/delete',ensureTokenAuthenticated, apiController.user);
    app.post('/api/script/create',ensureTokenAuthenticated, apiController.user);
    app.post('/api/script/update',ensureTokenAuthenticated, apiController.user);
    app.post('/api/script/get',ensureTokenAuthenticated, apiController.user);
    app.post('/api/script/delete',ensureTokenAuthenticated, apiController.user);
    app.post('/api/param/create',ensureTokenAuthenticated, apiController.user);
    app.post('/api/param/update',ensureTokenAuthenticated, apiController.user);
    app.post('/api/param/get',ensureTokenAuthenticated, apiController.user);
    app.post('/api/param/delete',ensureTokenAuthenticated, apiController.user);
    app.post('/api/variable/create',ensureTokenAuthenticated, apiController.user);
    app.post('/api/variable/update',ensureTokenAuthenticated, apiController.user);
    app.post('/api/variable/get',ensureTokenAuthenticated, apiController.user);
    app.post('/api/variable/delete',ensureTokenAuthenticated, apiController.user);
    app.post('/api/path/generate',ensureTokenAuthenticated, apiController.user);
    app.post('/api/path/create',ensureTokenAuthenticated, apiController.user);
    app.post('/api/path/update',ensureTokenAuthenticated, apiController.user);
    app.post('/api/path/get',ensureTokenAuthenticated, apiController.user);
    app.post('/api/path/delete',ensureTokenAuthenticated, apiController.user);
    app.post('/api/path/getJsScript',ensureTokenAuthenticated, apiController.user);
    app.post('/api/case/create',ensureTokenAuthenticated, apiController.user);
    app.post('/api/case/update',ensureTokenAuthenticated, apiController.user);
    app.post('/api/case/get',ensureTokenAuthenticated, apiController.user);
    app.post('/api/case/delete',ensureTokenAuthenticated, apiController.user);
    app.post('/api/scenario/create',ensureTokenAuthenticated, apiController.user);
    app.post('/api/scenario/update',ensureTokenAuthenticated, apiController.user);
    app.post('/api/scenario/get',ensureTokenAuthenticated, apiController.user);
    app.post('/api/scenario/delete',ensureTokenAuthenticated, apiController.user);
    app.post('/api/scenario/getCaseList',ensureTokenAuthenticated, apiController.user);
    app.post('/api/invoke/run',ensureTokenAuthenticated, apiController.user);
    app.post('/api/invoke/result',ensureTokenAuthenticated, apiController.user);
    app.post('/api/folder/create',ensureTokenAuthenticated, apiController.user);
    app.post('/api/folder/update',ensureTokenAuthenticated, apiController.user);
    app.post('/api/folder/get',ensureTokenAuthenticated, apiController.user);
    app.post('/api/folder/delete',ensureTokenAuthenticated, apiController.user);










    //接口认证token获取
    app.get('/api/authenticate', loginController.getAuthUser,function(req, res){

        var user = req.session.user;
        var token = req.session.token;

        if(!token){
            token = jwt.sign(user, app.get('superSecret'), {
                expiresIn: 1440 // expires in 24 hours
            });
            req.session.token = token;
        }

       // 检查是否过期，如果过期直接新建token
       jwt.verify(token, app.get('superSecret'), function(err, decoded) {
            if (err) {
                token = jwt.sign(user, app.get('superSecret'), {
                    expiresIn: 1440 // expires in 24 hours
                });
                req.session.token = token;
                return res.json({
                    success: true,
                    message: 'Token',
                    token: token,
                    user:user
                });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                return res.json({
                    success: true,
                    message: 'Token',
                    token: token,
                    user:user
                });
            }
        });





    });


    // 'rendering' can be used to format api calls (if you have an api)
    // into either html or json depending on the 'Accept' request header

    // rendering 能用在标准化api的访问，返回json格式串

    app.get('/apitest', function(req, res) {
        rendering.render(req, res, {
            'data': {
                'test': {
                    'testsub': {
                        'str': 'testsub hello world'
                    },
                    'testsub2': 42
                },
                'test2': 'hello world'
            }
        });
    })


    // Auth Middleware 认证
    function ensureAuthenticated(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect('/login');
    }

    // token Middleware 认证
    function ensureTokenAuthenticated(req, res, next) {

        var token = req.body.token || req.query.token || req.headers['x-access-token']||req.session.token ;

        if (token) {
            // verifies secret and checks exp
            jwt.verify(token, app.get('superSecret'), function(err, decoded) {
                if (err) {
                    return res.json({ success: false, message: 'token认证失败.' });
                } else {
                    // if everything is good, save to request for use in other routes
                    req.decoded = decoded;
                    return next();
                }
            });

        } else {

            // 没有token信息返回错误信息

            req.flash('success', '请点击获取token按钮，获取token');
            res.redirect('/api/authenticate');


        }

    }


}
