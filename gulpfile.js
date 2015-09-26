var gulp = require("gulp"),
  connect = require("gulp-connect"),
  babel = require("gulp-babel"),
  react = require("gulp-react"),
  sass = require("gulp-sass");

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
  .on("error", function (err) {
    console.log(err);
    this.end();
  })
  .pipe(gulp.dest("dist/"));
});

gulp.task("sass", function () {
  gulp.src("src/css/*.scss")
  .pipe(sass().on("error", sass.logError))
  .pipe(gulp.dest("dist/"));
});

gulp.task("watch", function () {
  gulp.watch("src/js/*.js", ["babel"]);
  gulp.watch("src/jsx/*.jsx", ["react"]);
  gulp.watch("src/css/*.scss", ["sass"]);
});

gulp.task("default", ["babel", "react", "sass", "webserver", "watch"]);
