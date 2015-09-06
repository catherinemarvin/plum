var gulp = require("gulp"),
  connect = require("gulp-connect"),
  babel = require("gulp-babel");

gulp.task("webserver", function () {
  connect.server({
    livereload: true,
  });
});

gulp.task("babel", function () {
  gulp.src("src/js/*.js")
  .pipe(babel())
  .pipe(gulp.dest("dist/"));
});

gulp.task("watch", function () {
  gulp.watch("src/js/*.js", ["babel"]);
});

gulp.task("default", ["babel", "webserver", "watch"]);
