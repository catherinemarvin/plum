var gulp = require("gulp"),
  connect = require("gulp-connect"),
  babel = require("gulp-babel"),
  react = require("gulp-react");

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

gulp.task("react", function () {
  gulp.src("src/jsx/*.jsx")
  .pipe(react())
  .pipe(gulp.dest("dist/"));
});

gulp.task("watch", function () {
  gulp.watch("src/js/*.js", ["babel"]);
  gulp.watch("src/jsx/*.jsx", ["react"]);
});

gulp.task("default", ["babel", "react", "webserver", "watch"]);
