const gulp=require("gulp");
const $=require("gulp-load-plugins")();


function actualizarPagina(){
    console.log('actualizando');

    $.livereload.listen();

    return gulp
        .src('./starter-code/src/functions-and-arrays.js')
        .pipe($.livereload())
    ;
}


gulp.task("watch",()=>{
    gulp.watch("./starter-code/src/",actualizarPagina);
});