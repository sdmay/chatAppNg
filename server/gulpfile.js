var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task('default', function () { 
    console.log('Hello Gulp!') 
});

gulp.task("build", function () {
    return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest("./dist"));
});
