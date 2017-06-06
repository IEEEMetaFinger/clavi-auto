var gulp = require('gulp');
var pug = require('gulp-pug');



gulp.task('buildhtml', function () {
    return gulp.src('src/**/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('build/www'))
});


gulp.task('default', ['buildhtml']);
