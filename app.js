
// TODO: Find a better way to load different configs in different env
var dbConfig;
var config;
try {
  //  开发配置文件
    dbConfig = require('./graphtest-app/config/db.dev.conf.js');
    config = require('./graphtest-app/config/app.dev.conf.js');
} catch(e) {
  try {
    // 生产环境配置文件
      dbConfig = require('./graphtest-app/config/db.conf.js');
      config = require('./graphtest-app/config/app.conf.js');
  } catch(e) {
    console.log('启动失败，没有配置文件可以读取！');
    return false;
  }
}


var knex = require('knex')({
      client: 'mysql',
      connection: dbConfig
    }),
    express = require('express'),
    //用body parser 来解析post和url信息中的参数
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    cookieSession = require('cookie-session'),
    serveStatic = require('serve-static'),
    expressValidator = require('express-validator'),
    flash = require('connect-flash'),
    swig = require('swig'),
    passport = require('passport'),
    crypto = require('crypto'),
    Bookshelf = require('bookshelf'),
    messages = require('./graphtest-app/util/messages');


var app = express();

Bookshelf.mysqlAuth = Bookshelf(knex);
//若需要使用签名，需要指定一个secret,字符串halsisiHHh445JjO0,否者会报错
app.use(cookieParser('halsisiHHh445JjO0'));

app.use(cookieSession({
  keys: ['key1', 'key2']
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(expressValidator());
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(serveStatic('./graphtest-app/public'));
//app.use(express.favicon(__dirname + '/public/images/shortcut-icon.png'));
app.use(messages());


//制定模板引擎
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/graphtest-app/server/views');


//密码配置参数
app.set('superSecret', config.secret);

require('./graphtest-app/util/auth')(passport);
require('./graphtest-app/server/routes')(app, passport);






app.listen(process.env.PORT || 3333);

console.log('Listening on port 3333');
