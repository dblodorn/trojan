const gulp        = require('gulp');
const gutil       = require('gulp-util');
const fs          = require('fs');
const sftp        = require('gulp-sftp');
const watch       = require('gulp-watch');
const config      = require('./deploy.json');

const watchFolder = './trojan-api/**/*';

function api() {
  return gulp.src(watchFolder)
    .pipe(sftp({
      host: config.sftp_host,
      user: config.sftp_user,
      remotePath: config.sftp_directory,
      passphrase: config.passphrase
    }));
}

gulp.task('default', function() {
  gulp.watch(watchFolder, gulp.series(api));
});

