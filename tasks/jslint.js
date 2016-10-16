var gulp = require('gulp');
var jshint = require('gulp-jshint');


function bundle() {
    return gulp.src('./src/assets/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
}



module.exports = bundle;
