// modules
var gulp = require("gulp"),
    pkg = require("./package.json"),
    karma = require('karma').server,
    $ = require('gulp-load-plugins')();



// settings for gulpfile
var karmaCfg = __dirname + '/karma.conf.js';

gulp.task("default", ["run"]);
gulp.task("run", run);
gulp.task('test', testApp);

// default gulp build
function run() {
  gulp.watch(SRC_ALL, []);
}

// test application
function testApp () {
  karma.start({configFile: karmaCfg}, function (exitCode) {
    $.util.log('Karma has exited with ' + exitCode);
    process.exit(exitCode);
  });

}
