
/// <binding ProjectOpened='WatchLess, libsJS, libsLessToCss, smartLessToCss' />
var gulp = require('gulp');
var path = require('path');
var less = require('gulp-less');
var concat = require('gulp-concat');
var minify = require('gulp-minify');

var lessFiles = './wwwroot/assets/less/**/*.less';
var cssPath = './wwwroot/assets/css';
var appPath = './wwwroot/app';
var jsLibsPath = './wwwroot/assets/js';

var libmultitenantdemoJS = [
    './wwwroot/lib/angular/angular.js',
    './wwwroot/lib/jquery/dist/jquery.js',
    './wwwroot/lib/angular-animate/angular-animate.js',
    './wwwroot/lib/angular-aria/angular-aria.js',
    './wwwroot/lib/moment/moment.js',
    './wwwroot/lib/angular-ui-router/release/angular-ui-router.js',
    './wwwroot/lib/ng-currency/dist/ng-currency.js',
    './wwwroot/lib/angular-locale-pt-br/angular-locale_pt-br.js',
    './wwwroot/lib/angular-gridster/dist/angular-gridster.min.js',
    './wwwroot/lib/angular-aria/angular-aria.js',
    './wwwroot/lib/angular-moment/angular-moment.js',
    './wwwroot/lib/angular-material/angular-material.js',
    './wwwroot/lib/angular-messages/angular-messages.js',
    './wwwroot/lib/angular-mask/dist/ngmask.min.js',
    './wwwroot/lib/angular-slick/dist/slick.min.js',
    //'./wwwroot/lib/slick-carousel/slick/slick.js',
    './wwwroot/lib/gerador-validador-cpf/dist/js/cpf.min.js',
    './wwwroot/lib/chart.js/dist/Chart.js',
    './wwwroot/lib/angular-chart.js/dist/angular-chart.js',
    './wwwroot/lib/toastr/toastr.min.js',
    './wwwroot/lib/crypto-js/crypto-js.js',
    './wwwroot/lib/angular-input-masks/angular-input-masks-standalone.min.js',
    './wwwroot/lib/angular-local-storage/dist/angular-local-storage.js',
    './wwwroot/lib/webcamjs/webcam.js',
    './wwwroot/lib/ng-webcam/dist/ng-webcam.js',
    './wwwroot/lib/angular-print/angularprint.js',
    './wwwroot/lib/angular-base64-upload/dist/angular-base64-upload.js',
    './wwwroot/lib/signalr/jquery.signalR.min.js'
];

gulp.task('LessToCss', function () {
    return gulp.src('./wwwroot/assets/less/imports-smart.less')
       .pipe(less({
           paths: [path.join(__dirname, 'less', 'include')]
       }))
       .pipe(concat('smart.css'))
       .pipe(gulp.dest(cssPath));
});

gulp.task('libsLessToCss', function () {
    return gulp.src('./wwwroot/assets/less/imports-libs.less')
       .pipe(less({
           paths: [path.join(__dirname, 'less', 'include')]
       }))
       .pipe(concat('libs.css'))
       .pipe(gulp.dest(cssPath));
});

gulp.task('libsJS', function () {
    return gulp.src(libmultitenantdemoJS)
      .pipe(concat('libs.js'))
      .pipe(minify())
      .pipe(gulp.dest(jsLibsPath));
});

gulp.task('WatchLess', function () {
    gulp.watch(lessFiles, {}, ['LessToCss', 'libsLessToCss']);
});
