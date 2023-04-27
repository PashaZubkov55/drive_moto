
const gulp  = require('gulp'); 
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer')



function fonts() {
    gulp.src('./src/styles/fonts/*.{eot,woff,woff2,css}')
    .pipe(gulp.dest('public/styles/fonts'))
  };
  function images(){
    gulp.src('./src/styles/image/*.{png,jpg,svg}')
    .pipe(gulp.dest('public/styles/image'))
  };

  function sassToCss() {
    gulp.src('./src/styles/sass/*.sass')
    .pipe(sourcemaps.init())       // активируем gulp-sourcemaps
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(concat('style.css')) 
        .pipe(sourcemaps.write("."))   
        .pipe(gulp.dest("public/styles/css"));
}

function html() {
  gulp.src('./src/index.html')
  .pipe(gulp.dest('public/'))
  
}
  
  exports.default= gulp.parallel(images, fonts, html, sassToCss,);