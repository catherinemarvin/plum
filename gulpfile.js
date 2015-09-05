var gulp = require("gulp"),
  connect = require("gulp-connect"),
  babel = require("gulp-babel");

gulp.task("webserver", function () {
  connect.server();
});

gulp.task("babel", function () {
  return gulp.src("src/js/bpm-counter.js")
  .pipe(babel())
  .pipe(gulp.dest("dist/"));
});

gulp.task("default", ["webserver"]);
