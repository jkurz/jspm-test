// modules
var gulp = require("gulp"),
    path = require("path"),
    pkg = require("./package.json"),
    karma = require('karma').server,
    del = require("del"),
    finalhandler = require('finalhandler'),
    http = require('http'),
    serveStatic = require('serve-static'),
    $ = require('gulp-load-plugins')();

// settings for gulpfile
var MODULE_NAME =  'unlockedApp',
    SRC  = 'app',
    SRC_ALL  = path.join(SRC, '**');

gulp.task("default", ["run"]);
gulp.task("run", run);
gulp.task('test', testApp);

// default gulp build
function run() {
  gulp.watch(SRC_ALL, []);
}

// test application
function testApp () {
    console.log(KARMA.cfg)
  karma.start({configFile: KARMA.cfg}, function (exitCode) {
    $.util.log('Karma has exited with ' + exitCode);
    process.exit(exitCode);
  });

}
