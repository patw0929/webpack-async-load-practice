var gulp = require('gulp');
var webpack = require('gulp-webpack');

gulp.task('webpack', function () {
  return gulp.src('entry.js')
             .pipe(webpack({
                context: __dirname + '/app',
                entry: './entry',
                output: {
                  path: __dirname + "/dist",
                  publicPath: "./dist/",
                  filename: "bundle.js",
                  chunkFilename: "[id].bundle.js"
                }
             }))
             .pipe(gulp.dest('dist/'));
});
