'use strict'

globalOpt = require './config.coffee'

appTask = require './tasks/app.coffee'
libTask = require './tasks/lib.coffee'
revisionTask = require './tasks/revision.coffee'
cleanTask = require './tasks/clean.coffee'
watchTask = require './tasks/watch.coffee'

gulp = require 'gulp'
runSequence = require('run-sequence').use gulp

module.exports = ->
  # for libs
  gulp.task 'lib-style', -> libTask.style()
  gulp.task 'lib-script', -> libTask.script()

  # for app
  gulp.task 'app-script', -> appTask.script()
  gulp.task 'app-sprite', ->
    appTask.sprite1x()
    appTask.sprite2x()

  gulp.task 'app-style', -> appTask.style()
  gulp.task 'app-font', -> appTask.font()
  gulp.task 'app-template', -> appTask.templates()
  gulp.task 'app-image', -> appTask.image()

  # for lib-img-copy
  # gulp.task 'lib-img-copy', -> libImgCopyTask.libImgCopyTask()

  # else
  gulp.task 'revision', -> revisionTask.revision()
  gulp.task 'clean', -> cleanTask.clean()

  # global
  gulp.task 'watch', ->
    globalOpt.isWatch = true
    gulp.task 'browser-sync', -> watchTask.browserSync()
    gulp.task 'watch-app', -> watchTask.watch()
    runSequence 'clean', 'lib-style', 'lib-script', 'app-script', 'app-sprite', 'app-style', 'app-font', 'app-template', 'app-image', 'revision', 'browser-sync', 'watch-app'

  gulp.task 'default', ->
    runSequence 'clean', 'lib-style', 'lib-script', 'app-script', 'app-sprite', 'app-style', 'app-font', 'app-template', 'app-image', 'revision'
